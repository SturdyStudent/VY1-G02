import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Payment from './pages/Payment/PaymentPage';
import FlightSearchingPage from './pages/FlightSearching/FlightSearchingPage';
import CreateFlight from './pages/CreateFlight/CreateFlight'; 
import PartnerLoginPage from './pages/PartnerLoginPage/PartnerLoginPage';
import PartnerApp from './PartnerApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/flight-search" element={<FlightSearchingPage/>}/>
        <Route path="/create-flight" element={<CreateFlight/>}/>
        <Route path="/partner-login" element={<PartnerLoginPage/>}/>
        <Route path="/partner" element={<PartnerApp/>}/>
      </Routes>
  </Router> 
  );
}

export default App;
