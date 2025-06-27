import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Authentication from './pages/Authentication/authentication.jsx';
import History from './pages/history';
import HomeComponent from './pages/home';
import LandingPage from './pages/landing.jsx';
import VideoMeetComponent from './pages/VideoMeet/VideoMeet.jsx';


function App() {
  return (
    <div className='App'>

      <Router>

      <AuthProvider>
        <Routes>
          {/* <Route path= '/home' element /> */}
          <Route path = "/" element = {<LandingPage/>}/>

          <Route path='/auth' element={<Authentication/>}></Route>
          <Route path='/home's element={<HomeComponent />} />
          <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeetComponent/>}></Route>
        </Routes>
      </AuthProvider>


      </Router>

    </div>
  );
}

export default App;
