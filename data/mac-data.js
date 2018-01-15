import React from 'react';
import {
  Link	
} from 'react-router-dom';
const data = {
	iconNav:{
		items:[
			{
				className:'mnav-macbook',
				text:'MacBook'
			},
			{
				className:'mnav-macbookair',
				text:'MacBook Air'
			},
			{
				className:'mnav-imac',
				text:'iMac'
			},
			{
				className:'mnav-macbookpro',
				text:'MacBook Pro'
			},
			{
				className:'mnav-imacpro',
				text:'iMac Pro'
			}
		]
	},
	section1:{
		className:'mac-imacpro',
		wrapperClassName:'mimacpro-wrapper',
		h1:'iMac Pro',
		h3:'Power to the pro.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>,
		figureClassName:'mimacpro-figure'
	},
	section2:{
		className:'mac-imac',
		wrapperClassName:'mimac-wrapper',
		h2:'iMac',
		h4:'The vision is brighter than ever.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>,
		figureClassName:'mimac-figure'
	},
	section3:{
		className:'mac-macbookpro',
		wrapperClassName:'mmacbookpro-wrapper',
		h2:'MacBook Pro',
		h4:'A touch of genius.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>,
		figureClassName:'mmacbookpro-figure'
	},
	section4:{
		className:'mac-macbook',
		wrapperClassName:'mmacbook-wrapper',
		h2:'MacBook',
		h4:'Light. Years ahead.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>,
		figureClassName:'mmacbook-figure'
	}
};
export default data
