import type { APIRoute } from 'astro'
import type { IContactFormData } from '@custom-types/types'

const recaptchaSecretKey = import.meta.env.RECAPTCHA_SECRET_KEY

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

    // TODO: Handle email sending logic with sendgrid

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
