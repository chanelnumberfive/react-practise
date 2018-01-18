import React from 'react';
import Common from './common.js';

class Apple extends React.Component{
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
}

export default Apple