export const inputHandler = () =>{
 const inputBlock = document.getElementsByClassName('input');
 for(let i =0;i<inputBlock.length;i++){
  const input = inputBlock[i].querySelector('input');
  input.addEventListener('focus',()=>{
   inputBlock[i].classList.add('active');
  })
  input.addEventListener('blur',()=>{
   if(input.value.length<1){
    inputBlock[i].classList.remove('active');
   }
  })
 }
}