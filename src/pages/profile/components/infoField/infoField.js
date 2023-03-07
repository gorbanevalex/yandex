export const setFieldsAction = () =>{
 const infoFields = document.getElementsByClassName('infoField');
 for(let i = 0;i<infoFields.length;i++){
  if(infoFields[i].classList.contains('true')){
   infoFields[i].querySelector('input').disabled = true;
  }
 }
}