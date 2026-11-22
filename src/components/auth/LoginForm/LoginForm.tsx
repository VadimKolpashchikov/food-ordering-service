import Input from '@/components/UI/Input/Input';
import styles from '../AuthForm.module.scss';
import Button from '@/components/UI/Button/Button';

export default function LoginForm() {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <form className={styles['auth-form']} onSubmit={onSubmit}>
      <Input
        className={styles['auth-form__field']}
        label="Email"
        name="email"
        placeholder="Email"
      />

      <Input
        className={styles['auth-form__field']}
        name="password"
        label="Пароль"
        placeholder="Пароль"
      />

      <Button
        type="submit"
        className={styles['auth-form__button-submit']}
        size="xl"
      >
        Вход
      </Button>
    </form>
  );
}
