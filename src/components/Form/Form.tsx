import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return (
        <div className={styles.form}>
            <input className={styles.input} />
            <div className={styles.button}> Calculate </div>
        </div>
    );
}

export default Form;