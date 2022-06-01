import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Payment from './pages/Payment/PaymentPage';
import FlightSearchResult from './pages/FlightSearchResult/FlightSearchResult';
import CreateFlight from './pages/CreateFlight/CreateFlight'; 
import Footer from './components/footer'
import PartnerLoginPage from './pages/PartnerLoginPage/PartnerLoginPage';
import PartnerSignup from './pages/PartnerSignupPage/PartnerSignup';
import PartnerApp from './PartnerApp';
import Booking_Detail from './pages/Booking_Detail/Booking_Detail';
import { Elements } from '@stripe/react-stripe-js';
import Booking_Fill_Info from './pages/Booking_Fill_Info/Booking_Fill_Info';
import Booking_Summary from './pages/Booking_Summary/Booking_Summary';
import Product from './pages/product';
import PreBooking from './pages/PreBooking/PreBooking';

function App() {
  return (
    <div id='root'>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/search-result" element={<FlightSearchResult/>}/>
            <Route path="/create-flight" element={<CreateFlight/>}/>
            <Route path="/partner-login" element={<PartnerLoginPage/>}/>
            <Route path="/partner-signup" element={<PartnerSignup/>}/>
            <Route path="/partner" element={<PartnerApp/>}/>
            <Route path="/booking-detail" element={<Booking_Detail/>}/>
            <Route path="/booking-fill" element={<Booking_Fill_Info/>}/>
            <Route path="/booking-summary" element={<Booking_Summary/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/prebooking" element={<PreBooking/>}/>
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
