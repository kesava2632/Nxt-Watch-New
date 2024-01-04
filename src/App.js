import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Trending from './components/TrendingPage/Trending';
import Gaming from './components/GamingPage/Gaming';
import SavedVideos from './components/SavedVideos/SavedVideos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/SavedVideos' element={<SavedVideos />} />
          <Route path='/videos/:id' element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
