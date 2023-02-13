"use strict";(self.webpackChunkmovie_database_app=self.webpackChunkmovie_database_app||[]).push([[30],{7254:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(9439),a=n(1930),i=n(3433),s=n(2998),o=n(2363),u=n(6151),c=n(7621),l=n(9585),d=n(2169),f=(n(2791),n(1087)),v=n(4913),m=n(4287),h=n(6520),g=n(3400),p=n(184),x=function(e){var t=e.toggleFavourite,n=e.isFavourite;return(0,p.jsx)(h.Z,{title:n?"Remove from favourite movies":"Add to favourite movies",children:(0,p.jsx)(g.Z,{"aria-label":"add to favorites",onClick:t,children:n?(0,p.jsx)(v.Z,{}):(0,p.jsx)(m.Z,{})})})};var Z=function(e){var t=e.movie,n=e.storedMovies,r=e.setStoredMovies,a=null===n||void 0===n?void 0:n.find((function(e){return e.imdbID===t.imdbID}));return(0,p.jsxs)(c.Z,{sx:{maxWidth:345,height:500},elevation:5,children:[(0,p.jsx)(l.Z,{title:t.Title,subheader:t.Year,titleTypographyProps:{noWrap:!0}}),(0,p.jsx)(d.Z,{component:"img",image:t.Poster,alt:"movie image",sx:{maxHeight:350}}),(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(x,{toggleFavourite:function(){r(a?n.filter((function(e){return e.imdbID!==t.imdbID})):[].concat((0,i.Z)(n),[t]))},isFavourite:a}),(0,p.jsx)(u.Z,{startIcon:(0,p.jsx)(s.Z,{}),component:f.rU,to:"/detail/".concat(t.imdbID),children:"About movie"})]})]})},j=n(6328);function b(e){var t=e.movies,n=(0,j.Z)("favouriteMovies",[]),i=(0,r.Z)(n,2),s=i[0],o=i[1];return(0,p.jsx)(a.Z,{container:!0,spacing:1,className:"movies-board",children:t.map((function(e){return(0,p.jsx)(a.Z,{md:2.4,xl:2,children:(0,p.jsx)(Z,{movie:e,storedMovies:s,setStoredMovies:o})},e.imdbID)}))})}},6328:function(e,t,n){var r=n(9439),a=n(2791);t.Z=function(e,t){var n=(0,a.useState)((function(){return function(e,t){var n=JSON.parse(localStorage.getItem(e));return n||t}(e,t)})),i=(0,r.Z)(n,2),s=i[0],o=i[1];return(0,a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[s]),[s,o]}},5030:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(9439),a=n(8087),i=n(2167),s=n(9658),o=n(3239),u=n(6151),c=n(4554),l=n(1040),d=n(1918),f=n(3319),v=n(7254),m=n(2791),h=n(6941),g=n(1413),p=n(7858),x=n(4438),Z=function(e){var t=(0,m.useState)(null),n=(0,r.Z)(t,2),a=n[0],i=n[1],s=(0,m.useState)(0),o=(0,r.Z)(s,2),u=o[0],c=o[1],l=(0,m.useState)(0),d=(0,r.Z)(l,2),f=d[0],v=d[1],Z=(0,h.AB)(),j=(0,h.P0)(),b=function(e){i(e.pages.length>0&&"False"!==e.pages[0].data.Response?e.pages.filter((function(e){return"False"!==e.data.Response})).map((function(e){return e.data.Search})).flat():null)},S=function(e){c(e.pages.length>0&&"False"!==e.pages[0].data.Response?e.pages[0].data.totalResults:0)},N=function(e){v(e.target.scrollTop)};(0,m.useEffect)((function(){var e=document.getElementsByClassName("serach-results")[0];return e.addEventListener("scroll",N),Z&&(b(Z.data),S(Z.data),setTimeout((function(){e.scrollTo({behavior:"smooth",top:Z.scrollPosition})}),50)),function(){e.removeEventListener("scroll",N)}}),[]),(0,m.useEffect)((function(){return function(){j((function(e){return(0,g.Z)((0,g.Z)({},e),{},{scrollPosition:f})}))}}),[f]);var P=(0,p.N)({enabled:null!=e&&e!==(null===Z||void 0===Z?void 0:Z.searchString),queryKey:["moviesQuery",e],getNextPageParam:function(e,t){return t.length<u/10?t.length+1:void 0},queryFn:function(t){var n=t.pageParam,r=void 0===n?1:n;return(0,x.X)(e,r)},onSuccess:function(t){b(t),S(t),function(t){""!==e&&((null===Z||void 0===Z?void 0:Z.searchString)!==e||null==(null===Z||void 0===Z?void 0:Z.data)||(null===Z||void 0===Z?void 0:Z.data.pages.length)<t.pages.length)&&j({searchString:e,data:t})}(t)},staleTime:1/0}),y=P.isFetchingNextPage,F=P.hasNextPage,I=P.fetchNextPage;return{moviesList:a,moviesCount:u,isFetchingNextPage:y,hasNextPage:F,fetchNextPage:I}},j=n(184);function b(){var e=(0,h.AB)(),t=(0,m.useRef)({value:null}),n=(0,m.useState)(""),g=(0,r.Z)(n,2),p=g[0],x=g[1],b=Z(p),S=b.moviesList,N=b.moviesCount,P=b.isFetchingNextPage,y=b.hasNextPage,F=b.fetchNextPage;(0,m.useEffect)((function(){e&&(t.current.value=e.searchString,x(e.searchString))}),[]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(f.Z,{container:!0,spacing:1,className:"search-page",children:[(0,j.jsxs)(f.Z,{xs:12,mx:{paddingTop:20},children:[(0,j.jsx)(f.Z,{xs:6,children:(0,j.jsxs)(c.Z,{component:"form",onSubmit:function(e){e.preventDefault(),x(t.current.value)},sx:{display:"inline-flex"},children:[(0,j.jsx)(l.Z,{id:"search-bar",label:"Find movies",variant:"outlined",inputRef:t,sx:{paddingRight:2,width:"auto"}}),(0,j.jsx)(u.Z,{startIcon:(0,j.jsx)(i.Z,{}),variant:"contained",type:"submit",size:"large",children:"Search"})]})}),(0,j.jsx)(f.Z,{xs:6,children:(0,j.jsx)(d.Z,{variant:"outlined",color:"info",label:"Results: ".concat(N)})})]}),(0,j.jsx)(f.Z,{md:12,className:"serach-results",children:function(){var e=(0,j.jsx)(s.Z,{severity:"info",className:"info",children:"No movies found"});return null!=S&&S.length>0&&(e=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{movies:S}),(0,j.jsx)(f.Z,{md:12,children:P?(0,j.jsx)(o.Z,{}):(0,j.jsx)(u.Z,{variant:"contained",startIcon:(0,j.jsx)(a.Z,{}),fullWidth:!0,disabled:!y,onClick:function(){F()},children:"Load more"})})]})),e}()})]})})}},4438:function(e,t,n){n.d(t,{d:function(){return c},X:function(){return u}});var r=n(4165),a=n(5861),i=n(1912),s=function(e,t){return"http://omdbapi.com/?apikey=da981403&s=".concat(e,"&page=").concat(t)},o=function(e){return"http://omdbapi.com/?apikey=da981403&i=".concat(e,"&plot=full")},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(s(t,n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(o(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=30.f235a741.chunk.js.map