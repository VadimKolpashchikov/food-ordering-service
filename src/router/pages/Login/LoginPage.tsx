import LoginForm from '@/components/auth/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';
import Title from '@/components/UI/Title/Title';
import AuthFormComment from '@/components/auth/AuthFormComment/AuthFormComment';
import routes from '@/router/routes';

export default function LoginPage() {
  return (
    <div className={styles['login-page']}>
      <Title>Вход</Title>

      <LoginForm />

      <AuthFormComment
        text="Нет аккаунта?"
        link={{
          to: routes.register.path,
          text: 'Зарегистрироваться',
        }}
      />
    </div>
  );
}
