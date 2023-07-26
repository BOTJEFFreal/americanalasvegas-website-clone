import './App.css';
import EventsPage from './pages/events/events';
import JobsPage from './pages/jobs/jobs'
import PartyPage from './pages/party/party';
import MenuPage from './pages/menu/menu';
import MainPage from './pages/main/main'
import Carousel from './components/carousel/carousel'
import CarouselCopy from './components/carouselText/carouselText'
import Imagegrid from './components/imagegrid/imagegrid';
import DrinksPage from './pages/drinks/drinks'
import CateringPage from './pages/catering/catering';
import ReservationPage from  './pages/reservation/reservation';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import CarouselCard from './components/carouselCard/carouselCard';
import Header from './components/header/header'
import OpenStreetMap from './components/map/openStreetMap';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Routes>
   
        <Route index element ={<MainPage/>} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/reserve" element={<ReservationPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
  
  </Routes>
  );
}

export default App;
