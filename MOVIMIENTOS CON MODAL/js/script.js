// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar=document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add('sidebar-responsive');
      sidebarOpen = true;
    }
  }

  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-responsive');
      sidebarOpen = false;
    }
  }

  const openModal = document.querySelector('.boton-nuevo-ingreso');
  const modal = document.querySelector('.modal-ingreso');
  const closeModal = document.querySelector('.modal-cancel');
  
  openModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.add('modal--show');
  });
  
  closeModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.remove('modal--show');
  });

  const openModalEgreso = document.querySelector('.boton-nuevo-egreso');
  const modalEgreso = document.querySelector('.modal-egreso');
  const closeModalEgreso = document.querySelector('.modal-cancel-egreso');
  
  openModalEgreso.addEventListener('click', (e)=>{
      e.preventDefault();
      modalEgreso.classList.add('modal--show');
  });
  
  closeModalEgreso.addEventListener('click', (e)=>{
      e.preventDefault();
      modalEgreso.classList.remove('modal--show');
  });