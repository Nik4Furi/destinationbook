import { BrowserRouter, Routes, Route } from "react-router-dom";


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

//Components Stuff
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/Layout/ProtectedRoute';
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
import SponserDashboard from './pages/Sponser/Dashboard'
import Places from './pages/Admin/Places'
import Users from './pages/Admin/Users'
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Logout from "./pages/Logout";
import SponserLayout from "./components/Sponser/SponserLayout";
import AddPlace from "./pages/Sponser/AddPlace";
import ShowPlaces from "./pages/Sponser/ShowPlaces";
import EditDetails from "./pages/Sponser/EditDetails";
import CheckDashboard from "./components/Layout/CheckDashboard";
import UserDashboard from "./pages/User/UserDashboard";
import UserLayout from "./components/User/UserLayout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Home page  */}
          <Route path="/" element={<Layout>
            {/* <ProtectedRoute> */}
            <Home />
            {/* </ProtectedRoute> */}
          </Layout>} />

          {/* Contact Us page  */}
          <Route path="/contact" element={<Layout>
            <ContactUs />
          </Layout>} />

          {/* Contact Us page  */}
          <Route path="/paymentsuccess" element={<Layout>
            <ProtectedRoute>
            {/* <PaymentSuccess /> */}
            <PaymentError /> </ProtectedRoute>
          </Layout>} />

          {/* Register Page  */}
          <Route path="/register" element={<Layout>
            <Register />
          </Layout>} />

          {/* Login Page  */}
          <Route path="/login" element={<Layout>
            <Login />
          </Layout>} />

          {/* Logout page  */}
          <Route path="/logout" element={<Layout>
            <ProtectedRoute>
            <Logout /></ProtectedRoute>
          </Layout>} />

          {/* Login Page  */}
          <Route path="/about" element={<Layout>
          <About />
          </Layout>} />

          {/* Destination Info Page  */}
          <Route path="/destinationinfo/:id" element={<Layout>
            <DestinationInfo />
          </Layout>} />

          {/*Book Now Page  */}
          <Route path="/booknow/:id" element={<Layout>
            <ProtectedRoute>
            <BookNow /> </ProtectedRoute>
          </Layout>} />

          {/*Checkout  Page  */}
          <Route path="/checkout" element={<Layout>
            <ProtectedRoute>
            <Checkout /> </ProtectedRoute>
          </Layout>} />

{/* Checking the dashboard of the users  */}
<Route path="/checkDashboard" element={<Layout>
            <ProtectedRoute>
            <CheckDashboard /> </ProtectedRoute>
          </Layout>} />

          {/* Users Pages  */}
<Route path="/userDashboard" element={<Layout>
            <ProtectedRoute>
              <UserLayout >
            <UserDashboard />
            </UserLayout> </ProtectedRoute>
          </Layout>} />


          {/*Sponser  Page  */}
          {/* <Route path="/sponser" element={<Layout>
            <ProtectedRoute>
              <SponserLayout>
            <Sponser /></SponserLayout> </ProtectedRoute>
          </Layout>} /> */}
          {/*Sponser  Page  */}
          <Route path="/sponser" element={<Layout>
            <ProtectedRoute>
              <SponserLayout>
            <SponserDashboard /></SponserLayout> </ProtectedRoute>
          </Layout>} />

          <Route path="/sponser/addplace" element={<Layout>
            <ProtectedRoute>
              <SponserLayout>
            <AddPlace /></SponserLayout> </ProtectedRoute>
          </Layout>} />

          <Route path="/sponser/showplaces" element={<Layout>
            <ProtectedRoute>
              <SponserLayout>
            <ShowPlaces /></SponserLayout> </ProtectedRoute>
          </Layout>} />

          <Route path="/sponser/editDetails/:id" element={<Layout>
            <ProtectedRoute>
              <SponserLayout>
            <EditDetails /></SponserLayout> </ProtectedRoute>
          </Layout>} />


          {/* --------------------- Admin Specific Stuff ------------------X */}
          {/*Admin  Pages  */}
          {/* Dashboard page  */}
          <Route path="/admin" element={<Layout>
            <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout> </ProtectedRoute>
          </Layout>} />

          {/* Places page  */}
          <Route path="/admin/places" element={<Layout>
            <ProtectedRoute>
            <AdminLayout>
              <Places />
            </AdminLayout> </ProtectedRoute>
          </Layout>} />

          {/* Users page */}
          <Route path="/admin/users" element={<Layout>
            <ProtectedRoute>
            <AdminLayout>
              <Users />
            </AdminLayout> </ProtectedRoute>
          </Layout>} />

          {/* Error 404 page */}
          <Route path="*" element={<Error404 />} />



        </Routes>

        <ToastContainer autoClose={2500} />
      </BrowserRouter>

    </>
  );
}

export default App;
