import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Services from "../pages/services/Services"
import Appointments from "../pages/appointments/Appointments"
import NewAppointmentRequest from "../pages/newappointmentrequest/NewAppointmentRequest"
import NewAppointment from "../pages/newappointment/NewAppointment"
import AppointmentRequests from "../pages/appointmentrequests/AppointmentRequests"
import AccessRequests from "../pages/accessrequests/AccessRequests"
import SearchPatient from "../pages/searchpatient/SearchPatient"
import NewDoctor from "../pages/newdoctor/NewDoctor"

export const router = createBrowserRouter([
    {
        path: "/healthsystem",
        element: <Login/>,
        children: [],
    },
    {
        path: "/login",
        element: <Login/>,
        children: [],
    },
    {
        path: "/register",
        element: <Register/>,
        children: [],
    },
    {
        path: "/services",
        element: <Services/>,
        children: [],
    },
    {
        path: "/appointments",
        element: <Appointments/>,
        children: [],
    },
    {
        path: "/newappointmentrequest",
        element: <NewAppointmentRequest/>,
        children: [],
    },
    {
        path: "/newappointment",
        element: <NewAppointment/>,
        children: [],
    },
    {
        path: "/appointmentrequests",
        element: <AppointmentRequests/>,
        children: [],
    },
    {
        path: "/accessrequests",
        element: <AccessRequests/>,
        children: [],
    },
    {
        path: "/searchpatient",
        element: <SearchPatient/>,
        children: [],
    },
    {
        path: "/newdoctor",
        element: <NewDoctor/>,
        children: [],
    },
]);