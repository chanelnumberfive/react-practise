import React from 'react';
import Common from './common.js';

class Iphone extends React.Component{
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
				<Common.IconNav {...this.state.iconNav} pathname={this.props.match.url}>
					<Common.AppleFigure {...this.state.section1} />
					<Common.AppleFigureLink {...this.state.section2} />
					<Common.AppleFigure {...this.state.section3} />
					<Common.ShopHolidayGift />
					<Common.AppleFigure {...this.state.section4} />
				</Common.IconNav>
			</main>
		);	
	}
}

export default Iphone