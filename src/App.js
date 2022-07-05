import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Greet from './components/greet';
import Footer from './components/Footer';
import Register from './components/Register'

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
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
			  <Footer/>
   
   			</div>
						</>
					}/>
					</Routes>
			</BrowserRouter>			
     
		);
	}
  


}

export default App;