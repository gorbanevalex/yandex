export const uploadFile = () =>{
 const inputFile = document.querySelector('.personLogo-set__file');
 inputFile.addEventListener('change',()=>{
  const fileName = inputFile.value.split('\\');
  const labelInput = inputFile.closest('.personLogo-set__body').querySelector('.personLogo-set__label');
  const titleInput = inputFile.closest('.personLogo-set__body').querySelector('.personLogo-set__title');
  labelInput.innerHTML = fileName[fileName.length - 1];
  labelInput.classList.add('file');
  titleInput.innerHTML = 'Файл загружен';
 })
}

export const toggleFileModal = () =>{
 const openModalButton = document.querySelector('.personLogo');
 const closeModalButton = document.querySelector('.personLogo-set__bg');
 const modal = document.querySelector('.personLogo-set');
 openModalButton.addEventListener('click',()=>{
  modal.classList.add('open');
 })
 closeModalButton.addEventListener('click',()=>{
  modal.classList.remove('open');
 })
} 