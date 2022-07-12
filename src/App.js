import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Footer from './components/Footer';
import Register from './components/Register'

import { BrowserRouter, Route, Routes, Redirect,Navigate } from "react-router-dom";

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
import AddressLayout from "./views/Address";
import SupervisorLayout from "./views/Supervisor";
import TransactionLayout from "./views/Transaction.js";
import BloodBottlesLayout from "./views/BloodBottles.js";
import PrerequesitesLayout from "./views/Prerequesites.js";
import RecipientLayout from "./views/Recipient";


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			places: PLACES
		};
	}

	render() {
		return (

			<BrowserRouter>
				<Routes>
					<Route path='/register' element={<Register />} />
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
				<Route path="/admin/supervisor" element={<SupervisorLayout />} />
				<Route path="/admin/address" element={<AddressLayout />} />
				<Route path="/admin/recipient" element={<RecipientLayout />} />
				<Route path="/admin/transaction" element={<TransactionLayout />} />
				<Route path="/admin/bottles" element={<BloodBottlesLayout />} />
				<Route path="/admin/prerequesites" element={<PrerequesitesLayout />} />
				</Routes>
			</BrowserRouter>

		);
	}



}

export default App;