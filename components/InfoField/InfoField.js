import styles from '../InfoField/InfoField.module.css'

export default function InfoField(props) {
    return (
      <div className={styles.infoRow}>
        <div className={styles.value}>
          <p>{props.value}</p>
        </div>
      </div>
    );
  }
  