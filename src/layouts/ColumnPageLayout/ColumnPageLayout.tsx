import type { ReactNode } from 'react';
import styles from './ColumnPageLayout.module.scss';

export default function ColumnPageLayout({ children, header }: { children?: ReactNode;
  header?: ReactNode; }) {
  return (
    <div className={styles['column-page-layout']}>
      {header && (
        <div className={styles['column-page-layout__header']}>
          {header}
        </div>
      )}

      {children}
    </div>
  );
}
