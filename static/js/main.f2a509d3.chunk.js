(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__3_n_M",Loader:"App_Loader__3K4Uf"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2Uy6h",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1XNc0"}},13:function(e,t,a){e.exports={errorImage:"ImageErrorView_errorImage__3vGxr",message:"ImageErrorView_message__V0FPU"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3_oiG",Modal:"Modal_Modal__3dGmk"}},17:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3MpGu"}},19:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__Cvm52"}},20:function(e,t,a){e.exports={Button:"Button_Button__UY94o"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),c=a.n(o),s=(a(25),a(15)),i=a(3),l=a(16),u=a.n(l),m=a(8),j=(a(46),a(10)),b=a.n(j),g=a(17),h=a.n(g),d=a(6),p=a.n(d),f=a(1);function O(e){var t=e.onSubmit,a=e.value,r=e.onChange;return Object(f.jsxs)("form",{className:p.a.SearchForm,onSubmit:t,children:[Object(f.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(f.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:a,placeholder:"Search images and photos",onChange:r})]})}var _=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(i.a)(a,2),o=n[0],c=n[1];return Object(f.jsx)("header",{className:h.a.Searchbar,children:Object(f.jsx)(O,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),c("")):m.b.error("Please enter the name of the picture")},value:o,onChange:function(e){c(e.currentTarget.value.toLowerCase())}})})},x=a(11),I=a.n(x),v=a(18),S=a(2),y=a.n(S),F="22144472-c4d53a495baf7d3490978ff95",w="https://pixabay.com/api/",N=12;function G(e,t){return M.apply(this,arguments)}function M(){return(M=Object(v.a)(I.a.mark((function e(t,a){var r,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"?q=").concat(t,"&page=").concat(a,"&key=").concat(F,"&image_type=photo&orientation=horizontal&per_page=").concat(N));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}G.propTypes={name:y.a.string.isRequired,page:y.a.number.isRequired};var L=a(19),k=a.n(L),B=a(12),C=a.n(B);function E(e){var t=e.smallImage,a=e.bigImage,r=e.alt,n=e.openModal;return Object(f.jsx)("li",{className:C.a.ImageGalleryItem,children:Object(f.jsx)("img",{className:C.a.ImageGalleryItemImage,onClick:function(){n(a,r)},src:t,alt:r})})}function A(e){var t=e.images,a=e.openModal;return Object(f.jsx)("ul",{className:k.a.ImageGallery,children:t.map((function(e){return Object(f.jsx)(E,{smallImage:e.webformatURL,openModal:a,bigImage:e.largeImageURL,alt:e.tags},e.id)}))})}var U=a.p+"static/media/error-image.66517862.jpg",R=a(13),T=a.n(R);function q(e){var t=e.message;return Object(f.jsxs)("div",{role:"alert",className:T.a.errorImage,children:[Object(f.jsx)("img",{src:U,width:"240",height:"240",alt:"errorImage"}),Object(f.jsx)("p",{className:T.a.message,children:t})]})}var P=a(20),V=a.n(P);function D(e){var t=e.loadMoreImages;return Object(f.jsx)("button",{className:V.a.Button,type:"button",onClick:t,children:"Load more"})}var J=a(14),Y=a.n(J),z=document.querySelector("#modal-root"),H=function(e){var t=e.bigImage,a=e.alt,n=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){return window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&n()};return Object(o.createPortal)(Object(f.jsx)("div",{className:Y.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(f.jsx)("div",{className:Y.a.Modal,children:Object(f.jsx)("img",{src:t,alt:a})})}),z)},K="idle",Q="pending",X="resolved",W="rejected",Z={url:"",alt:""},$=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)([]),c=Object(i.a)(o,2),l=c[0],j=c[1],g=Object(r.useState)(1),h=Object(i.a)(g,2),d=h[0],p=h[1],O=Object(r.useState)(null),x=Object(i.a)(O,2),I=x[0],v=x[1],S=Object(r.useState)(!1),y=Object(i.a)(S,2),F=y[0],w=y[1],M=Object(r.useState)(K),L=Object(i.a)(M,2),k=L[0],B=L[1];Object(r.useEffect)((function(){""!==a&&(p(1),j([]),B(Q),C(a))}),[a]);var C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;B(Q),G(e,t).then((function(a){return 0!==a.total?(j((function(e){return[].concat(Object(s.a)(e),Object(s.a)(a.hits))})),p(t+1),B(X),void window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):Promise.reject(new Error("No such image: ".concat(e)))})).catch((function(e){v(e),B(W)}))},E=function(e,t){w((function(e){return!e})),Z.url=e,Z.alt=t};return Object(f.jsxs)("div",{className:b.a.App,children:[Object(f.jsx)(_,{onSubmit:function(e){n(e)}}),k===Q&&Object(f.jsxs)(r.Fragment,{children:[l&&Object(f.jsx)(A,{images:l,openModal:E}),Object(f.jsx)(u.a,{className:b.a.Loader,type:"ThreeDots",color:"#00BFFF",height:100,width:100})]}),k===X&&Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)(A,{images:l,openModal:E}),l.length>=N&&Object(f.jsx)(D,{loadMoreImages:function(){return C(a,d)}})]}),k===W&&Object(f.jsx)(q,{message:I.message}),F&&Object(f.jsx)(H,{bigImage:Z.url,alt:Z.alt,onClose:E}),Object(f.jsx)(m.a,{})]})};c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__Y7t9Q",SearchFormButton:"SearchForm_SearchFormButton__3sM4A",SearchFormButtonLabel:"SearchForm_SearchFormButtonLabel__3L4Rv",SearchFormInput:"SearchForm_SearchFormInput___dSo2"}}},[[49,1,2]]]);
//# sourceMappingURL=main.f2a509d3.chunk.js.map