import './ContactForm.css'

import { useForm } from 'react-hook-form'
import { useTranslations, type LangKey } from '@i18n/utils'
import type { IContactFormData } from '@custom-types/types'
import FormField from '../FormField/FormField'
import SendIcon from '@icons/send-fill'

interface Props {
  lang: LangKey
}

const ContactForm = ({ lang }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
  } = useForm<IContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  const t = useTranslations(lang)

  const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY

  const onSubmit = async (data: IContactFormData) => {
    try {
      const recaptcha = await grecaptcha.execute(siteKey, {
        action: 'contact_form',
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptcha,
        }),
      })

      if (!response.ok) {
        setError('root', {}) // Empty object, no message needed
        return
      }

      await response.json()
      reset()
    } catch (error) {
      console.log(error)

      setError('root', {}) // Empty object, no message needed
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        type="text"
        id="name"
        label={t('contact-form.name.label')}
        required
        placeholder={t('contact-form.name.placeholder')}
        registerProps={register('name', {
          required: t('contact-form.name.error.required'),
          minLength: {
            value: 2,
            message: t('contact-form.name.error.min'),
          },
        })}
        fieldError={errors.name}
      />
      <FormField
        type="email"
        id="email"
        label={t('contact-form.email.label')}
        required
        placeholder={t('contact-form.email.placeholder')}
        registerProps={register('email', {
          required: t('contact-form.email.error.required'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
            message: t('contact-form.email.error.invalid'),
          },
        })}
        fieldError={errors.email}
      />
      <FormField
        type="text"
        id="phone"
        label={t('contact-form.phone.label')}
        placeholder={t('contact-form.phone.placeholder')}
        registerProps={register('phone')}
        fieldError={errors.phone}
      />
      <FormField
        type="text"
        id="company"
        label={t('contact-form.company.label')}
        placeholder={t('contact-form.company.placeholder')}
        registerProps={register('company')}
        fieldError={errors.company}
      />
      <FormField
        type="textarea"
        id="message"
        label={t('contact-form.message.label')}
        required
        placeholder={t('contact-form.message.placeholder')}
        registerProps={register('message', {
          required: t('contact-form.message.error.required'),
        })}
        fieldError={errors.message}
      />

      {isSubmitSuccessful && <p className="contact-form__success">{t('contact-form.success')}</p>}
      {errors.root && <p className="contact-form__error">{t('contact-form.error')}</p>}

      <button className="grecaptcha contact-form__submit | button" disabled={isSubmitting}>
        {t('contact-form.submit')}{' '}
        {isSubmitting ? <span className="contact-form__loader"></span> : <SendIcon />}
      </button>
    </form>
  )
}

export default ContactForm
