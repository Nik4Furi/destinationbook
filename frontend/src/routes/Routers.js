import React, { Suspense, lazy } from 'react'


import { BrowserRouter, Routes, Route } from "react-router-dom";


// Toast Notification Stuff
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components Stuff
const Layout = lazy(() => import('../components/Layout/ProtectedLayout/Layout'))
const ProtectedRoute = lazy(() => import('../components/Layout/ProtectedLayout/ProtectedRoute'))
const AdminLayout = lazy(() => import('../components/pages/Admin/AdminLayout'))
const SponserLayout = lazy(() => import('../components/pages/Sponser/SponserLayout'))
const UserLayout = lazy(() => import('../components/pages/User/UserLayout'))
const MainLoader = lazy(() => import('../components/Layout/Loaders/MainLoader'));


// Pages Stuff
const Home = lazy(() => import('../pages/Home'));
const Spaces = lazy(() => import('../pages/Spaces'));
const ContactUs = lazy(() => import('../pages/ConatctUs'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const About = lazy(() => import('../pages/About'));
const DestinationInfo = lazy(() => import('../pages/DestinationInfo'));

//Pages
const PaymentSuccess = lazy(() => import('../pages/PaymentSuccess'));
const PaymentError = lazy(() => import('../pages/PaymentError'));
const Logout = lazy(() => import('../pages/Logout'));
const BookNow = lazy(() => import('../pages/BookNow'));
const Checkout = lazy(() => import('../pages/Checkout'));
const CheckDashboard = lazy(() => import('../components/Layout/ProtectedLayout/CheckDashboard'));
const Dashboard = lazy(() => import('../pages/User/UserDashboard'));
const PaymentVerification = lazy(() => import('../pages/PaymentVerification'));
const Error404 = lazy(() => import('../pages/Error404'));

//Admin Pages Specific Stuff
const Users = lazy(() => import('../pages/Admin/Users'))
const ShowPlaces = lazy(() => import('../pages/Sponser/ShowPlaces'))
const AdminDashboard = lazy(() => import('../pages/Admin/Dashboard'))

//Sponser Pages
const EditDetails = lazy(() => import('../pages/Sponser/EditDetails'));
const AddPlace = lazy(() => import('../pages/Sponser/AddPlace'));
const AdminShowPlaces = lazy(() => import('../pages/Sponser/ShowPlaces'));
const SponserDashboard = lazy(() => import('../pages/Sponser/Dashboard'));


const Routers = () => {
    return (
        <>
            <BrowserRouter >
            <Suspense fallback={<MainLoader />} >
                <Routes >

                    {/* Home Page  */}
                    <Route path='/' element={
                        <Suspense fallback={<MainLoader />} >
                            <Layout> <Home /> </Layout>
                        </Suspense>
                    } />

                    {/* About Page  */}
                    <Route path="/about" element={
                    <Layout> <About /> </Layout>
                    } />

                    {/* Spaces page  */}
                    <Route path="/spaces" element={
                           <Suspense fallback={<MainLoader />} >
                    <Layout> <Spaces /> </Layout></Suspense>
                    } />

                    {/* Destination Info Page  */}
                    <Route path="/destinationinfo/:id" element={<Layout> <DestinationInfo /> </Layout>} />

                    {/* Contact Us page  */}
                    <Route path="/contact" element={<Layout> <ContactUs /> </Layout>} />

                    {/* Register Page  */}
                    <Route path="/register" element={<Layout> <Register /> </Layout>} />

                    {/* Login Page  */}
                    <Route path="/login" element={<Layout>    <Login /> </Layout>} />

                    {/* All protected routes, where only logged user can use this  */}

                    {/* Payment Success Page  */}
                    <Route path="/paymentsuccess" element={ <Suspense fallback={<MainLoader />} >
                    <Layout> <ProtectedRoute> <PaymentSuccess /> </ProtectedRoute>   </Layout>
                    </Suspense>} />

                    {/* Payment Error Page  */}
                    <Route path="/paymenterror" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <PaymentError /> </ProtectedRoute>  </Layout>
                    </Suspense>} />


                    {/*Book Now Page  */}
                    <Route path="/booknow/:_id" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <BookNow /> </ProtectedRoute> </Layout> </Suspense>} />

                    {/*Checkout  Page  */}
                    <Route path="/checkout" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <Checkout /> </ProtectedRoute> </Layout></Suspense>} />

                    {/*Payment Verfication  Page  */}
                    <Route path="/paymentverification" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <PaymentVerification /> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Checking the dashboard of the users  */}
                    <Route path="/checkDashboard" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <CheckDashboard /> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Users Pages  */}
                    <Route path="/userDashboard" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <UserLayout > <Dashboard /> </UserLayout> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Logout page  */}
                    <Route path="/logout" element={<Layout> <ProtectedRoute> <Logout /></ProtectedRoute>
                    </Layout>} />


                    {/* Admin dashboard , Page */}
                    <Route path="/admin" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <AdminLayout>    <AdminDashboard /> </AdminLayout> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Admin Routes, of all the admin routes  */}
                    {/* Admin see all the users , Page */}
                    <Route path="/admin/users" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <AdminLayout>  <Users /> </AdminLayout> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Admin see all the places which is register , Page */}
                    <Route path="/admin/places" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <AdminLayout>     <AdminShowPlaces /> </AdminLayout> </ProtectedRoute>
                    </Layout></Suspense>} />

                    {/* Sponser Routes, For all the spoonser specfice routes  */}

                    {/* Sponser Dashboard , Page  */}
                    <Route path="/sponser" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <SponserLayout>  <SponserDashboard /> </SponserLayout> </ProtectedRoute> </Layout></Suspense>} />


                    {/* Sponser can show all places , Page  */}
                    <Route path="/sponser/showplaces" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <SponserLayout>  <ShowPlaces /> </SponserLayout> </ProtectedRoute> </Layout></Suspense>} />


                    {/* Sponser can show all places , Page  */}
                    <Route path="/sponser/addplace" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <SponserLayout>   <AddPlace /> </SponserLayout> </ProtectedRoute> </Layout></Suspense>} />

                    {/* Sponser can edit the details , Page  */}
                    <Route path="/sponser/editDetails/:id" element={<Suspense fallback={<MainLoader />} ><Layout> <ProtectedRoute> <SponserLayout> <EditDetails /> </SponserLayout> </ProtectedRoute> </Layout></Suspense>} />

                    {/* Error 404 page */}
                    <Route path="*" element={<Error404 />} />

                </Routes>

                </Suspense>
                <ToastContainer autoClose={1500} />


            </BrowserRouter>
        </>
    )
}

export default Routers
