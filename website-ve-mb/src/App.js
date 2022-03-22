import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Payment from './pages/Payment/PaymentPage';
import FlightSearchingPage from './pages/FlightSearching/FlightSearchingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/flight-search" element={<FlightSearchingPage/>}/>
      </Routes>
  </Router> 
  );
}

export default App;
