import Title from '../UI/Title/Title';
import styles from './ErrorMessage.module.scss';

export default function ErrorMessage({ error }: { error?: unknown }) {
  let content: string | React.JSX.Element = 'Неизвестная ошибка';

  if (error instanceof Error) {
    content = (
      <>
        Что-то пошло не так:
        <br />
        <br />
        {error.message}
      </>
    );
  }

  return <Title className={styles['error-message']} level={5}>{content}</Title>;
}
