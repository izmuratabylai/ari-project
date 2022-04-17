import './css/uifonts.css'
import './css/props.css'
import './css/App.css';



//Screens
import Header from './screens/header';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home'
import Rightbar from './screens/rightbar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
      </div>
      <Rightbar/>
    </div>
  );
}

export default App;
