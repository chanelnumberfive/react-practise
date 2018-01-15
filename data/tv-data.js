import React from 'react';
import {
  Link	
} from 'react-router-dom';
const data = {
	iconNav:{
		className:'dark',
		items:[
			{
				text:'Apple TV 4K',
				className:'tv-nav-tv4k'
			},
			{
				text:'Apple TV',
				className:'tv-nav-tv'
			},
			{
				text:'TV App',
				className:'tv-nav-tvapp'
			},
			{
				text:'Accessories',
				className:'tv-nav-accessories'
			},
			{
				text:'Compare',
				className:'tv-nav-compare'
			}
		]
	},
	section1:{
		className:'tv-4k',
		h2:<span>The 4K HDR era.<br/>Now playing.</span>,
		summary:'Apple TV 4K lets you watch movies and shows in amazing 4K HDR quality. Streams live sports and news. And has great content from apps like Amazon Prime Video, Hulu, ESPN, and Netflix.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link><Link to='/buy' className='apple-fig-link'>Buy ></Link></span>
	},
	section2:{
		className:'tv-app',
		h2:<span>Everything you watch.<br/>All in one place.</span>,
		summary:'The Apple TV App lets you browse content from over 60 video services without switching from one app to the next. You’ll find movies and shows, handpicked recommendations, and live sports. The Apple TV App is already on iPhone, iPad, and Apple TV — so you can watch at home or wherever you go.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Learn more ></Link></span>
	},
	section3:{
		className:'tv-tv',
		h3:<span>Get even more from<br/>your Apple TV.</span>,
		summary:'Game controllers, speakers, and headphones are just a few of the accessories that will make your Apple TV gaming and entertainment experience even better.',
		para:<span><Link to='/learn-more' className='apple-fig-link'>Shop accessories ></Link></span>
	}
};
export default data
