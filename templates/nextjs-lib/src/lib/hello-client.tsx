import styles from './hello-client.module.css';

export function HelloClient() {
  return (
    <div className={styles['container']}>
      <h1>Hello from Client!</h1>
    </div>
  );
}

export default HelloClient;
