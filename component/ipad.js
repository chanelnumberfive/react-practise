import React from 'react';
import Common from './common.js';

class Ipad extends React.Component{
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
				<Common.IconNav {...this.state.iconNav} pathname={this.props.match.url}>
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
}

export default Ipad