(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var i=a(0),r=a.n(i),n=a(148),s=a(154),l=a.n(s),o=a(155),d=a.n(o),c=a(151),u=a(153);t.default=function(e){var t=e.data.markdownRemark,a=t.html,i=t.frontmatter;return r.a.createElement(c.a,null,r.a.createElement(d.a,null,r.a.createElement("title",null,i.title),r.a.createElement("meta",{name:"description",content:"Generic Page"})),r.a.createElement("div",{id:"main",className:"alt"},r.a.createElement("section",{id:"one"},r.a.createElement("div",{className:"inner"},r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,i.title),i.tags&&r.a.createElement("ul",{className:"actions"},i.tags.map(function(e){return r.a.createElement(n.a,{to:"/logs/"+e,className:"button special small"},e)})),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,"著者 : ",Object(u.a)(i.author)),r.a.createElement("li",null,"公開日 : ",i.date))),r.a.createElement("span",{className:"image main"},r.a.createElement(l.a,{fluid:i.cover.childImageSharp.fluid})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))))};var f="1190076792"},148:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(149),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},149:function(e,t,a){var i;e.exports=(i=a(150))&&i.default||i},150:function(e,t,a){"use strict";a.r(t);a(35);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(55),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},151:function(e,t,a){"use strict";var i=a(34),r=a.n(i),n=a(7),s=a.n(n),l=a(0),o=a.n(l),d=(a(152),a(4)),c=a.n(d),u=a(148),f=function(e){return o.a.createElement("header",{id:"header",className:"alt"},o.a.createElement(u.a,{to:"/",className:"logo"},o.a.createElement("strong",null,"Mojalab")," ",o.a.createElement("span",null,"Logs")))};f.propTypes={onToggleMenu:c.a.func};var p=f,g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(r()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},a.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},o.a.createElement("div",{id:"wrapper"},o.a.createElement(p,{onToggleMenu:this.handleToggleMenu}),e))},t}(o.a.Component);t.a=g},153:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r});var i=function(e){switch(e){case"moja":return"もじゃ";case"carton":return"カートン";case"gasu":return"ガースー";case"sharibou":return"しゃり坊";default:return"メンバー"}},r=function(e){switch(e){case"moja":return"Moja's";case"carton":return"Carton's";case"gasu":return"Gasu's";case"sharibou":return"Sharibou's";default:return"Mojalab"}}},154:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(34)),l=i(a(74)),o=i(a(75)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});S.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var i=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:L?1:0,transition:I?"opacity "+b+"ms":"none"},l),M="boolean"==typeof m?"lightgray":m,T={transitionDelay:b+"ms"},N=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&T,l,f),O={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var j=g;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),M&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&T)}),j.base64&&d.default.createElement(S,(0,o.default)({src:j.base64},O)),j.tracedSVG&&d.default.createElement(S,(0,o.default)({src:j.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(S,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},j))}}))}if(h){var z=h,V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},M&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:M,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&T)}),z.base64&&d.default.createElement(S,(0,o.default)({src:z.base64},O)),z.tracedSVG&&d.default.createElement(S,(0,o.default)({src:z.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(S,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},z))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=E;t.default=I}}]);
//# sourceMappingURL=component---src-templates-log-js-649307af222ef47ca417.js.map