import React from 'react';
import Calculator from './views/Calculator';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Calculator />
        </div>
    );
}

export default App;
