(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var a,n=r("q1tI"),i=(a=n)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.peek=function(){return s},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var o=n.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},n}(n.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",l),d}}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=p(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function T(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function C(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+r+a+t+i+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(R,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?c.default.createElement("picture",null,n(a),l):l})),R=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,C=e.draggable,A=h||g;if(!A)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,s.default)({opacity:j?1:0,transition:L?"opacity "+y+"ms":"none"},l),x="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&N,l,f),_={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:w},z=this.state.isHydrated?m(A):A[0];if(h)return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),x&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),z.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:_,imageVariants:A,generateSources:k}),z.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:_,imageVariants:A,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,E(A),c.default.createElement(R,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:r,title:t,loading:S},z,{imageVariants:A}))}}));if(g){var H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},x&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:x,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},L&&N)}),z.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:_,imageVariants:A,generateSources:k}),z.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:_,imageVariants:A,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,E(A),c.default.createElement(R,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:r,title:t,loading:S},z,{imageVariants:A}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function x(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}j.propTypes={resolutions:L,sizes:P,fixed:x(u.default.oneOfType([L,u.default.arrayOf(L)])),fluid:x(u.default.oneOfType([P,u.default.arrayOf(P)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=j;t.default=N},Nhdc:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return S})),r.d(t,"a",(function(){return T})),r.d(t,"g",(function(){return C})),r.d(t,"f",(function(){return I})),r.d(t,"h",(function(){return R})),r.d(t,"e",(function(){return j})),r.d(t,"d",(function(){return L}));var a,n=r("q1tI"),i=r.n(n),o=r("Wbzz"),l=function(e){var t,r=e.children,a=Object(o.useStaticQuery)("3649515864");return i.a.createElement("div",{className:"layoutContainer"},i.a.createElement(S,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),i.a.createElement(L,null),i.a.createElement("main",null,r))};!function(e){e.home="/",e.blog="/blog",e.contact="/contact",e.projects="/projects",e.resume="/resume",e.about="/about",e.page2="/page-2/",e.usingTypescript="/using-typescript/",e.errorPage="/404"}(a||(a={}));var s={name:"Cloud Coach",url:"https://cloudcoach.com/"},c={name:"Fraser",url:"https://frasercolorado.com/"},u={name:"Winter Park Resort",url:"https://www.winterparkresort.com/"},d={name:"Middle Park High School",url:"http://mphs.egsd.org/"},f={name:"Salesforce",url:"https://www.salesforce.com/"},p={name:"Flatiron School",url:"https://flatironschool.com/"},m={name:"GitHub",url:"https://github.com/freddysilber"},h={url:"https://www.instagram.com/burnttoast_jpeg/"},g={url:"https://www.linkedin.com/in/freddysilber/"},b={url:"https://twitter.com/freddysilber"},y={url:"https://freddysilber.github.io/blog/"},v={url:"freddysilber.github.io"},w={url:"https://www.youtube.com/channel/UCzzigkFUQprDQ3DBFiSg75w"};function E(e){return m.url+"/"+e}function S(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("h1",{className:"titleText"},i.a.createElement(o.Link,{to:a.home,className:"header"},t)))}S.defaultProps={siteTitle:""};function T(){return i.a.createElement("div",null,i.a.createElement("p",null,"Hi, I'm Freddy and I'm a software engineer/ full stack web developer. I grew up in a small mountain town called ",i.a.createElement("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},c.name)," in the state of Colorado. I'm a snowboarder but that doesn't pay the bills so now I'm a developer."),i.a.createElement("br",null),i.a.createElement("p",null,"I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski area, ",i.a.createElement("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},u.name),". I graduated ",i.a.createElement("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},d.name)," in Granby Colorado and during school, I would often find myself nerding out in our computer lab with some of my friends. We would do all kinds of things like creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs."),i.a.createElement("br",null),i.a.createElement("p",null,"Shortly after I graduated high school, I landed a job with a company called ",i.a.createElement("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},s.name)," and started learning basic programming skills on the ",i.a.createElement("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},f.name),".com CRM platform. Now I am a junior developer for Cloud Coach implementing new features and tools for our product."),i.a.createElement("br",null),i.a.createElement("p",null,"I have recently graduated from ",i.a.createElement("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",className:"bioAnchor"},p.name)," for the Full Stack Software Engineering curriculum. During this course, I have practiced skills within the entire stack of a web application. I learned many languages, some of witch are Ruby, Ruby on Rails, Javascript, React, Redux, Angular, Node and many more as well as building multiple projects to add to my portfolio!"),i.a.createElement("br",null),i.a.createElement("p",null,"Asside from programming all the time, I enjoy playing electric guitar, cook, play with my cat, skateboard, snowboard, bmx bike, mountain bike, fish, hike, camp and much much more... oh, and keep learning!"))}var k=["devicon-react-original","devicon-html5-plain","devicon-css3-plain","devicon-git-plain","devicon-java-plain","devicon-mysql-plain","devicon-postgresql-plain","devicon-ruby-plain","devicon-sass-original","devicon-typescript-plain","devicon-visualstudio-plain","devicon-webpack-plain","devicon-angularjs-plain"];function C(){return i.a.createElement("div",{className:"skillsContainer"},k.map((function(e){return i.a.createElement("i",{key:e,className:e})})))}r("9eSz");var A=r("qhky");function O(e){var t,r,a=e.description,n=e.lang,l=e.meta,s=e.title,c=Object(o.useStaticQuery)("63159454").site,u=a||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return i.a.createElement(A.a,{htmlAttributes:{lang:n},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(l)})}O.defaultProps={lang:"en",meta:[],description:""};var I=O;function R(){return i.a.createElement("div",{className:"socialMediaContainer"},i.a.createElement("span",null,"Lets get in touch!"),i.a.createElement("a",{href:m.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"devicon-github-original"})),i.a.createElement("a",{href:h.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-instagram"})),i.a.createElement("a",{href:g.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin"})),i.a.createElement("a",{href:b.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-twitter"})))}function j(){return i.a.createElement("div",{className:"resumeContainer"},i.a.createElement("h1",null,"Freddy Silber"),i.a.createElement("p",null,i.a.createElement("a",{href:"tel:+1-970-532-0297"},"970-531-0297")," | ",i.a.createElement("a",{href:"mailto: freddy.silber@gmail.com",target:"_blank"},"freddy.silber@gmail.com")),i.a.createElement("p",null,i.a.createElement("a",{href:g.url,target:"_blank"},"LinkedIn")," | ",i.a.createElement("a",{href:m.url,target:"_blank"},"Github")," | ",i.a.createElement("a",{href:y.url,target:"_blank"},"Blog")," | ",i.a.createElement("a",{href:v.url,target:"_blank"},"Portfolio")," | ",i.a.createElement("a",{href:w.url,target:"_blank"},"YouTube")),i.a.createElement("h1",null,"Software Engineer"),i.a.createElement("hr",null),i.a.createElement("p",null,"Experienced in Ruby on Rails, Java, Apex and JavaScript based programming. Comfortable with large companies and enterprise level data as well as a fast paced startup environment. Possess strong skills in team-building, solutioning, collaboration and communication, B2B/E2E solutions, and project management skills to help high tech and software companies meet their business goals on an efficient timeline. Work well with peers and clients to gather information in a friendly manner to meet deadlines. Avid snowboarder who loves being outdoors in the mountains."),i.a.createElement("h1",null,"Technical Skills"),i.a.createElement("hr",null),i.a.createElement("p",null,"Angular, Salesforce, Ruby, Ruby on Rails, SQL, Javascript, React, Redux, Redux Thunk, HTML5, CSS, Rake, Apex, Database Triggers, Automation/ Process Automation, Java, Lightning Components, Visualforce Pages, Git, Github, reCharts, D3.js, MatLab, Project Management, B2B Solutions, Salesforce, Adobe Illustrator, Microsoft Excel, Final Cut Pro, Bootstrap"),i.a.createElement("h1",null,"Technical Projects"),i.a.createElement("hr",null),i.a.createElement("p",null,i.a.createElement("span",null,"React Redux Portfolio Project / Portfolio Site - ",i.a.createElement("a",{href:E("portfolio-site"),target:"_blank"},"Github")," | ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=Wg42yMQ6dxI&t=1s",target:"_blank"},"Demo")),i.a.createElement("br",null),"Portfolio website/ web application to learn about my background and projects"),i.a.createElement("ol",null,i.a.createElement("li",null,"Utilized React components and React router to create a multi-tab single page application to teach viewers about me"),i.a.createElement("li",null,"Implemented a Rails API backend to persist data in a database from user input and information gathering"),i.a.createElement("li",null,"Amplified the UI with React-bootstrap to brand with consistent styling and create a friendly user experience")),i.a.createElement("p",null,i.a.createElement("span",null,"Agile Project - ",i.a.createElement("a",{href:E("agile-project"),target:"_blank"},"Github")," | ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=yQMf8GfuxRA&t=1s",target:"_blank"},"Demo")),i.a.createElement("br",null),"Web application for agile style project management using kanban boards with projects and tasks"),i.a.createElement("ol",null,i.a.createElement("li",null,"Built a Rails API backend to persist data in my application using a Sqlite3 database"),i.a.createElement("li",null,"Created a kanban board using Javascript and ES6 modules to visualize user created data from projects and tasks"),i.a.createElement("li",null,"Included drag and drop functionality to update current statuses of personal tasks within the kanban board"),i.a.createElement("li",null,"Enforced CRUD application requirements for a fully functional single page application using fetch calls to my API")),i.a.createElement("p",null,i.a.createElement("span",null,"Rails Address Book - ",i.a.createElement("a",{href:E("rails-address-book"),target:"_blank"},"Github")," | ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=mPOfY_4FgvI&t=3s",target:"_blank"},"Demo")),i.a.createElement("br",null),"Web application for account and project management using an address book with personal contacts for clients"),i.a.createElement("ol",null,i.a.createElement("li",null,"Programmed a 3rd party login system using OAuth in Ruby to allow users to login via Github"),i.a.createElement("li",null,"Produced a UI from scratch where users can manage personal or professional contacts and accounts"),i.a.createElement("li",null,"Incorporated the ability to relate multiple records using Active Record associations so user data can be organized"),i.a.createElement("li",null,"Designed a Sqlite3 database schema and coded all the database logic for multiple models and relationships"),i.a.createElement("li",null,"Interacted with my Rails API taking advantage of all CRUD requirements across all models in my database")),i.a.createElement("h1",null,"Experience"),i.a.createElement("hr",null),i.a.createElement("p",null,i.a.createElement("span",null,"Cloud Coach | Fort Collins, Colorado"),i.a.createElement("br",null),"Product Specialist | Solutions Specialist | Developer 04/2018 - Present",i.a.createElement("br",null)),i.a.createElement("ol",null,i.a.createElement("li",null,"Maintain a Lightning Component and Apex library to shorten component build times from 2 weeks to 4 days"),i.a.createElement("li",null,"Listen to client needs to create and maintain a code base for custom implementations of business processes"),i.a.createElement("li",null,"Refactor database triggers to reduce time complexity from O(n^2) to O(n), removing errors at runtime and enabling clients to process large batches of records safely within Salesforce processing limits"),i.a.createElement("li",null,"Prioritize peer code reviews and unit testing to reduce deployment and integration errors by 90%")),i.a.createElement("p",null,i.a.createElement("span",null,"The Foundry Cinema and Bowl | Winter Park, Colorado"),i.a.createElement("br",null),"Sales, Chef, Front of the house, Back of the house 01/2013 - 01/2018",i.a.createElement("br",null)),i.a.createElement("ol",null,i.a.createElement("li",null,"Assisted in front of house and back of the house operations prioritizing areas that needed the most help"),i.a.createElement("li",null,"Onboarded over 10 new employees to build an efficient work process and achieve greater numbers in sales"),i.a.createElement("li",null,"Fulfilled inventories in weekly order lists to keep the kitchen and concessions well stocked"),i.a.createElement("li",null,"Enforced positive work environment 5 nights a week to keep staff and returning customers pleased with our service")),i.a.createElement("h1",null,"Education"),i.a.createElement("hr",null),i.a.createElement("p",null,i.a.createElement("span",null,"Flatiron School - Online"),i.a.createElement("br",null),"Full Stack Web Development, Software Engineering, Ruby on Rails and JavaScript program 05/2018 - 05/2020"))}function L(){return i.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(o.Link,{className:"navbar-item",to:a.home,activeClassName:"active"},"Home"),i.a.createElement(o.Link,{className:"navbar-item",to:a.blog,activeClassName:"active"},"Blog"),i.a.createElement(o.Link,{className:"navbar-item",to:a.contact,activeClassName:"active"},"Contact"),i.a.createElement(o.Link,{className:"navbar-item",to:a.projects,activeClassName:"active"},"Projects"),i.a.createElement(o.Link,{className:"navbar-item",to:a.resume,activeClassName:"active"},"Resume"))))}},bmMU:function(e,t){var r="undefined"!=typeof Element,a="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,s,c,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(c=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,c[s]))return!1;if(r&&t instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!t.$$typeof)&&!e(t[c[s]],o[c[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var a,n,i,o,l=r("17x9"),s=r.n(l),c=r("8+s/"),u=r.n(c),d=r("bmMU"),f=r.n(d),p=r("q1tI"),m=r.n(p),h=r("YVoz"),g=r.n(h),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),S="cssText",T="href",k="http-equiv",C="innerHTML",A="itemprop",O="name",I="property",R="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",N="defer",M="encodeSpecialCharacters",_="onChangeClientState",z="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},W=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=X(e,w.TITLE),r=X(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=X(e,x);return t||a||void 0},J=function(e){return X(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var a=Object.keys(r),n=0;n<a.length;n++){var i=a[n].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],s=l.toLowerCase();-1===t.indexOf(s)||r===R&&"canonical"===e[r].toLowerCase()||s===R&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==C&&l!==S&&l!==A||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),o=0;o<i.length;o++){var l=i[o],s=g()({},a[l],n[l]);a[l]=s}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var a=e[r];if(a.hasOwnProperty(t))return a[t]}return null},Z=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ie=function(e,t){var r=e.baseTag,a=e.bodyAttributes,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(w.BODY,a),se(w.HTML,n),le(d,f);var p={baseTag:ce(w.BASE,r),linkTags:ce(w.LINK,i),metaTags:ce(w.META,o),noscriptTags:ce(w.NOSCRIPT,l),scriptTags:ce(w.SCRIPT,c),styleTags:ce(w.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,a=t.oldTags;r.length&&(m[e]=r),a.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var a=r.getAttribute("data-react-helmet"),n=a?a.split(","):[],i=[].concat(n),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],c=t[s]||"";r.getAttribute(s)!==c&&r.setAttribute(s,c),-1===n.indexOf(s)&&n.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);n.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(w.HEAD),a=r.querySelectorAll(e+"[data-react-helmet]"),n=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===C)r.innerHTML=t.innerHTML;else if(a===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];r.setAttribute(a,l)}r.setAttribute("data-react-helmet","true"),n.some((function(e,t){return o=t,r.isEqualNode(e)}))?n.splice(o,1):i.push(r)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:n,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var a=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,n=de(r,a),[m.a.createElement(w.TITLE,n,e)];var e,r,a,n},toString:function(){return function(e,t,r,a){var n=ue(r),i=oe(t);return n?"<"+e+' data-react-helmet="true" '+n+">"+G(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var a,n=((a={key:r})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===S){var a=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:a}}else n[r]=t[e]})),m.a.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,a){var n=Object.keys(a).filter((function(e){return!(e===C||e===S)})).reduce((function(e,t){var n=void 0===a[t]?t:t+'="'+G(a[t],r)+'"';return e?e+" "+n:n}),""),i=a.innerHTML||a.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+n+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,a=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(w.BASE,t,a),bodyAttributes:fe(b,r,a),htmlAttributes:fe(y,n,a),link:fe(w.LINK,i,a),meta:fe(w.META,o,a),noscript:fe(w.NOSCRIPT,l,a),script:fe(w.SCRIPT,s,a),style:fe(w.STYLE,c,a),title:fe(w.TITLE,{title:d,titleAttributes:f},a)}},me=u()((function(e){return{baseTag:K([T,L],e),bodyAttributes:Q(b,e),defer:X(e,N),encode:X(e,M),htmlAttributes:Q(y,e),linkTags:$(w.LINK,[R,T],e),metaTags:$(w.META,[O,E,k,I,A],e),noscriptTags:$(w.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:$(w.SCRIPT,[j,C],e),styleTags:$(w.STYLE,[S],e),title:Y(e),titleAttributes:Q(v,e)}}),(function(e){ne&&re(ne),e.defer?ne=te((function(){ie(e,(function(){ne=null}))})):(ie(e),ne=null)}),pe)((function(){return null})),he=(n=me,o=i=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,n=e.newChildProps,i=e.nestedChildren;return V({},a,((t={})[r.type]=[].concat(a[r.type]||[],[V({},n,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,n=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case w.TITLE:return V({},n,((t={})[a.type]=o,t.titleAttributes=V({},i),t));case w.BODY:return V({},n,{bodyAttributes:V({},i)});case w.HTML:return V({},n,{htmlAttributes:V({},i)})}return V({},n,((r={})[a.type]=V({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var a;r=V({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,a={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(W(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:a=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),a=V({},r);return t&&(a=this.mapChildrenToProps(t,a)),m.a.createElement(n,a)},B(t,null,[{key:"canUseDOM",set:function(e){n.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=n.peek,i.rewind=function(){var e=n.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(a){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-4479b2f3a3dcb81d4b88.js.map