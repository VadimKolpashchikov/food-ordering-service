import cn from 'classnames';
import type { InputProps } from './Input.props';
import styles from './Input.module.scss';
import FormField from '../FormField/FormField';

function Input({
  type = 'text',
  className,
  invalid = false,
  label,
  ...props
}: InputProps) {
  return (
    <FormField invalid={invalid} label={label}>
      <input
        {...props}
        type={type}
        className={cn(
          className,
          styles['input'],
          { [styles['input_invalid']]: invalid },
        )}
      />
    </FormField>
  );
}

export default Input;
