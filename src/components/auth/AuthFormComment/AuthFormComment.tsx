import { Link } from 'react-router';
import type { AuthFormCommentProps } from './AuthFormComment.props';
import cn from 'classnames';
import styles from './AuthFormComment.module.scss';

export default function AuthFormComment({
  text, link, className, ...props
}: AuthFormCommentProps) {
  return (
    <div className={cn(styles['auth-form-comment'], className)} {...props}>
      <p className={styles['auth-form-comment__text']}>{text}</p>

      {link && <Link className={styles['auth-form-comment__link']} to={link.to}>{link.text}</Link>}
    </div>
  );
}
