import type { IContactFormData } from '@custom-types/types'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as IContactFormData

    console.log(data)

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
