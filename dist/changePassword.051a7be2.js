(()=>{function t(t,e,s,n){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(n?t:t+'="'+t+'"');var i=typeof e;return"object"!==i&&"function"!==i||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),s||-1===e.indexOf('"'))?(s&&(e=o(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}function e(t,n){return Array.isArray(t)?function(t,s){for(var n,i="",r="",l=Array.isArray(s),a=0;a<t.length;a++)(n=e(t[a]))&&(l&&s[a]&&(n=o(n)),i=i+r+n,r=" ");return i}(t,n):t&&"object"==typeof t?function(t){var e="",o="";for(var n in t)n&&t[n]&&s.call(t,n)&&(e=e+o+n,o=" ");return e}(t):t||""}function o(t){var e=""+t,o=n.exec(e);if(!o)return t;var s,i,r,l="";for(s=o.index,i=0;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}i!==s&&(l+=e.substring(i,s)),i=s+1,l+=r}return i!==s?l+e.substring(i,s):l}var s=Object.prototype.hasOwnProperty,n=/["&<>]/;var i,r,l;document.body.innerHTML=(r="",(l={}).button=i=function(t){this&&this.block,this&&this.attributes,r=r+'<button class="button">'+o(null==(i=t)?"":i)+"</button>"},l.personLogo=i=function(){this&&this.block,this&&this.attributes,r+='<div class="personLogo empty"> <p class="personLogo__change">Поменять <br> аватар</p></div><div class="personLogo-set"> <div class="personLogo-set__bg"></div><div class="personLogo-set__body"> <p class="personLogo-set__title">Загрузите файл</p><div class="personLogo-set__input"> <input class="personLogo-set__file" type="file" id="avatar" name="avatar"/><label class="personLogo-set__label" for="avatar">Выбрать файл на компьютере  </label></div>',l.button("Поменять"),r+="</div></div>"},l.button=i=function(t){this&&this.block,this&&this.attributes,r=r+'<button class="button">'+o(null==(i=t)?"":i)+"</button>"},l.infoField=i=function(s,n,l,a,c){this&&this.block,this&&this.attributes,r=r+"<div"+t("class",e(["infoField",c],[!1,!0]),!1,!1)+"> <label"+t("for",l,!0,!1)+">"+o(null==(i=s)?"":i)+"</label><input"+(t("id",l,!0,!1)+t("type",n,!0,!1)+t("value",a,!0,!1))+"/></div>"},r+='<div class="profile"> <div class="profile-left"> <a href="/profile.html"> </a></div><div class="profile-content"> <div class="profile-content__data"> <div class="profile-content__img">',l.personLogo(),r+='</div><div class="profile-content__main">',l.infoField.call({block:function(){r+=" "}},"Старый пароль","password","oldPassword","testtest","false"),l.infoField.call({block:function(){r+=" "}},"Новый пароль","password","newPassword","","false"),l.infoField.call({block:function(){r+=" "}},"Повторите новый пароль","password","newPassword_repeat","","false"),r+='</div><div class="profile-content__option"> ',l.button("Сохранить"),r+="</div></div></div></div>"),(()=>{const t=document.querySelector(".personLogo-set__file");t.addEventListener("change",(()=>{const e=t.value.split("\\"),o=t.closest(".personLogo-set__body").querySelector(".personLogo-set__label"),s=t.closest(".personLogo-set__body").querySelector(".personLogo-set__title");o.innerHTML=e[e.length-1],o.classList.add("file"),s.innerHTML="Файл загружен"}))})(),(()=>{const t=document.querySelector(".personLogo"),e=document.querySelector(".personLogo-set__bg"),o=document.querySelector(".personLogo-set");t.addEventListener("click",(()=>{o.classList.add("open")})),e.addEventListener("click",(()=>{o.classList.remove("open")}))})()})();
//# sourceMappingURL=changePassword.051a7be2.js.map
