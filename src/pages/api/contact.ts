import type { APIRoute } from 'astro'
import type { IContactFormData } from '@custom-types/types'

const recaptchaSecretKey = import.meta.env.RECAPTCHA_SECRET_KEY

const brevoApiKey = import.meta.env.BREVO_API_KEY
const fromEmail = import.meta.env.EMAIL_FROM
const toEmail = import.meta.env.EMAIL_TO

const validateRecaptcha = async (token: string) => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: recaptchaSecretKey,
        response: token,
      }),
    })

    if (!response.ok) return false

    const data = await response.json()
    return data.success && data.score >= 0.5
  } catch (error) {
    return false
  }
}

const sendEmail = async (formData: IContactFormData) => {
  const emailData = {
    sender: {
      name: 'TamasSallai.hu',
      email: fromEmail,
    },
    to: [
      {
        email: toEmail,
      },
    ],
    subject: `Kapcsolat felvétel, ${formData.name}`,
    htmlContent: `
      <h3>Új Üzenet</h3>
      <p><strong>Név:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ''}
      ${formData.company ? `<p><strong>Cég:</strong> ${formData.company}</p>` : ''}
      <p><strong>Üzenet:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `,
    replyTo: {
      email: formData.email,
      name: formData.name,
    },
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Brevo API error: ${error.message || 'Unknown error'}`)
  }

  return response
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as IContactFormData

    // Validate reCAPTCHA
    const isValidRecaptcha = await validateRecaptcha(data.recaptcha)
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({
          message: 'Invalid reCAPTCHA',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    await sendEmail(data)

    return new Response(
      JSON.stringify({
        message: 'Message sent successfully',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.log(error)

    return new Response(
      JSON.stringify({
        message: 'Something went wrong',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
