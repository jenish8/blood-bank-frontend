import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Footer from './components/Footer';
import Register from './components/Register'
import Appointment from './components/Appointment';
import ForgetPassword from './components/forgetPassword';
import ChangePassword from './components/ChangePassword';
import R_Register from './components/R_Register';
import Wallet from './components/Wallet';
import D_Register from './components/D_Register';
<<<<<<< HEAD
import { VerifyUser } from './components/verifyUser';
=======
import Otp from './components/Otp';
>>>>>>> b6d61431026f4a3309476c9f7474695807d06147

import { ToastContainer, toast } from "react-toastify";

import { BrowserRouter, Route, Routes, Redirect,Navigate } from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "./layouts/Admin.js";
import UserLayout from "./views/User";
import DonorLayout from "./views/Donor";
import DonationLayout from "./views/Donation";
import ProgramDriveLayout from "./views/ProgramDrive";
import TransactionLayout from "./views/Transaction.js";
import BloodBottlesLayout from "./views/BloodBottles.js";
import PrerequesitesLayout from "./views/Prerequesites.js";
import RecipientLayout from "./views/Recipient";


if (typeof window !== "undefined") {
	injectStyle();
  }
  

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			places: PLACES
		};
	}

	render() {
		function notify(msg) {
			toast(msg);
		  }
		return (

			<BrowserRouter>
				<Routes>
					<Route path='/register' element={<Register notify={notify}/>} />
					<Route path='/donor/register' element={<D_Register/>} />
					<Route path='/recipient/register' element={<R_Register/>}/>
					<Route path='/appointment' element={<Appointment />} />
					<Route path='/forgetpassword' element={<ForgetPassword/>}/>
					<Route path='/changepassword' element={<ChangePassword/>}/>
					<Route path="/user/verify-account/:token/:userName" element={<VerifyUser notify={notify}/>} />
					<Route path='/wallet/:userName' element={<Wallet notify={notify}/>} />

					<Route path='/wallet' element={<Wallet />} />
					<Route path='/otp' element={<Otp />} />
					<Route path='/' element={
						<>
							<div className='App'>
								<Navbar color="primary"></Navbar>
								<div className="container" id="brand">
									<NavbarBrand>Daiict Blood bank</NavbarBrand>
								</div>

								<h1>Blood Bank Management System</h1>
								<Menu places={this.state.places}>
								</Menu>
								<Footer />

							</div>


						</>
					} />
				</Routes>
				<Routes>
				<Route path="/admin" element={<AdminLayout />} />
				<Route path="/admin/dashboard" element={<AdminLayout />} />
				<Route path="/admin/user" element={<UserLayout />} />
				<Route path="/admin/donor" element={<DonorLayout />} />
				<Route path="/admin/donation" element={<DonationLayout />} />
				<Route path="/admin/program" element={<ProgramDriveLayout />} />
				<Route path="/admin/recipient" element={<RecipientLayout />} />
				<Route path="/admin/transaction" element={<TransactionLayout />} />
				<Route path="/admin/bottles" element={<BloodBottlesLayout />} />
				<Route path="/admin/prerequesites" element={<PrerequesitesLayout />} />
				</Routes>
				<ToastContainer autoClose={5000} pauseOnHover={true} />
			</BrowserRouter>

		);
	}



}
export default App;