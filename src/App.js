import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Teste from './components/teste'
Amplify.configure(awsExports);


const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Teste />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            <button onClick={signOut}>Sign out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
