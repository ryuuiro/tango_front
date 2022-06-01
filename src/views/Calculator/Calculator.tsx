import React from 'react';
import Form from '../../components/Form';
import Result from '../../components/Result';
import styles from './Calculator.module.css';

const Calculator = () => {
    return (
        <div className={styles.calculator}>
            <h1>
              Calculate Fibonacci!
            </h1>
            <Form />
            <Result />
        </div>
    );
}

export default Calculator;