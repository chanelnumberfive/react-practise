import React from 'react';
import Common from './common.js';

const Page={
	Apple:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
			}
		}
		componentDidMount(){
			Common.init('Apple');
			let data=require('./../data/apple-data.js');
			this.setState(data.default);
		}
		render(){
			return (
				<main>
					<Common.AppleFigureLink {...this.state.section1} />
					<Common.AppleFigureLink {...this.state.section2} />
					<Common.AppleFigureLink {...this.state.section3} />
					<div className="layout-tr-wrap apple-aside">
						<Common.AppleFigureLink {...this.state.section4} />
						<Common.AppleFigureLink {...this.state.section5} />
						<Common.AppleFigureLink {...this.state.section6} />
						<Common.AppleFigureLink {...this.state.section7} />
						<Common.AppleFigureLink {...this.state.section8} />
						<Common.AppleFigureLink {...this.state.section9} />
					</div>
				</main>
			);	
		}
	},
	Ipad:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				iconNav:{
					items:[]
				}
			}
		}
		componentDidMount(){
			Common.init('Ipad-Apple');
			let data=require('./../data/ipad-data.js');
			this.setState(data.default);
		}
		render(){
			return (
				<main>
					<Common.IconNav {...this.state.iconNav} pathName={this.props.match.path}>
						<Common.AppleFigure {...this.state.section1} />
						<Common.AppleFigure {...this.state.section2} />
						<div className='layout-tr ipad-pencilkeyboard'>
							<Common.AppleFigure {...this.state.section3} />
							<Common.AppleFigure {...this.state.section4} />
						</div>
						<Common.ShopHolidayGift style={{margin:'30px auto',width:'1440px'}}/>
					</Common.IconNav>
				</main>
			);	
		}
	},
	Mac:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				iconNav:{
					items:[]
				}
			}
		}
		componentDidMount(){
			Common.init('Mac-Apple');
			let data=require('./../data/mac-data.js');
			this.setState(data.default);
		}
		title(){
			let path=window.location.pathname.split('/')[2];
			if(path==='macbook'){
				return 'MacBook';
			}else if(path==='macbook-air'){
				return 'MacBook Air'
			}else if(path==='imac'){
				return 'iMac'
			}else if(path==='macbook-pro'){
				return 'MacBook Pro'
			}else if(path==='imac-pro'){
				return 'iMac Pro'
			}else{
				return 'MacBook';
			}
		}
		render(){
			return (
				<main>
					<Common.IconNav {...this.state.iconNav} pathName={this.props.match.path}>
						<Common.AppleFigure {...this.state.section1} title={this.title()}/>
						<Common.ShopHolidayGift/>
						<Common.AppleFigure {...this.state.section2} />
						<Common.AppleFigure {...this.state.section3} />
						<Common.AppleFigure {...this.state.section4} />
					</Common.IconNav>
				</main>
			);	
		}
	},
	Tv:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				iconNav:{
					items:[]
				}
			}
		}
		componentDidMount(){
			Common.init('Tv-Apple');
			let data=require('./../data/tv-data.js');
			this.setState(data.default);
		}
		render(){
			return (
				<main style={{backgroundColor:'#000'}}>
					<Common.IconNav {...this.state.iconNav} pathName={this.props.match.path}>
						<Common.AppleFigure {...this.state.section1} />
						<Common.AppleFigure {...this.state.section2} />
						<Common.AppleFigure {...this.state.section3} />
					</Common.IconNav>
				</main>
			);	
		}
	},
	Iphone:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				iconNav:{
					items:[]
				}
			}
		}
		componentDidMount(){
			Common.init('Iphone-Apple');
			let data=require('./../data/iphone-data.js');
			this.setState(data.default);
		}
		render(){
			return (
				<main>
					<Common.IconNav {...this.state.iconNav} pathName={this.props.match.path}>
						<Common.AppleFigure {...this.state.section1} />
						<Common.AppleFigureLink {...this.state.section2} />
						<Common.AppleFigure {...this.state.section3} />
						<Common.ShopHolidayGift />
						<Common.AppleFigure {...this.state.section4} />
					</Common.IconNav>
				</main>
			);	
		}
	},
	Watch:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				iconNav:{
					items:[]
				}
			}
		}
		componentDidMount(){
			Common.init('Watch-Apple');
			let data=require('./../data/watch-data.js');
			this.setState(data.default);
		}
		render(){
			return (
				<main style={{backgroundColor:'#f2f2f2'}}>
					<Common.IconNav {...this.state.iconNav} pathName={this.props.match.path}>
						<Common.AppleFigure {...this.state.section1} />
						<Common.AppleFigure {...this.state.section2} />
						<div className='layout-tr watch-ahs-btm'>
							<Common.AppleFigure {...this.state.section3} />
							<Common.AppleFigure {...this.state.section4} />
						</div>
						<Common.AppleFigure {...this.state.section5} />
						<Common.AppleFigure {...this.state.section6} />
					</Common.IconNav>
				</main>
			);	
		}
	}	
};


export default Page