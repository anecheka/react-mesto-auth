(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(7),r=n.n(s),c=(n(15),n(10)),i=n(4),l=n(2),u=n.p+"static/media/logo.03b78ada.svg",d=n(0);var h=function(){return Object(d.jsx)("header",{className:"header root__section-position",children:Object(d.jsx)("img",{src:u,alt:"\u041b\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto Russia",className:"header__logo"})})},m=n(8),f=n(9),j=new(function(){function e(t){var n=t.url,a=t.headers;Object(m.a)(this,e),this._url=n,this._headers=a}return Object(f.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatarPhoto",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}},{key:"getUserData",value:function(e){return fetch("".concat(this._url,"users/me/"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"updateUserData",value:function(e,t){return fetch("".concat(this._url,"users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"getDataForPageRender",value:function(){return Promise.all([this.getInitialCards(),this.getUserData()])}},{key:"getCardInfo",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"GET",headers:this._headers}).then(this._getResponseData)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23/",headers:{authorization:"a260d49c-522b-4bbd-9cd1-72740d17aa2a","Content-type":"application/json"}}),p=o.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDislike,r=e.onCardDelete,c=o.a.useContext(p),i=t.owner._id===c._id,l="element__delete-button ".concat(i?"element__delete-button_visible":""),u=t.likes.some((function(e){return e._id===c._id})),h="element__like-button ".concat(u?"element__like-button_active":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("img",{className:"element__photo",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(d.jsx)("button",{className:l,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:function(){r(t)}}),Object(d.jsxs)("div",{className:"element__info",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__like-counter",children:[Object(d.jsx)("button",{className:h,"aria-label":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u043a\u0430\u043a \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0443\u044e\u0441\u044f",onClick:function(){u?u&&s(t):a(t)}}),Object(d.jsx)("p",{className:"element__like-number",children:t.likes.length})]})]})]})};var b=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,s=e.onCardClick,r=e.onCardLike,c=e.onCardDislike,i=e.onCardDelete,l=e.cardArray,u=o.a.useContext(p);return Object(d.jsxs)("main",{className:"content root__section-position",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__all-user-info",children:[Object(d.jsxs)("div",{className:"profile__avatar",children:[Object(d.jsx)("img",{src:u.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar-image"}),Object(d.jsx)("div",{className:"profile__avatar-edit-button",onClick:a})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__username-editing",children:[Object(d.jsx)("h1",{className:"profile__username",children:u.name}),Object(d.jsx)("button",{type:"button",id:"edit-profile",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t})]}),Object(d.jsx)("p",{className:"profile__bio",children:u.about})]})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button",id:"add-element","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:n})]}),Object(d.jsx)("ul",{className:"elements",children:l.map((function(e){return Object(d.jsx)(_,{card:e,onCardClick:s,onCardLike:r,onCardDislike:c,onCardDelete:i},e._id)}))})]})};var O=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:"popup popup_use_view-full-photo ".concat(t&&"popup_is-opened"),children:Object(d.jsxs)("div",{className:"popup__full-photo-container",children:[Object(d.jsx)("img",{className:"popup__full-photo",src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name}),Object(d.jsx)("p",{className:"popup__full-photo-title",children:null===t||void 0===t?void 0:t.name}),Object(d.jsx)("button",{type:"button",className:"close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n})]})})};var v=function(){return Object(d.jsx)("footer",{className:"footer root__section-position",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};function x(e){return Object(d.jsx)("div",{className:"popup popup_use_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsxs)("form",{className:"form",name:"".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"form__title",children:"".concat(e.title)}),Object(d.jsxs)("fieldset",{className:"form__container",children:[e.children,Object(d.jsx)("button",{type:"submit",className:"form__submit-button",id:"submit-".concat(e.name),children:e.button})]})]}),Object(d.jsx)("button",{type:"button",className:"close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})}function C(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=o.a.useContext(p),r=o.a.useState([s.name]),c=Object(l.a)(r,2),i=c[0],u=c[1],h=o.a.useState([s.about]),m=Object(l.a)(h,2),f=m[0],j=m[1];return o.a.useEffect((function(){u(s.name||""),j(s.about||"")}),[s]),Object(d.jsxs)(x,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:f})},children:[Object(d.jsx)("input",{className:"form__input",type:"text",value:i,onChange:function(e){u(e.target.value)},name:"username",id:"username",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"form__input-error-message username-error"}),Object(d.jsx)("input",{className:"form__input",type:"text",value:f,onChange:function(e){j(e.target.value)},name:"bio",id:"bio",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("span",{className:"form__input-error-message bio-error"})]})}function g(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=o.a.useRef();return Object(d.jsxs)(x,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update-avatar-image",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},children:[Object(d.jsx)("input",{className:"form__input",ref:s,type:"url",name:"link",id:"avatar-image-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",required:!0}),Object(d.jsx)("span",{className:"form__input-error-message avatar-image-url-error"})]})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,s=o.a.useRef(),r=o.a.useRef();return Object(d.jsxs)(x,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-photo",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:s.current.value,link:r.current.value})},children:[Object(d.jsx)("input",{className:"form__input",ref:s,type:"text",name:"name",id:"location-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(d.jsx)("span",{className:"form__input-error-message location-name-error"}),Object(d.jsx)("input",{className:"form__input",ref:r,type:"url",name:"link",id:"photo-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(d.jsx)("span",{className:"form__input-error-message photo-url-error"})]})}var N=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=o.a.useState(!1),r=Object(l.a)(s,2),u=r[0],m=r[1],f=o.a.useState(!1),_=Object(l.a)(f,2),x=_[0],N=_[1],y=o.a.useState(null),D=Object(l.a)(y,2),S=D[0],E=D[1],P=o.a.useState([]),R=Object(l.a)(P,2),A=R[0],U=R[1],L=o.a.useState({CurrentUserContext:p}),T=Object(l.a)(L,2),w=T[0],q=T[1];function I(){a(!1),m(!1),N(!1),E(null)}return o.a.useEffect((function(){j.getUserData().then((function(e){return q(e)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){j.getInitialCards().then((function(e){return U(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)(p.Provider,{value:w,children:Object(d.jsxs)("div",{className:"root",children:[Object(d.jsx)(h,{}),Object(d.jsx)(b,{onEditProfile:function(){a(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){N(!0)},onCardClick:E,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));j.likeCard(e._id,!t).then((function(t){U((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDislike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));j.dislikeCard(e._id,t).then((function(t){U((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){j.deleteCard(e._id).then((function(){U((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},cardArray:A}),Object(d.jsx)(C,{isOpen:n,onClose:I,onUpdateUser:function(e){var t=e.name,n=e.about;j.updateUserData(t,n).then((function(e){q((function(e){return Object(i.a)(Object(i.a)({},e),{},{name:t,about:n})}))})).then((function(){return a(!1)})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(k,{isOpen:u,onClose:I,onAddPlace:function(e){var t=e.name,n=e.link;j.addNewCard(t,n).then((function(e){U([e].concat(Object(c.a)(A)))})).then((function(){return m(!1)})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(g,{isOpen:x,onClose:I,onUpdateAvatar:function(e){var t=e.avatar;j.updateAvatarPhoto(t).then((function(e){q((function(e){return Object(i.a)(Object(i.a)({},e),{},{avatar:t})}))})).then((function(){return N(!1)})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(O,{card:S,onClose:I}),Object(d.jsx)(v,{})]})})};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b2dde12e.chunk.js.map