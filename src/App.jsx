import './App.css'
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import RentalCard from './Component/RentalCard/RentalCard';
import About from './Component/About/About';
// import Products from './Component/Products/Products';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Project from './Component/Project/Project';
import News from './Component/News/News';
import Work from './Component/Work/Work';
import ChooseUs from './Component/ChooseUs/ChooseUs';
import Testimonial from './Component/Testimonial/Testimonial';
import CarDetails from './Component/RentalCard/CarDetails';

import CarList from './Component/RentalCard/CarList';
import AllCarsPage from './Component/RentalCard/allCarsPage';

// Routing
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'rentalcard', element: <RentalCard /> },
      { path: 'work', element: <Work /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      // other child routes...
    ]
  },
  {
  path: '/allcar/:id',
  element: <CarDetails />
},
  // ✅ AllCarsPage outside MasterLayout
  {
    path: '/allcar',
    element: <AllCarsPage />
  }
]);

 

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      
    </>
  );
}

export default App;