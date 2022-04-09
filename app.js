// Variables
const productosCont = document.querySelector('.productos');
const carrito = document.querySelector('.carrito');
const carritoIcono = document.querySelector('.carritoIcono');
let carro = [];
let elementos = [];

// Objeto de productos
const productos = [
    {
        nombre: 'Mat de Yoga',
        src: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/fb15rosa11-e841c85fef47c111ab16058932419549-1024-1024.jpg',
        precio: 1599
    },
    {
        nombre: 'Taco de Yoga',
        src: 'https://www.servicegym.com.ar/wp-content/uploads/2019/07/taco-yoga-eva.jpg',
        precio: 475
    },
    {
        nombre: 'Crema SriSri',
        src: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/735/492/products/crema-facial-de-dia1-0886f8c04fa14fa6c915440188090518-640-0.jpg',
        precio: 1799
    },
    {
        nombre: 'Limpiador de lengua',
        src: 'https://cdn.bioguia.com/embed/360cbd8e8ad9fef29642b4bac31573581777/limpiar-lengua.jpg?imagick=1&size=750',
        precio: 500
    },
    {
        nombre: 'Vitamina B12 Natier',
        src: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/b121-585b63ed3a420e877615909505304071-640-0.jpg',
        precio: 1680
    }
];

// Eventos
document.addEventListener('DOMContentLoaded', escribirHTML);
carritoIcono.addEventListener('click', () => {
    carrito.classList.toggle('ocultar')
})

// Escribir el HTML
function escribirHTML() {
    productos.forEach(element => {
        // Crear los elementos del HTML
        const div = document.createElement('div');
        const h3 = document.createElement('h3').textContent = element.nombre;
        const p = document.createElement('p');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        let precio = element.precio;
        btn.textContent = 'Añadir al carrito';
        img.src = element.src;

        p.textContent = `$${precio}`;
        div.append(h3);
        div.append(img);
        div.append(p);
        div.append(btn);

        // Asignarlos al HTML
        productosCont.appendChild(div);

        // Agregar al carrito
        btn.addEventListener('click', () => {
            agregarCarrito(element)
        });
    })
}

// Agregar al carrito
function agregarCarrito(element) {
    
    // Crear los elementos HTML
    const div = document.createElement('div');
    const h3 = document.createElement('h3').textContent = element.nombre;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    let precio = element.precio;
    btn.textContent = 'Borrar';
    img.src = element.src;

    p.textContent = `$${precio}`;
    div.append(img);
    div.append(h3);
    div.append(p);
    div.append(btn);

    // Asignarlos al carrito
    // elementos = [...elementos, div];
    
    // console.log(elementos)
    carrito.append(div);
    btn.addEventListener('click', () => {
        div.remove();
    })
}