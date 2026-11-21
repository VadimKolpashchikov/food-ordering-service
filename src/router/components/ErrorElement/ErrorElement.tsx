import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import { useRouteError } from 'react-router';

export default function ErrorElement() {
  const error = useRouteError();

  return <ErrorMessage error={error} />;
}
