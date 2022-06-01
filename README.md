## Application Structure

App components

- Form /src/components/Form.tsx
- Result /src/components/Result.tsx

App views
- Calculator /src/views/Calculator.tsx

Css modules

Each component contain a file of type NameComponent.moduule.css

Inside has css code tat to be used must be imported in the following way:

import styles from 'NameComponent.moduule.css';

Now we can use it as an object for guarantee the css encapsulation in the following way

className = {styles.class_name}

## Run project commands

npm run install

npm run start






