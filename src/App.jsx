import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/raleway";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import SingleAds from "./pages/SingleAds";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/singleads" element={<SingleAds />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
