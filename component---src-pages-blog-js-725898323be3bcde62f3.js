(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var r=n(7),o=n.n(r),a=n(0),i=n.n(a),c=n(154),l=n(155),u=n(161),s=l.b.div.withConfig({displayName:"blog__Container",componentId:"ksvi61-0"})(["margin:3rem auto;max-width:800px;"]),d=l.b.h2.withConfig({displayName:"blog__PageTitle",componentId:"ksvi61-1"})(["color:black;font-family:'Fira Code';text-decoration:underline;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.edges.filter(function(e){return"Placeholder"!==e.frontmatter.title});return i.a.createElement(s,null,i.a.createElement(c.a,{to:"/"},i.a.createElement(d,null,e)),t.map(function(e){var t=e.node;return i.a.createElement(u.a,{post:t})}),t.length?null:i.a.createElement("h4",null,"There's nothing here yet."))},t}(i.a.Component);t.default=p;var f="217774257"},153:function(e,t,n){var r;e.exports=(r=n(156))&&r.default||r},154:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(153),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},159:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});n(78),n(162);var r=n(155),o=function(e){return"border: 2px solid black;\n  border-radius: 4px;\n  box-shadow:  "+Array.from(Array(e)).map(function(e,t){var n=2*t+1;return n+"px "+n+"px 0px black"}).join(", ")+";"},a=r.b.div.withConfig({displayName:"components__Box",componentId:"sc-1nxi5hp-0"})(["",""],o(3)),i=r.b.button.withConfig({displayName:"components__Button",componentId:"sc-1nxi5hp-1"})(["font-family:'Fira Code';font-size:0.9rem;text-decoration:underline;color:black;background-color:white;padding:0.3rem 0.6rem;"," &:active{transform:translate(3px,3px);box-shadow:none;}&:focus,&:hover{background-color:black;color:white;}"],o(2))},161:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(155),i=n(154),c=n(159),l=Object(a.b)(c.a).withConfig({displayName:"post-preview__PostContainer",componentId:"sc-9ih16k-0"})(["margin-bottom:2rem;padding-left:1rem;padding-right:1rem;"]),u=a.b.h3.withConfig({displayName:"post-preview__PostTitle",componentId:"sc-9ih16k-1"})(["color:black;a{color:black;}"]);t.a=function(e){var t=e.post,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.description||t.excerpt;return o.a.createElement(l,null,o.a.createElement(u,null,o.a.createElement(i.a,{to:t.fields.slug},"> "+n," ")),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))}},162:function(e,t,n){"use strict";var r=n(19),o=n(11),a=n(25),i=n(74),c=n(75),l=n(14),u=n(163),s=n(76);o(o.S+o.F*!n(77)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,d,p=a(e),f="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,b=0,v=s(p);if(g&&(h=r(h,m>2?arguments[2]:void 0,2)),null==v||f==Array&&c(v))for(n=new f(t=l(p.length));t>b;b++)u(n,b,g?h(p[b],b):p[b]);else for(d=v.call(p),n=new f;!(o=d.next()).done;b++)u(n,b,g?i(d,h,[o.value,b],!0):o.value);return n.length=b,n}})},163:function(e,t,n){"use strict";var r=n(26),o=n(56);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-pages-blog-js-725898323be3bcde62f3.js.map