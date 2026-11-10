import cn from 'classnames';
import type { InputProps } from './Input.props';
import styles from './Input.module.scss';
import FormField from '../FormField/FormField';

function Input({
  type = 'text',
  className,
  invalid = false,
  label,
  prepend,
  append,
  appearance = 'big',
  ...props
}: InputProps) {
  return (
    <FormField invalid={invalid} label={label}>
      <div className={cn(
        className,
        styles['input-wrap'],
        styles[`input_${appearance}`],
        {
          [styles['invalid']]: invalid,
          [styles['with-prepend']]: prepend,
          [styles['with-append']]: append,
        },
      )}
      >
        {prepend}
        <input
          {...props}
          type={type}
          className={styles['input']}
        />
        {append}
      </div>
    </FormField>
  );
}

export default Input;
