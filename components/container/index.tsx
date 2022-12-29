import styles from './index.module.css';
import Image from 'next/image';
import Head from 'next/head';
const ContainerCom: React.FC<{ children?: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <div className={styles.containerRow}>
      <div className={styles.containerDiv}>
        {children !== undefined && children}
      </div>
    </div>
  );
};
export default ContainerCom;
