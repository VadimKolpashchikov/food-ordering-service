import type { FormFieldProps } from './FormField.props';
import styles from './FormField.module.scss';

function FormField({ children, label }: FormFieldProps) {
  return (
    <div className={styles['form-field']}>
      {label
        ? (
            <label>
              <div className={styles['form-field__label']}>{label}</div>
              {children}
            </label>
          )
        : (children)}

    </div>
  );
}

export default FormField;
