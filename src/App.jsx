import './App.css'

import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App

// import './App.css'

// import Services from './pages/services/Services'
// import Login from './pages/login/Login'
// import NewAppointmentRequest from './pages/newappointmentrequest/NewAppointmentRequest'
// import NewAppointment from './pages/newappointment/NewAppointment'
// import Register from './pages/register/Register'
// import AppointmentRequests from './pages/appointmentrequests/AppointmentRequests'
// import AccessRequests from './pages/acessrequests/AccessRequests'
// import Appointments from './pages/appointments/Appointments'
// import SearchPatient from './pages/searchpatient/SearchPatient'
// import NewDoctor from './pages/newdoctor/NewDoctor'

// function App() {

//   return (
//     <>
//       <Login/>
//       <Register/>

//       <Services/>

//       <Appointments/>
//       <NewAppointmentRequest />
//       <NewAppointment />
//       <AppointmentRequests/>
//       <AccessRequests/>
//       <SearchPatient/>
//       <NewDoctor/>
//     </>
//   )
// }

// export default App
