function e(e){var s=""+e,a=t.exec(s);if(!a)return e;var r,i,p,d="";for(r=a.index,i=0;r<s.length;r++){switch(s.charCodeAt(r)){case 34:p="&quot;";break;case 38:p="&amp;";break;case 60:p="&lt;";break;case 62:p="&gt;";break;default:continue}i!==r&&(d+=s.substring(i,r)),i=r+1,d+=p}return i!==r?d+s.substring(i,r):d}var t=/["&<>]/;var s,a,r;document.body.innerHTML=(a="",(r={}).previewChat=s=function(t,r,i,p,d){this&&this.block,this&&this.attributes,a=a+'<div class="previewChat"> <div class="previewChat__logo">\x3c!--img(src=`${img}`, alt="")--\x3e</div><div class="previewChat__info"> <h2 class="previewChat__name">'+e(null==(s=r)?"":s)+' </h2><p class="previewChat__message">'+e(null==(s=i)?"":s)+'</p></div><div class="previewChat__more"> <p class="previewChat__time">'+e(null==(s=p)?"":s)+"</p>",d&&(a=a+'<p class="previewChat__more-message">'+e(null==(s=d)?"":s)+"</p>"),a+="</div></div>"},a+='<div class="app"> <div class="app-sideBar"> <div class="app-sideBar__profile"> <a href="/profile.html">Профиль</a></div><div class="app-sideBar__search"> <input type="text" placeholder="Поиск" name="message"/></div><div class="app-sideBar__list">',r.previewChat.call({block:function(){a+=" "}},"test","Test","test te st stt srtsr tsrtrs trtrst stsrtrs trstrst rstsr tsrtsr trst sr gsd gds g dsg ds gds gds g dsg sd","11:22",4),r.previewChat("test","Test","test te ","11:22"),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",15),r.previewChat("test","Test","test te ","11:22",10),a+='</div></div><div class="app-loader"> <p>Выберите чат чтобы отправить сообщение</p></div></div>');const i=document.querySelector(".app-sideBar__search > input");i.addEventListener("focus",(()=>{i.closest(".app-sideBar__search").classList.add("active")})),i.addEventListener("blur",(()=>{i.value.length<1&&i.closest(".app-sideBar__search").classList.remove("active")}));
//# sourceMappingURL=index.51c2e601.js.map
