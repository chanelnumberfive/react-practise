webpackJsonp([1],{83:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),s=a.n(l),i=a(15),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={iconNav:{items:[]}},a}return o(t,e),c(t,[{key:"componentDidMount",value:function(){i.default.init("Tv-Apple");var e=a(89);this.setState(e.default)}},{key:"render",value:function(){return s.a.createElement("main",{style:{backgroundColor:"#000"}},s.a.createElement(i.default.IconNav,Object.assign({},this.state.iconNav,{pathname:this.props.match.url}),s.a.createElement(i.default.AppleFigure,this.state.section1),s.a.createElement(i.default.AppleFigure,this.state.section2),s.a.createElement(i.default.AppleFigure,this.state.section3)))}}]),t}(s.a.Component);t.default=p},89:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(16),l={iconNav:{className:"dark",items:[{text:"Apple TV 4K",className:"tv-nav-tv4k"},{text:"Apple TV",className:"tv-nav-tv"},{text:"TV App",className:"tv-nav-tvapp"},{text:"Accessories",className:"tv-nav-accessories"},{text:"Compare",className:"tv-nav-compare"}]},section1:{className:"tv-4k",h2:r.a.createElement("span",null,"The 4K HDR era.",r.a.createElement("br",null),"Now playing."),summary:"Apple TV 4K lets you watch movies and shows in amazing 4K HDR quality. Streams live sports and news. And has great content from apps like Amazon Prime Video, Hulu, ESPN, and Netflix.",para:r.a.createElement("span",null,r.a.createElement(o.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"),r.a.createElement(o.b,{to:"/buy",className:"apple-fig-link"},"Buy >"))},section2:{className:"tv-app",h2:r.a.createElement("span",null,"Everything you watch.",r.a.createElement("br",null),"All in one place."),summary:"The Apple TV App lets you browse content from over 60 video services without switching from one app to the next. You\u2019ll find movies and shows, handpicked recommendations, and live sports. The Apple TV App is already on iPhone, iPad, and Apple TV \u2014 so you can watch at home or wherever you go.",para:r.a.createElement("span",null,r.a.createElement(o.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"))},section3:{className:"tv-tv",h3:r.a.createElement("span",null,"Get even more from",r.a.createElement("br",null),"your Apple TV."),summary:"Game controllers, speakers, and headphones are just a few of the accessories that will make your Apple TV gaming and entertainment experience even better.",para:r.a.createElement("span",null,r.a.createElement(o.b,{to:"/learn-more",className:"apple-fig-link"},"Shop accessories >"))}};t.default=l}});
//# sourceMappingURL=1.bde8c73d.chunk.js.map