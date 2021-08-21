import styles from './Icon.module.css';

const Icon = ({ type }) => {
  if (type === 'active') {
    return <span className={styles.dot}></span>;
  }
};

export default Icon;
