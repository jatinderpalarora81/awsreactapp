import logo from './logo.svg';
import './App.css';
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>hello new world</h1>
      </header>
        {/*<AmplifySignOut/>*/}
    </div>
  );
}

// export default withAuthenticator(App);
export default App;
