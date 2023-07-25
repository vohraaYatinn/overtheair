import logo from './logo.svg';
import './App.css';
import { CapacitorUpdater } from '@capgo/capacitor-updater'
CapacitorUpdater.notifyAppReady()
function App() {
  return (
    <div className="App">
  <a href="www.facebook.com">facebook</a>
  <a href="www.google.com">google</a>
  <a href="www.twitter.com">twitter</a>

  </div>
  );
}

export default App;
