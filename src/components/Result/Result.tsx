import React from 'react';
import styles from './Result.module.css';

const Calculator = () => {
    return (
        <div>
            <p className={styles.result}>
              Fibonacci Result: 
              <span className={styles.result_number}> {8}</span>
            </p>
        </div>
    );
}

export default Calculator;