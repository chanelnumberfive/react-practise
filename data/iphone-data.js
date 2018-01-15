import React from 'react';
import {
  Link	
} from 'react-router-dom';
const data = {
	iconNav:{
		className:'iphone-nav',
		items:[
			{
				text:'iPhonex',
				className:'iphone-nav-iphonex'
			},
			{
				text:'iPhone8',
				className:'iphone-nav-iphone8'
			},
			{
				text:'iPhone7',
				className:'iphone-nav-iphone7'
			},
			{
				text:'iPhone6s',
				className:'iphone-nav-iphone6s'
			}
		]
	},
	section1:{
		className:'iphone-iphonex',
		h1:'iPhoneX',
		h3:'Say hello to the future.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	},
	section2:{
		linkClassName:'iphone-iphonex-film layout-tr-center',
		h2:<span>iPhone X<br/>Design Film</span>,
		h4:'Watch >'
	},
	section3:{
		className:'iphone-iphone8',
		h2:'iPhone 8',
		h3:'A new generation of iPhone.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	},
	section4:{
		className:'iphone-models layout-tr',
		wrapperClassName:'iphone-models-wrapper',
		h2:<span>Compare<br/>iPhone models.</span>,
		h2Style:{
			textAlign:'left'
		},
		para:<span><Link to='/learn-more' className='apple-fig-link'>Find the best iPhone for you ></Link></span>
	}
};
export default data
