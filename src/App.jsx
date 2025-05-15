import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/raleway";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import SingleAds from "./pages/SingleAds";
import RootLayout from "./layout/RootLayout";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./layout/DashboardLayout";
import Overview from "./pages/vendorDashboard/Overview";
import CreateProduct from "./pages/vendorDashboard/CreateProduct";
import VendorAds from "./pages/vendorDashboard/VendorAds";
import ManageOrder from "./pages/vendorDashboard/ManageOrder";
import UpdateProduct from "./pages/vendorDashboard/UpdateProduct";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/singleads" element={<SingleAds />} />
          <Route path="/blog" element={<Blog />} />
        </Route>


        {/* Add your dashboard routes here */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-product" element={<CreateProduct/>} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="orders" element ={<ManageOrder/>}/>
          <Route path="update/:id" element ={<UpdateProduct/>}/>
          {/* <Route path="Operator-profile" element={<OperatorProfile />} />
          <Route path="message" element={<Message />} />  */}
          
        </Route>

      </Routes>
    </Router>
  );
}

export default App;


