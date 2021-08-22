import styles from './Icon.module.css';

const Icon = ({ type }) => {
  if (type === 'active') {
    return <span className={styles.dot} data-testid="Icon-active"></span>;
  }
  return null;
};

export default Icon;
