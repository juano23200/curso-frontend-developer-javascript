
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
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');//.product-detail permite indicar que
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

/*-----------CREACION DE SELECTORES PARA LA RENDERIZACION DE LA LISTA DE PRODUCTOS----------------------- */                                                           
//Permite seleccionar el elemento el cual contiene la clase principal .cards-container para poderla
//utilizar dentro de la funcion renderProducts(arr) la cual permite renderizar 
//la lista de productos por medio de la implementacion de arreglos.
const cardsContainer = document.querySelector('.cards-container');

/*------------------------------------ EVENTOS - DAR CLICK-------------------------------------------------------- */

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

/*----------------------------- FUNCIONES ------------------------------------------- */

/*-----------FUNCION PARA MOSTRAR O OCULTAR EL MENU PEQUEÑO----------------------- */
//funcion toggleDesktopMenu() para poder mostrar o ocultar el menu pequeño, que en este caso es la 
//clase inactive
function toggleDesktopMenu() {
  //console.log('Click');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}
//console.log('JS funcionando');

/*-----------FUNCION PARA MOSTRAR O OCULTAR EL MENU HAMBURGUESA----------------------- */
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }

/*-----------FUNCION PARA MOSTRAR O OCULTAR EL CONTENIDO DEL CARRITO DE COMPRAS----------------------- */

  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    shoppingCartContainer.classList.toggle('inactive');
  }


/*-----------FUNCION PARA MOSTRAR Y RENDERIZAR UTILIZANDO ARREGLOS LA LISTA DE PRODUCTOS----------------------- */

/*------- CREACION Y DECLARACION DE ARREGLOS------------- */

//Creacion de arreglo
  const productList = [];

/* ASIGNACION DE ELEMENTOS AL ARREGLO */
productList.push({//.push permite agregar-asignar elementos al arreglo productList[]
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {//Se recibe como parametro el arreglo productList
                              //y se guarda en la variable arr[]
  for (product of arr) {//Ciclo para recorrer el arreglo de productos
    //Se crea el elemento-etiqueta <div></div> y se almacena en la variable productCard
    const productCard = document.createElement('div');
    //Ahora al elemento creado productCard le vamos a agregar-add una clase  
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    //Se crea el elemento-etiqueta <img> y se almacena en la variable productImg
    const productImg = document.createElement('img');
    //Se agrega-asigna un atributo (por medio de la funcion .setAttribute)'src' al elemento-etiqueta <img>
    productImg.setAttribute('src', product.image);//product.image permite acceder al atributo image del elemento
                                                  //almacenado en el arreglo productList[]
                                                  //el atributo image el cual contiene la url de la imagen del producto
                                                  //para poder asignarlo al 'src' de la etiqueta <img>
  
    //Se crea el elemento-etiqueta <div></div> y se almacena en la variable productInfo                                              
    const productInfo = document.createElement('div');
    //Ahora al elemento creado productInfo le vamos a agregar-add una clase
    productInfo.classList.add('product-info');
  
    //Se crea el elemento-etiqueta <div></div> y se almacena en la variable productInfoDiv
    const productInfoDiv = document.createElement('div');
  
    //Se crea el elemento-etiqueta <p></p> y se almacena en la variable productPrice
    const productPrice = document.createElement('p');
    //Se agrega un texto a la etiqueta parrafo creada productPrice
    //concatenando el texto '$' junto con el precio del producto almacenado en uno de los elementos
    //del arreglo productList[], se accede con product.price
    productPrice.innerText = '$' + product.price;

    //Se crea el elemento-etiqueta <p></p> y se almacena en la variable productName
    const productName = document.createElement('p');
    //Se agrega un texto a la etiqueta parrafo creada productName
    //Se asigna el nombre del producto el cual esta almacenado en uno de los elementos
    //del arreglo productList[], se accede con product.name
    productName.innerText = product.name;
  
    //appendChild permite agregar-asignar el elemento-etiqueta productPrice
    //al elemento-etiqueta productInfoDiv    
    productInfoDiv.appendChild(productPrice);
    //appendChild permite agregar-asignar el elemento-etiqueta productName
    //al elemento-etiqueta productInfoDiv      
    productInfoDiv.appendChild(productName);
  
    //Se crea el elemento-etiqueta <figure></figure> y se almacena en la variable productInfoFigure
    const productInfoFigure = document.createElement('figure');

    //Se crea el elemento-etiqueta <img></img> y se almacena en la variable productImgCart
    const productImgCart = document.createElement('img');
    //Se agrega-asigna un atributo (por medio de la funcion .setAttribute)'src' al elemento-etiqueta <img>
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');//Se asigna a la propiedad-atributo src
                                                                     //la ruta en donde se encuentra el icono
                                                                     //del carrito de compras. 
  
    //appendChild permite agregar-asignar el elemento-etiqueta productImgCart
    //al elemento-etiqueta productInfoFigure                                                            
    productInfoFigure.appendChild(productImgCart);
  
    //appendChild permite agregar-asignar el elemento-etiqueta productInfoDiv
    //al elemento-etiqueta productInfo  
    productInfo.appendChild(productInfoDiv);
    //appendChild permite agregar-asignar el elemento-etiqueta productInfoFigure
    //al elemento-etiqueta productInfo 
    productInfo.appendChild(productInfoFigure);

    //appendChild permite agregar-asignar el elemento-etiqueta productImg
    //al elemento-etiqueta productCard
    productCard.appendChild(productImg);
    //appendChild permite agregar-asignar el elemento-etiqueta productInfo
    //al elemento-etiqueta productCard
    productCard.appendChild(productInfo);

    //appendChild permite agregar-asignar el elemento-etiqueta productCard
    //al elemento-etiqueta cardsContainer creado como selector al inicio 
    cardsContainer.appendChild(productCard);
  }
}

//Se hace el llamado a la funcion en donde estamos renderizando la Lista de productos
renderProducts(productList);//Se envia como referencia el arreglo de la lista de productos
                            //productList[]