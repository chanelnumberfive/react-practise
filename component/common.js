import React from 'react';
import {
  Route,
  Link	
} from 'react-router-dom';
import Loadable from 'react-loadable';

const Component={
	init:function(title,position){
		document.title=title;
		document.documentElement.scrollTop=position||0;
	},
	GlobalNav:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				items:['Mac','iPad','iPhone','Watch','Tv','Music','Support']
			}
		}
		render(){
			let path=(window.location.pathname||'').split('/');	
			let items=this.state.items.map(function(value,index){
				let val=value.toLowerCase();
				return (<li className="gnav-li layout-td" key={value}><Link className={(path[1]===val?'active':'')+' gnav-a'} to={'/'+val}>{value}</Link></li>);
			});
			return (
				<nav className="global-nav">
					<ul className="gnav-ul layout-tr">
						<li className="gnav-li layout-td glb-for-screener"><Link className={(path[1]==='apple'?'active':'')+' gnav-a gnav-logo'} to="/apple">Apple</Link></li>
						{items}
					</ul>
				</nav>		
			);
		}
	},
	GlobalFooter:class extends React.PureComponent{
		constructor(props){
			super(props);
			this.state={
				items:[
					[
						{
							title:'shop and learn',
							items:['Mac','iPad','iPhone','Watch','Tv','Music',{text:'MacBook',to:'/mac/macbook'},{text:'MacBook Air',to:'/mac/macbook-air'},{text:'iMac',to:'/mac/imac'},{text:'MacBook Pro',to:'/mac/macbook-pro'},{text:'iMac Pro',to:'/mac/imac-pro'}]
						}
					],
					[
						{
							title:'Apple Store',
							items:['Find a Store','Genius Bar','Today at Apple','Apple Camp','Field Trip','Apple Store App','Refurbished and Clearance','Financing','Reuse and Recycling','Order Status','Shopping Help']
						}
					],
					[
						{
							title:'For Education',
							items:['Apple and Education','Shop for College']
						},
						{
							title:'For Business',
							items:['Apple and Business','Shop for Business']
						}
					],
					[
						{
							title:'Account',
							items:['Manage Your Apple ID','Apple Store Account','iCloud.com']
						},
						{
							title:'Apple Values',
							items:['Accessibility','Education','Environment','Inclusion and Diversity','Privacy','Supplier Responsibility']
						}
					],
					[
						{
							title:'About Apple',
							items:['Newsroom','Apple Leadership','Job Opportunities','Investors','Contact Apple']
						}
					]
				]
			}
		}
		render(){
			let items=this.state.items.map(function(value,index){
				let j=0,
					l=value.length,
					content=[];
				for(;j<l;j++){
					let items=value[j].items,
						l1=items.length,
						k=0,
						temp=[];
					content[j]=[];
					content[j][0]=<h3 key={value[j].title} className='gf-h3'>{value[j].title}</h3>;
					for(;k<l1;k++){
						if(items[k].text){
							temp[k]=<li key={items[k].text}><Link to={items[k].to}>{items[k].text}</Link></li>;
						}else{
							temp[k]=<li key={items[k]}><Link to={'/'+items[k].toLowerCase().replace(/ /g,'-')}>{items[k]}</Link></li>;	
						}	
					}
					content[j][1]=<ul key={j}>{temp}</ul>;
				}
				return (
					<li key={index} className="layout-td gf-item">
						{content}
					</li>
				);
			});
			return(
					<footer className='global-footer'>
						<h2 className="glb-for-screen gf-h2">apple footer</h2>
						<ul className='layout-tr-top gf-main'>
							{items}
						</ul>
						<p className='gf-p'>More ways to shop: Visit an <a className='gf-color'>Apple Store</a>, call 1-800-MY-APPLE, or find a <a className='gf-color'>reseller</a>.Copyright © 2017 Apple Inc. All rights reserved</p>
					</footer>
			)
		}
	},	
	ShopHolidayGift:class extends React.Component{
		render(){
			return(
				<section className='gl-imagination layout-tr' style={this.props.style}>
					<div className='gl-imagin-wrapper'>
						<h2 className='apple-fig-h2' style={{textAlign:'left'}}>Imagination<br/>is a gift.</h2>
						<p><a className='apple-fig-link' style={{margin:0}}>Shop Holiday Gifts ></a></p>
					</div>
				</section>
			);
		}
	},
	AppleFigure:function AppleFigure(props){
		return(
			<section style={props.style} className={(props.className||'')+' apple-figure'}>
				<div style={props.wrapperStyle} className={(props.wrapperClassName||'')+' apple-figure-title-wrapper'}>
					{props.h1&&<h1 style={props.h1Style} className={(props.h1ClassName||'')+' apple-fig-h1'}>{props.title||props.h1}</h1>}
					{props.h2&&<h2 style={props.h2Style} className='apple-fig-h2'>{props.h2}</h2>}
					{props.h3&&<h3 style={props.h3Style} className={(props.h3ClassName||'')+' apple-fig-h3'}>{props.h3}</h3>}
					{props.h4&&<h4 style={props.h4Style} className='apple-fig-h4'>{props.h4}</h4>}
					{props.h5&&<h5 style={props.h5Style} className='apple-fig-h5'>{props.h5}</h5>}
					{props.summary&&<p style={props.summaryStyle} className='apple-fig-summary'>{props.summary}</p>}
					{props.para&&<p style={props.paraStyle} className='apple-fig-para'>{props.para}</p>}
					{props.children}
				</div>
				{props.figureClassName&&<figure style={props.figureStyle} className={props.figureClassName+' apple-fig-figure'}></figure>}
			</section>
		);
	},
	AppleFigureLink:function(props){
		return(
			<section style={props.style} className={(props.className||'')+' apple-figure'}>
				<Link to={props.to||'/apple'} style={props.linkStyle} className={(props.linkClassName||'')+' apple-fig-a'}>
					<div style={props.wrapperStyle} className='apple-figure-title-wrapper'>
						{props.h2&&<h2 style={props.h2Style} className='apple-fig-h2'>{props.h2}</h2>}
						{props.h3&&<h3 style={props.h3Style} className={(props.h3ClassName||'')+' apple-fig-h3'}>{props.h3}</h3>}
						{props.h4&&<h4 style={props.h4Style} className='apple-fig-h4'>{props.h4}</h4>}
						{props.h5&&<h5 style={props.h5Style} className='apple-fig-h5'>{props.h5}</h5>}
						{props.para&&<p style={props.paraStyle} className='apple-fig-para'>{props.para}</p>}
						{props.children}
					</div>
					{props.figureClassName&&<figure style={props.figureStyle} className={props.figureClassName+' apple-fig-figure'}></figure>}
				</Link>
			</section>
		);
	},
	IconNav:class extends React.Component{
		constructor(props){
			super(props);
			this.state={
				title:''
			}
		}
		componentDidUpdate(){
			document.documentElement.scrollTop=0;
		}
		render(){
			let props=this.props;
			if(props.items instanceof Array){
				return (
					<div>
						<nav className={(props.className||'')+' icon-nav'}>
							<ul className='layout-tr-center'>
								{props.items.map(function(value,index){
									let val=value.to||value.text.toLowerCase().replace(/ /g,'-'),
								 		paths=window.location.pathname.split('/'),
										className=paths[2]===val.replace('/','')?'active icon-nav-a':'icon-nav-a';
									 return (
										<li key={index}><Link to={(value.to&&(props.pathname+'/'+value.to))||(props.pathname+'/'+value.text.toLowerCase().replace(/ /g,'-'))} className={className}><figure className={value.className+' icon-nav-figure'}></figure>{value.text}</Link></li>
									 );
								})}
							</ul>
						</nav> 
						<Route path={props.pathname} component={
							function(){
								return props.children; 
							}
						}/>  
						{props.items.map(function(value,index){
							return (
								<Route key={index} path={(value.to&&(props.pathname+'/'+value.to))||(props.pathname+'/'+value.text.toLowerCase().replace(/ /g,'-'))} component={function(){
									return props.children;
								}}/>
							);
						})}
					</div>	
				);
			}	
		}	
	},
	GetPage:function(props){
		let pathname=props.match.params.id;
		if(!pathname){
			pathname='apple';
		}
		const Page=Loadable({
			loader:function(){
				return import('./../component/'+pathname+'.js').catch(function(res){
					return Component.Nothing;
				});
			},
			loading:function(props){
				if(props.error){
					return Component.Nothing;	
				}else if (props.timedOut){
					return Component.Loading;
				}else if(props.pastDelay){
					return Component.Loading;
				}else{
					return Component.Loading;
				}
			},
			timeout:10000
		});
		return <Page {...props} />;
	},	
	Loading:function(props){
		return (
			<h1 className="layout-tr-center" style={props.style||{padding:'100px',textAlign:'center'}}>loading...</h1>
		);
	},
	Nothing:function(){
		return (
			<h1 className='layout-tr-center' style={{padding:'100px',textAlign:'center'}}>
				The page you’re looking for<br/>
				can’t be found or<br/>
				still in developing!
			</h1>
		);
	}	
}
export default Component