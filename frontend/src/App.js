import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

//Components Stuff
import PrivateRoute from './components/Layout/PrivateRoute';
import AdminLayout from './components/Admin/AdminLayout'


//Pages Stuff
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import DestinationInfo from "./pages/DestinationInfo";
import BookNow from "./pages/BookNow";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ConatctUs";
import Sponser from "./pages/Sponser";

import Dashboard from './pages/Admin/Dashboard'
import Places from './pages/Admin/Places'
import Users from './pages/Admin/Users'
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import Error404 from "./pages/Error404";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Home page  */}
          <Route path="/" element={<PrivateRoute>
            <Home />
          </PrivateRoute>} />

          {/* Contact Us page  */}
          <Route path="/contact" element={<PrivateRoute>
            <ContactUs />
          </PrivateRoute>} />

          {/* Contact Us page  */}
          <Route path="/paymentsuccess" element={<PrivateRoute>
            {/* <PaymentSuccess /> */}
            <PaymentError />
          </PrivateRoute>} />

          {/* Register Page  */}
          <Route path="/register" element={<PrivateRoute>
            <Register />
          </PrivateRoute>} />

          {/* Login Page  */}
          <Route path="/login" element={<PrivateRoute>
            <Login />
          </PrivateRoute>} />

          {/* Destination Info Page  */}
          <Route path="/destinationinfo/:id" element={<PrivateRoute>
            <DestinationInfo />
          </PrivateRoute>} />

          {/*Book Now Page  */}
          <Route path="/booknow" element={<PrivateRoute>
            <BookNow />
          </PrivateRoute>} />

          {/*Checkout  Page  */}
          <Route path="/checkout" element={<PrivateRoute>
            <Checkout />
          </PrivateRoute>} />

          {/*Sponser  Page  */}
          <Route path="/sponser" element={<PrivateRoute>
            <Sponser />
          </PrivateRoute>} />


          {/* --------------------- Admin Specific Stuff ------------------X */}
          {/*Admin  Pages  */}
          {/* Dashboard page  */}
          <Route path="/admin" element={<PrivateRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </PrivateRoute>} />

          {/* Places page  */}
          <Route path="/admin/places" element={<PrivateRoute>
            <AdminLayout>
              <Places />
            </AdminLayout>
          </PrivateRoute>} />

          {/* Users page */}
          <Route path="/admin/users" element={<PrivateRoute>
            <AdminLayout>
              <Users />
            </AdminLayout>
          </PrivateRoute>} />

          {/* Error 404 page */}
          <Route path="*" element={<Error404 />} />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
