(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(6),s=n.n(o),r=(n(15),n(9)),u=n(2),l=n.p+"static/media/header__logo.ff16f24b.svg";function p(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})}var _=i.a.createContext();function d(e){var t=i.a.useContext(_),n=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id})),o="".concat(n?"element__delete-button":"element__delete-button element__delete-button_hidden"),s="".concat(c?"element__like-button element__like-button_clicked":"element__like-button");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("span",{className:"element__author",children:e.card.owner.name}),Object(a.jsx)("img",{src:e.card.owner.avatar,alt:e.card.owner.name,className:"element__card-author",onMouseEnter:function(e){e.target.previousSibling.classList.add("element__author_shown")},onMouseLeave:function(e){e.target.previousSibling.classList.remove("element__author_shown")}}),Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsx)("button",{className:o,onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"element__description",children:[Object(a.jsx)("h2",{className:"element__text",children:e.card.name}),Object(a.jsxs)("div",{className:"element__likes",children:[Object(a.jsx)("button",{className:s,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(a.jsx)("span",{className:"element__like-counter",children:e.card.likes.length})]})]})]},e.card._id)}var m=function(e){var t=i.a.useContext(_);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("button",{className:"profile__image-button",onClick:e.onEditAvatar,children:Object(a.jsx)("img",{src:t.avatar,alt:t.name,className:"profile__image"})}),Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__items",children:e.cards.map((function(t){return Object(a.jsx)(d,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};function h(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}function j(e){return Object(a.jsx)("section",{className:e.isOpen?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name),children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_".concat(e.name),children:[Object(a.jsx)("button",{onClick:e.onClose,className:"popup__close-button popup__close-button_type_".concat(e.name)}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsxs)("form",{name:e.name,onSubmit:e.onSubmit,className:"popup__form popup__form_type_".concat(e.name),children:[e.children,Object(a.jsx)("button",{className:"popup__button popup__button_type_".concat(e.name),type:"submit",children:e.isSaving?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})}function b(e){return Object(a.jsx)("section",{className:e.card?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name),children:Object(a.jsxs)("figure",{className:"popup__container-image",children:[Object(a.jsx)("button",{onClick:e.onClose,className:"popup__close-button popup__close-button_type_".concat(e.name," popup__close-button_position_side")}),Object(a.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(a.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})})}function f(e){var t=i.a.useState(""),n=Object(u.a)(t,2),c=n[0],o=n[1],s=i.a.useState(""),r=Object(u.a)(s,2),l=r[0],p=r[1],d=i.a.useContext(_);return i.a.useEffect((function(){o(d.name),p(d.about)}),[d]),i.a.useEffect((function(){e.isOpen||(o(""),p(""))}),[e.isOpen]),Object(a.jsx)(j,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isSaving:e.isSaving,children:Object(a.jsxs)("fieldset",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_title",placeholder:"\u0418\u043c\u044f",id:"name-input",minLength:"2",maxLength:"40",value:c||"",onChange:function(e){o(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",name:"profession",className:"popup__input popup__input_type_subtitle",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",id:"profession-input",minLength:"2",maxLength:"200",value:l||"",onChange:function(e){p(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"profession-input-error"})]})})}function O(e){var t=i.a.useRef();return i.a.useEffect((function(){e.isOpen||(t.current.value="")}),[e.isOpen]),Object(a.jsx)(j,{isOpen:e.isOpen,onClose:e.onClose,name:"edit-pic",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isSaving:e.isSaving,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(a.jsxs)("fieldset",{className:"popup__field",children:[Object(a.jsx)("input",{type:"url",name:"user_pic",className:"popup__input popup__input_type_link",id:"profile-pic-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"profile-pic-input-error"})]})})}function g(e){var t=i.a.useState(""),n=Object(u.a)(t,2),c=n[0],o=n[1],s=i.a.useState(""),r=Object(u.a)(s,2),l=r[0],p=r[1];return i.a.useEffect((function(){e.isOpen||(o(""),p(""))}),[e.isOpen]),Object(a.jsx)(j,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({description:l,image:c})},name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isSaving:e.isSaving,children:Object(a.jsxs)("fieldset",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",name:"description",className:"popup__input popup__input_type_description",id:"description-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",value:l||"",onChange:function(e){p(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"description-input-error"}),Object(a.jsx)("input",{type:"url",name:"image",className:"popup__input popup__input_type_link",id:"place-image-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:c||"",onChange:function(e){o(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-image-input-error"})]})})}var x=n.p+"static/media/ring.8f5826bb.svg";function v(e){return Object(a.jsx)("div",{className:e.isLoading?"loader loader_shown":"loader",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:x,alt:"",className:"loader__image loader__image_size_xl"}),Object(a.jsx)("img",{src:x,alt:"",className:"loader__image loader__image_size_l"}),Object(a.jsx)("img",{src:x,alt:"",className:"loader__image loader__image_size_m"}),Object(a.jsx)("img",{src:x,alt:"",className:"loader__image loader__image_size_s"}),Object(a.jsx)("img",{src:x,alt:"",className:"loader__image loader__image_size_xs"})]})})}var C=n(7),N=n(8),y=new(function(){function e(t){var n=t.baseUrl,a=t.authorization,c=t.contentType;Object(C.a)(this,e),this._baseUrl=n,this._authorization=a,this._contentType=c}return Object(N.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:"".concat(this._authorization)}}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"".concat(this._authorization)}}).then((function(t){return e._getResponseData(t)}))}},{key:"changeUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({name:e.description,link:e.image})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return t._getResponseData(e)}))}},{key:"getNewUserPic",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return n._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18",authorization:"04df758b-41ec-45dd-81f7-1b0f03936357",contentType:"application/json"});var k=function(){var e=i.a.useState(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],s=i.a.useState(!1),l=Object(u.a)(s,2),d=l[0],x=l[1],C=i.a.useState(!1),N=Object(u.a)(C,2),k=N[0],S=N[1],z=i.a.useState(!1),U=Object(u.a)(z,2),T=U[0],L=U[1],D=i.a.useState([]),E=Object(u.a)(D,2),P=E[0],w=E[1],R=i.a.useState(""),A=Object(u.a)(R,2),I=A[0],q=A[1],F=i.a.useState(!0),J=Object(u.a)(F,2),M=J[0],B=J[1],H=i.a.useState(!1),G=Object(u.a)(H,2),K=G[0],Q=G[1];function V(){S(!1),o(!1),x(!1),L(!1)}return Object(c.useEffect)((function(){Promise.all([y.getUserInfo(),y.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];q(n),w(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))})).finally((function(){B(!1)}))}),[]),Object(a.jsx)(_.Provider,{value:I,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(m,{onEditProfile:function(){o(!0)},onAddPlace:function(){x(!0)},onEditAvatar:function(){S(!0)},onCardClick:function(e){L({link:e.link,name:e.name})},cards:P,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var n=P.map((function(n){return n._id===e._id?t:n}));w(n)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(){var t=P.filter((function(t){return t._id!==e._id}));w(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))}))}}),Object(a.jsx)(h,{}),Object(a.jsx)(f,{isOpen:n,onClose:V,onUpdateUser:function(e){Q(!0),y.changeUserInfo(e).then((function(e){q(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))})).finally((function(){o(!1),Q(!1)}))},isSaving:K}),Object(a.jsx)(O,{isOpen:k,onClose:V,onUpdateAvatar:function(e){Q(!0),y.getNewUserPic(e).then((function(e){q(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))})).finally((function(){S(!1)}))},isSaving:K}),Object(a.jsx)(g,{isOpen:d,onClose:V,onAddPlace:function(e){Q(!0),y.addNewCard(e).then((function(e){w([e].concat(Object(r.a)(P)))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,", \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"))})).finally((function(){x(!1),Q(!1)}))},isSaving:K}),Object(a.jsx)(j,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",text:"\u0414\u0430"}),Object(a.jsx)(b,{name:"image",card:T,onClose:V}),Object(a.jsx)(v,{isLoading:M})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.88cb01c1.chunk.js.map