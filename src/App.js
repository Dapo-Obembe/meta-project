import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/Booking";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
