//Permite seleccionar el elemento al cual se le va a dar click
const menuEmail = document.querySelector('.navbar-email');

//Permite seleccionar el elemento el cual contiene la clase inactive para poderla
//utilizar dentro de la funcion toggleDesktopMenu() la cual permite mostrar y 
//ocultar el menu pequeño.
const desktopMenu = document.querySelector('.desktop-menu');//.desktop-menu permite indicar que
                                                            //podemos elegir cualquier clase
                                                            //que se encuentre dentro de este elemento

//Permite escuchar un evento de tipo addEventListenner al moneto de darclick
//sobre el elemento .navbar-email y se hace el llamado a la funcion toggleDesktopMenu() y asi
//poder mostrar o ocultar el menu pequeño
menuEmail.addEventListener('click', toggleDesktopMenu);

//funcion toggleDesktopMenu() para poder mostrar o ocultar el menu pequeño, que en este caso es la 
//clase inactive
function toggleDesktopMenu() {
  //console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

//console.log('JS funcionando');
