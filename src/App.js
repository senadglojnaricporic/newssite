import React from 'react';

import {BrowserRouter as Router} from "react-router-dom";

import MainLayout from './components/MainLayout'
import NavBar from './components/content/routing/nav/NavBar'
import Content from './components/content/routing/Content'

import './App.css';

function App() {
  	return (
		<Router>
			<MainLayout>
				<NavBar/>
				<Content/>
			</MainLayout>
		</Router>
  	);
}

export default App;
