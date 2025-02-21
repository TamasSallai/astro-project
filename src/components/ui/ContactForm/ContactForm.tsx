import { useForm } from 'react-hook-form'
import type { IContactFormFields } from '@custom-types/types'
import { useTranslations, type LangKey } from '@i18n/utils'
import SendIcon from '@icons/send-fill'
import FormField from '../FormField/FormField'
import './ContactForm.css'

interface Props {
  lang: LangKey
}

const ContactForm = ({ lang }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IContactFormFields>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  const t = useTranslations(lang)

  const onSubmit = async (data: IContactFormFields) => {
    console.log('Sending request...')

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 3000)
      })
      console.log('Request resolved successfully')
    } catch (error) {
      console.error('Form submission failed:', error)
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
          required: true,
        })}
        fieldError={errors.message}
      />
      <button className="contact-form__submit | button" disabled={isSubmitting}>
        {t('contact-form.submit')}{' '}
        {isSubmitting ? <span className="contact-form__loader"></span> : <SendIcon />}
      </button>
    </form>
  )
}

export default ContactForm
