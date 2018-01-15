import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch	
} from 'react-router-dom';
import Component from './../component/common.js'
import Page from './../component/page.js';

function Home(){
	return(
		<Router>
			<React.Fragment>
				<Component.GlobalNav />
				<Switch>
					<Route exact path='/' component={Page.Apple} />
					<Route path='/apple' component={Page.Apple} />
					<Route path='/mac' component={Page.Mac} />
					<Route path='/ipad' component={Page.Ipad} />
					<Route path='/iphone' component={Page.Iphone} />
					<Route path='/watch' component={Page.Watch} />
					<Route path='/tv' component={Page.Tv} />
					<Route component={function(){return(
						<h1 className='layout-tr-center' style={{padding:'100px',textAlign:'center'}}>
							The page you’re looking for<br/>
							can’t be found or<br/>
							still in developing!
						</h1>
					)}} />
				</Switch>
				<Component.GlobalFooter/>
			</React.Fragment>
		</Router>
	);
}

export default Home