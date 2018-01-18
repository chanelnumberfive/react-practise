import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch	
} from 'react-router-dom';
import Component from './../component/common.js';

function Home(){
	return(
		<Router>
			<React.Fragment>
				<Component.GlobalNav />
				<Switch>
					<Route exact path='/' component={Component.GetPage} />
					<Route path='/:id' component={Component.GetPage} />
				</Switch>
				<Component.GlobalFooter />
			</React.Fragment>
		</Router>
	);
}

export default Home