import './home.scss';
import '../../components/previewChat/previewChat.scss';
import html from './home.pug';

document.body.innerHTML = html({});

const searchInput = document.querySelector('.app-sideBar__search > input');
searchInput.addEventListener('focus',()=>{
 searchInput.closest('.app-sideBar__search').classList.add('active');
}); 
searchInput.addEventListener('blur',()=>{
 if(searchInput.value.length <1) searchInput.closest('.app-sideBar__search').classList.remove('active');
});