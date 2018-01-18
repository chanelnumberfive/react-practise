import React from 'react';
import Common from './common.js';

class Tv extends React.Component{
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
				<Common.IconNav {...this.state.iconNav} pathname={this.props.match.url}>
					<Common.AppleFigure {...this.state.section1} />
					<Common.AppleFigure {...this.state.section2} />
					<Common.AppleFigure {...this.state.section3} />
				</Common.IconNav>
			</main>
		);	
	}
}

export default Tv