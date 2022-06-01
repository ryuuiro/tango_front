import React, {useState} from 'react';
import styles from './Form.module.css';

type ComponentProps = {
    calculate: (n: number) => void;
};

const Form = ({ calculate }: ComponentProps) => {
    const [formNumber, setFormNumber] = useState(0);

    return (
        <div className={styles.form}>
            <input 
                type="number"
                className={styles.input} 
                onChange={(e) => setFormNumber(Number(e.target.value))}
            />
            <div className={styles.button} onClick={() => calculate(formNumber)}> Calculate </div>
        </div>
    );
}

export default Form;