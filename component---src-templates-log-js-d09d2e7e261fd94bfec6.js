(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var r=a(0),i=a.n(r),n=a(150),s=a(156),o=a.n(s),l=a(157),d=a.n(l),c=a(153),u=a(155);t.default=function(e){var t=e.data.markdownRemark,a=t.html,r=t.frontmatter,s="https://www.mojalab.site/"+r.path,l="https://www.mojalab.site"+r.cover.childImageSharp.fluid.src;return i.a.createElement(c.a,null,i.a.createElement(d.a,null,i.a.createElement("title",null,r.title),i.a.createElement("meta",{name:"description",content:"Generic Page"}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:"@moja_labo"}),i.a.createElement("meta",{property:"og:url",content:s}),i.a.createElement("meta",{property:"og:title",content:r.title}),"// ",i.a.createElement("meta",{property:"og:description",content:"In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."}),i.a.createElement("meta",{property:"og:image",content:l}),i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),i.a.createElement("div",{id:"main",className:"alt"},i.a.createElement("section",{id:"one"},i.a.createElement("div",{className:"inner"},i.a.createElement("header",{className:"major"},i.a.createElement("div",{className:"title"},r.title),r.tags&&i.a.createElement("ul",{className:"actions"},r.tags.map(function(e){return i.a.createElement(n.a,{key:e,to:"/logs/"+e,className:"button special small"},e)})),i.a.createElement("ul",{className:"actions"},i.a.createElement("li",null,"著者 : ",Object(u.a)(r.author)),i.a.createElement("li",null,"公開日 : ",r.date)),i.a.createElement("div",null,i.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false","data-size":"large"}))),i.a.createElement("span",{className:"image main"},i.a.createElement(o.a,{fluid:r.cover.childImageSharp.fluid})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))))};var f="2529250600"},150:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(151),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},151:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},152:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){"use strict";var r=a(34),i=a.n(r),n=a(7),s=a.n(n),o=a(0),l=a.n(o),d=(a(154),a(4)),c=a.n(d),u=a(150),f=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(u.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Mojalab")," ",l.a.createElement("span",null,"Logs")))};f.propTypes={onToggleMenu:c.a.func};var p=f,m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},a.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(p,{onToggleMenu:this.handleToggleMenu}),e))},t}(l.a.Component);t.a=m},155:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i});var r=function(e){switch(e){case"moja":return"もじゃ";case"carton":return"カートン";case"gasu":return"ガースー";case"sharibou":return"しゃり坊";default:return"メンバー"}},i=function(e){switch(e){case"moja":return"Moja's";case"carton":return"Carton's";case"gasu":return"Gasu's";case"sharibou":return"Sharibou's";default:return"Mojalab"}}},156:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(34)),o=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:L?1:0,transition:I?"opacity "+b+"ms":"none"},o),j="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&N,o,f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(m){var O=m;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&N)}),O.base64&&d.default.createElement(v,(0,l.default)({src:O.base64},M)),O.tracedSVG&&d.default.createElement(v,(0,l.default)({src:O.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(v,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:S},O))}}))}if(g){var z=g,V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&N)}),z.base64&&d.default.createElement(v,(0,l.default)({src:z.base64},M)),z.tracedSVG&&d.default.createElement(v,(0,l.default)({src:z.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(v,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:S},z))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:S,sizes:L,fixed:S,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=w;t.default=I}}]);
//# sourceMappingURL=component---src-templates-log-js-d09d2e7e261fd94bfec6.js.map