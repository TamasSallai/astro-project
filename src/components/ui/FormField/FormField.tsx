import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import './FormField.css'

interface Props {
  type: 'email' | 'text' | 'textarea'
  id: string
  label: string
  required?: boolean
  placeholder?: string
  registerProps: UseFormRegisterReturn
  fieldError?: FieldError
}

const FormField = ({
  type,
  id,
  label,
  required,
  placeholder,
  registerProps,
  fieldError,
}: Props) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label} {required && <span className="form-field__required">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          className="form-field__input"
          id={id}
          required={required}
          placeholder={placeholder}
          {...registerProps}
          aria-invalid={fieldError ? true : false}
          rows={4}
        />
      ) : (
        <input
          className="form-field__input"
          type={type}
          id={id}
          required={required}
          placeholder={placeholder}
          {...registerProps}
          aria-invalid={fieldError ? true : false}
        />
      )}
      {fieldError && <p className="form-field__error">{fieldError.message}</p>}
    </div>
  )
}

export default FormField
