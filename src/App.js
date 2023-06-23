import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {
  Outlet
} from "react-router-dom";
Amplify.configure(awsExports);


const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out, isso é um teste</button>
          <Outlet />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
