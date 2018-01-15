import React from 'react';
import {
  Link	
} from 'react-router-dom';
const data = {
	iconNav:{
		className:'ipad-nav',
		items:[
			{
				text:'iPad Pro',
				className:'inav-ipadpro'
			},
			{
				text:'iPad',
				className:'inav-ipad'
			},
			{
				text:'iPad mini 4',
				className:'inav-ipadmini4'
			},
			{
				text:'iOS 11',
				className:'inav-ios11'
			},
			{
				text:'Accessories',
				className:'inav-accessories'
			},
			{
				text:'Compare',
				className:'inav-compare'
			}
		]
	},
	section1:{
		className:'ipad-ipadpro',
		wrapperClassName:'iipadpro-wrapper',
		h2:'iPad Pro',
		h3:<span>Anything you can do, <br/>you can do better.</span>,
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>,
		figureClassName:'iipadpro-figure'
	},
	section2:{
		className:'ipad-ipadproios11',
		wrapperStyle:{
			paddingTop:'80px',
			color:'#fff'
		},
		h2:'iPad Pro + iOS 11',
		para:<span><Link to='/buy' className='apple-fig-link' style={{color:'#fff'}}>Watch the film ></Link></span>
	},
	section3:{
		className:'layout-td ipad-pencil',
		wrapperClassName:'ipencil-wrapper',
		h3:<span>apple Pencil<br/>for iPad Pro</span>,
		para:<span><Link to='/learn more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>	
	},
	section4:{
		className:'layout-td ipad-keyboard',
		wrapperClassName:'ikeyboard-wrapper',
		h3:<span>Smart Keyboard<br/>for iPad Pro</span>,
		para:<span><Link to='/learn more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	}
};
export default data
