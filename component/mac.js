import React from 'react';
import Common from './common.js';

class Mac extends React.Component{
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
				<Common.IconNav {...this.state.iconNav} pathname={this.props.match.url}>
					<Common.AppleFigure {...this.state.section1} title={this.title()}/>
					<Common.ShopHolidayGift/>
					<Common.AppleFigure {...this.state.section2} />
					<Common.AppleFigure {...this.state.section3} />
					<Common.AppleFigure {...this.state.section4} />
				</Common.IconNav>
			</main>
		);	
	}
}

export default Mac