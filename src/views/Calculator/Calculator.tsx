import React, {useState} from 'react';
import Form from '../../components/Form';
import Result from '../../components/Result';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [result, setResult] = useState<any>('');
    
    const getApiData = async (n: number) => {
        const response = await fetch(`http://localhost/api/fibonacci/${n}`)
        const data = await response.json();
        
        setResult(data.result);
    };
    
    const handleCalculation = (n: number) =>{
        getApiData(n);
    }
    
    return (
        <div className={styles.calculator}>
            <h1>
              Calculate Fibonacci!
            </h1>
            <Form calculate={handleCalculation} />
            <Result result={result} />
        </div>
    );
}

export default Calculator;