import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Work from '../Work/Work'
import ChooseUs from '../ChooseUs/ChooseUs'
import Testimonial from '../Testimonial/Testimonial'
import RentCarsForm from '../RentCarsForm/RentCarsForm'
import RentalCard from '../RentalCard/RentalCard'
import CarList from '../RentalCard/CarList'

export default function MasterLayout() {
  return (
    < >
 

<div className="container-fluid p-0 overflow-hidden">
  <div className="row">

<div className="col-md-12">
<Outlet />
<CarList />
<Work />
<ChooseUs />
<Testimonial />
<RentCarsForm />
<Footer />

</div>
  </div>
</div>
 
    </ >
  )
}
