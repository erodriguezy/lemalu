console.log('ejecutandose')
    let productos =[
        {
            id:"0",
            nombre:"1/4 de pollo",
            descripcion:"Pierna y contrapierna de pollo acompañado de arroz y papas fritas",
            imagen:"./src/img/cuarto_pollo.jpeg",
            precio:"15 Bs."
        },
        {
            id:"1",
            nombre:"1/2 pollo",
            descripcion:"Medio de pollo a la broasted acompañado de arroz y papas fritas",
            imagen:"./src/img/medio_pollo.jpeg",
            precio:"25 Bs."
        },
        {
            id:"2",
            nombre:"Alitas de pollo",
            descripcion:"Alitas de pollo acompañado de papas fritas y salsa a gusto",
            imagen:"./src/img/alas.jpeg",
            precio:"23 Bs."
        },
        {
            id:"3",
            nombre:"Nugets de pollo",
            descripcion:"Trozos de pechuga a la broasted acompañado de papas fritas",
            imagen:"./src/img/nugets.jpeg",
            precio:"15 Bs."
        },
        {
            id:"4",
            nombre:"Pipocas de Pollo",
            descripcion:"Trozos pequeños de pollo a la broasted acompañado de papas fritas",
            imagen:"./src/img/pipocas.jpeg",
            precio:"15 Bs."
        },
        {
            id:"5",
            nombre:"Pollo entero",
            descripcion:"Pollo entero a la broasted acompañado de arroz y papas fritas",
            imagen:"./src/img/pollo_entero.jpeg",
            precio:"40 Bs."
        },
    ]
window.addEventListener('DOMContentLoaded',mostrarMenu,false);
function mostrarMenu(){
    

    const cuerpoMenu=document.getElementById('cuerpo-menu')

    productos.forEach(producto => {
        const item= document.createElement('div');
        item.classList.add('item');
        item.addEventListener('click',()=>{
           mostrarProducto(producto.id);
        });
        const itemDescripcion=document.createElement('div');
        itemDescripcion.classList.add('item-descripcion');
        const imagen= document.createElement('img');        
        imagen.setAttribute('alt',producto.nombre);
        imagen.setAttribute(
            'src',
            producto.imagen,
            );
        const nombreProducto=document.createElement('h3');
        nombreProducto.innerText=producto.nombre;
        const itemPrecio=document.createElement('div');
        itemPrecio.classList.add('item-precio');
        precio=document.createElement('h3');
        precio.innerText=producto.precio;
        itemPrecio.appendChild(precio);
        itemDescripcion.appendChild(imagen);
        itemDescripcion.appendChild(nombreProducto);
        item.appendChild(itemDescripcion);
        item.appendChild(itemPrecio);
        cuerpoMenu.appendChild(item);
    });
    
}

function mostrarProducto(id){

   const productDetail=document.querySelector(".product-detail");
   productDetail.innerHTML='';
   const container=`
   <div class="product-detail-close">
        <img src="./src/img/icon_close.png" alt="close" onclick=ocultarModal()>
   </div>
   <img src="${productos[id].imagen}" alt="bike">
    <div class="product-info">        
        <p>${productos[id].nombre}</p>
        <p>${productos[id].descripcion}</p>
        <p>${productos[id].precio}</p>
        <button class="primary-button add-to-cart-button" onclick=ocultarModal()>                
        Cerrar
   </button>
 </div>                           
`;
const html = productDetail.innerHTML;
productDetail.innerHTML=container+html;
productDetail.style.display='block';
}


function mostrarModal(){
    const productDetail=document.querySelector(".product-detail");
    productDetail.style.display='block';
}

function ocultarModal(){
    const productDetail=document.querySelector(".product-detail");
    productDetail.style.display='none';
}

/*<aside class="product-detail">
            <div class="product-detail-close">
              <img src="./src/img/icon_close.png" alt="close">
            </div>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="bike">
            <div class="product-info">
              <p>Bs. 35,00</p>
              <p>Bicicleta</p>
              <p>Bicicleta hecha a base de frina de carbono con sistema de cambios y frenos de ultima generación</p>
              <button class="primary-button add-to-cart-button">                
                Cerrar
              </button>
            </div>
          </aside>*/

