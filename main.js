
/*-----------CREACION DE SELECTORES PARA EL DESKTOPMENU----------------------- */
//Permite seleccionar el elemento al cual se le va a dar click
const menuEmail = document.querySelector('.navbar-email');

//Permite seleccionar el elemento el cual contiene la clase inactive para poderla
//utilizar dentro de la funcion toggleDesktopMenu() la cual permite mostrar y 
//ocultar el menu pequeño.
const desktopMenu = document.querySelector('.desktop-menu');//.desktop-menu permite indicar que
                                                            //podemos elegir cualquier clase
                                                            //que se encuentre dentro de este elemento


/*-----------CREACION DE SELECTORES PARA CUANDO SE LE DE CLICK SOBRE EL ICONO DEL CARRITO DE COMPPRAS----------------------- */                                                           
//Permite seleccionar el elemento al cual se le va a dar click
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

//Permite seleccionar el elemento el cual contiene la clase product-detail para poderla
//utilizar dentro de la funcion toggleDesktopMenu() la cual permite mostrar y 
//ocultar el contenido del carrito de compras.
const aside = document.querySelector('.product-detail');//.product-detail permite indicar que
                                                            //podemos elegir cualquier clase
                                                            //que se encuentre dentro de este elemento

/*-----------CREACION DE SELECTORES PARA EL MOBILEMENU----------------------- */
//Permite seleccionar el elemento al cual se le va a dar click, en este caso la clase asignada al 
//icono hamburguesa
const menuHamIcon = document.querySelector('.menu');

//Permite seleccionar el elemento el cual contiene la clase mobile-menu para poderla
//utilizar dentro de la funcion toggleMobileMenu() la cual permite mostrar y 
//ocultar el menu Hamburguesa.
const mobileMenu = document.querySelector('.mobile-menu');

//Permite escuchar un evento de tipo addEventListenner al moneto de darclick
//sobre el elemento .navbar-email y se hace el llamado a la funcion toggleDesktopMenu() y asi
//poder mostrar o ocultar el menu pequeño
menuEmail.addEventListener('click', toggleDesktopMenu);

//Permite escuchar un evento de tipo addEventListenner al moneto de darclick
//sobre el elemento .menu y se hace el llamado a la funcion toggleMobileMenu() y asi
//poder mostrar o ocultar el menu hamburguesa
menuHamIcon.addEventListener('click', toggleMobileMenu);

//Permite escuchar un evento de tipo addEventListenner al moneto de darclick
//sobre el elemento .product-detail y se hace el llamado a la funcion toggleMobileMenu() y asi
//poder mostrar o ocultar el menu hamburguesa
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/*-----------FUNSION PARA MOSTRAR O OCULTAR EL MENU PEQUEÑO----------------------- */
//funcion toggleDesktopMenu() para poder mostrar o ocultar el menu pequeño, que en este caso es la 
//clase inactive
function toggleDesktopMenu() {
  //console.log('Click');
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}
//console.log('JS funcionando');

/*-----------FUNSION PARA MOSTRAR O OCULTAR EL MENU HAMBURGUESA----------------------- */
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }

/*-----------FUNSION PARA MOSTRAR O OCULTAR EL CONTENIDO DEL CARRITO DE COMPRAS----------------------- */
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }