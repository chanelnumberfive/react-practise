import React from 'react';
import {
  Link	
} from 'react-router-dom';
const data = {
	iconNav:{
		className:'white',
		items:[
			{
				text:<span>Apple Watch<br/>Series 3</span>,
				className:'watch-nav-watchseries3',
				to:'apple-watch-series3'
			},
			{
				text:<span>Apple Watch<br/>Nike+</span>,
				className:'watch-nav-nike',
				to:'apple-watch-nike'
			},
			{
				text:<span>Apple Watch<br/>Hermès</span>,
				className:'watch-nav-watchhermes',
				to:'apple-watch-hermes'
			},
			{
				text:<span>Apple Watch<br/>Edition</span>,
				className:'watch-nav-watchedition',
				to:'apple-watch-edition'
			},
			{
				text:<span>Apple Watch<br/>Series 1</span>,
				className:'watch-nav-watchseries1',
				to:'apple-watch-series'
			}
		]
	},
	section1:{
		className:'watch-series3',
		h1ClassName:'watch-series3-h1 glb-for-screener',
		h1:'Apple Watch Series 3',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	},
	section2:{
		className:'watch-nike layout-tr',
		wrapperClassName:'watch-nike-wrapper',
		h3ClassName:'watch-nike-h3 glb-for-screener',
		h3:'Apple Watch Nike+ Series 3',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	},
	section3:{
		className:'watch-apple-hert-study layout-td',
		h3ClassName:'watch-ahs-h3',
		h3:'Apple Heart Study',
		para:<span><Link style={{color:'#fff'}} to='/learn-more' className='apple-fig-link'>Learn how you can take part ></Link></span>
	},
	section4:{
		className:'watch-bands-to-match layout-td',
		h3:<span>Bands to match<br/>your every mood.</span>,
		para:<span><Link to='/learn-more' className='apple-fig-link'>Shop now ></Link></span>
	},	  
	section5:{
		className:'watch-red layout-tr',
		wrapperClassName:'watch-red-wrapper',
		h3:'Buy (RED). Give life.',
		h4:'Help create an AIDS-free generation.',
		para:<span><Link to='/learn-more' style={{marginLeft:0,color:'#fff'}} className='apple-fig-link'>Learn more ></Link></span>
	},
	section6:{
		className:'watch-work layout-tr-center',
		wrapperClassName:'watch-work-wrapper',
		h3:'Apple Watch at Work',
		para:<span><Link to='/learn-more' style={{color:'#fff'}} className='apple-fig-link'>Learn how Apple Watch can help promote<br/>employee health and wellness ></Link></span>
	}
};
export default data
