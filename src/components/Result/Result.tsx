import React from 'react';
import styles from './Result.module.css';

type ComponentProps = {
    result: any;
};

const Calculator = ({ result }: ComponentProps) => {
    return (
        <div>
            <p className={styles.result}>
              Fibonacci Result: 
              <span className={styles.result_number}> {result}</span>
            </p>
        </div>
    );
};

export default Calculator;