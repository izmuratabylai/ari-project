import './css/uifonts.css'
import './css/props.css'
import './css/App.css';

import {Routes , Router, BrowserRouter} from 'react-router-dom'



//Screens
import Header from './screens/header';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home'
import Rightbar from './screens/rightbar';
import CoursePage from './screens/course'
import discover from './screens/discover';
import Categories from './screens/Categories';
import MyCourses from './screens/MyCourses';

function App() {
   //<Rightbar />;
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <CoursePage />
      </div>
     
    </div>
  );
}

export default App;
