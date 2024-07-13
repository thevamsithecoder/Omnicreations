import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CurrentClients from "./components/CurrentClients";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import CustomerFeedback from "./components/CustomerFeedback";
import LatestBlog from "./components/LatestBlog";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/blog" element={<LatestBlog />} />
            <Route path="/about" element={<Banner />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/service" element={<Services />} />
          </Routes>
          <Banner />
          <CurrentClients />
          <ContactUs />
          <Services />
          <CustomerFeedback />
          <LatestBlog />
          <Footer />

        </div>
      </Router>
    </>
  );
}

export default App;
