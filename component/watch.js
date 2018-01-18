import React from 'react';
import Common from './common.js';

class Watch extends React.Component{
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
				<Common.IconNav {...this.state.iconNav} pathname={this.props.match.url}>
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

export default Watch