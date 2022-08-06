
import { useState } from 'react';
import './App.css';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Login from './components/Login';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-east-1_8WMsl8AMg',
    ClientId: '41qemsprq6sqqjraln2kqr04k7'
  };

  const UserPool = new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();
    console.log(email, password)

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
      console.log('successfullly')
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Signup</button>
      </form>

      <Login></Login>
    </div>
  );
}

export default App;
