const travaCadeado = document.querySelector('.cadeado-trava');
let isLocked = true;

travaCadeado.addEventListener('click', () => {
  if (isLocked) {
    travaCadeado.style.transform = 'translate(-50%, -50%) rotate(45deg)';
    isLocked = false;
  } else {
    travaCadeado.style.transform = 'translate(-50%, -50%)';
    isLocked = true;
  }
});
