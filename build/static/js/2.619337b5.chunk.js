webpackJsonp([2],{82:function(e,a,t){"use strict";function o(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function r(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var c=t(0),i=t.n(c),l=t(15),s=function(){function e(e,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(a,t,o){return t&&e(a.prototype,t),o&&e(a,o),a}}(),m=function(e){function a(e){o(this,a);var t=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={iconNav:{items:[]}},t}return n(a,e),s(a,[{key:"componentDidMount",value:function(){l.default.init("Mac-Apple");var e=t(88);this.setState(e.default)}},{key:"title",value:function(){var e=window.location.pathname.split("/")[2];return"macbook"===e?"MacBook":"macbook-air"===e?"MacBook Air":"imac"===e?"iMac":"macbook-pro"===e?"MacBook Pro":"imac-pro"===e?"iMac Pro":"MacBook"}},{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(l.default.IconNav,Object.assign({},this.state.iconNav,{pathname:this.props.match.url}),i.a.createElement(l.default.AppleFigure,Object.assign({},this.state.section1,{title:this.title()})),i.a.createElement(l.default.ShopHolidayGift,null),i.a.createElement(l.default.AppleFigure,this.state.section2),i.a.createElement(l.default.AppleFigure,this.state.section3),i.a.createElement(l.default.AppleFigure,this.state.section4)))}}]),a}(i.a.Component);a.default=m},88:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(0),r=t.n(o),n=t(16),c={iconNav:{items:[{className:"mnav-macbook",text:"MacBook"},{className:"mnav-macbookair",text:"MacBook Air"},{className:"mnav-imac",text:"iMac"},{className:"mnav-macbookpro",text:"MacBook Pro"},{className:"mnav-imacpro",text:"iMac Pro"}]},section1:{className:"mac-imacpro",wrapperClassName:"mimacpro-wrapper",h1:"iMac Pro",h3:"Power to the pro.",para:r.a.createElement("span",null,r.a.createElement(n.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"),r.a.createElement(n.b,{to:"/buy",className:"apple-fig-link"},"Buy >")),figureClassName:"mimacpro-figure"},section2:{className:"mac-imac",wrapperClassName:"mimac-wrapper",h2:"iMac",h4:"The vision is brighter than ever.",para:r.a.createElement("span",null,r.a.createElement(n.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"),r.a.createElement(n.b,{to:"/buy",className:"apple-fig-link"},"Buy >")),figureClassName:"mimac-figure"},section3:{className:"mac-macbookpro",wrapperClassName:"mmacbookpro-wrapper",h2:"MacBook Pro",h4:"A touch of genius.",para:r.a.createElement("span",null,r.a.createElement(n.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"),r.a.createElement(n.b,{to:"/buy",className:"apple-fig-link"},"Buy >")),figureClassName:"mmacbookpro-figure"},section4:{className:"mac-macbook",wrapperClassName:"mmacbook-wrapper",h2:"MacBook",h4:"Light. Years ahead.",para:r.a.createElement("span",null,r.a.createElement(n.b,{to:"/learn-more",className:"apple-fig-link"},"Learn more >"),r.a.createElement(n.b,{to:"/buy",className:"apple-fig-link"},"Buy >")),figureClassName:"mmacbook-figure"}};a.default=c}});
//# sourceMappingURL=2.619337b5.chunk.js.map