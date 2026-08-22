// ===============================
// PRODUCTOS - CATÁLOGO HGW 2026
// Precios publicados en tienda HGW Colombia
// ===============================

const productos = [

    // ===============================
    // ALIMENTOS
    // ===============================

    {
        id: 1,
        nombre: "Café con Arándanos HGW",
        categoria: "bebidas",
        precio: 96000,
        imagen: "imagenes/berrycoffee.jpg",
        emoji: "☕",
        descripcion: "Blueberry Coffee con café y arándanos."
    },

    {
        id: 2,
        nombre: "Café con Ganoderma HGW",
        categoria: "bebidas",
        precio: 96000,
        imagen: "imagenes/GanodermaCoffee.jpg",
        emoji: "🍄",
        descripcion: "Café soluble con Ganoderma."
    },

    {
        id: 3,
        nombre: "Café con Ganoderma y Arándanos HGW",
        categoria: "bebidas",
        precio: 84000,
        imagen: "imagenes/berrygano.jpeg",
        emoji: "☕",
        descripcion: "Café con Ganoderma y arándanos."
    },

    {
        id: 4,
        nombre: "Café con Té Negro HGW",
        categoria: "bebidas",
        precio: 84000,
        imagen: "imagenes/Blackcoffee.jpg",
        emoji: "🍵",
        descripcion: "Black Tea Coffee con café y té negro."
    },

    {
        id: 5,
        nombre: "Jugo de Arándano y Vitamina C HGW",
        categoria: "bebidas",
        precio: 102000,
        imagen: "imagenes/bjuice.jpg",
        emoji: "🥤",
        descripcion: "Bebida de arándano con vitamina C."
    },

    {
        id: 6,
        nombre: "Lactiberry HGW",
        categoria: "bebidas",
        precio: 108000,
        imagen: "imagenes/Lactiberry.jpg",
        emoji: "🥛",
        descripcion: "Mezcla de arándanos, lácteo y té negro."
    },

    {
        id: 7,
        nombre: "Proteína de Soya con Arándanos HGW",
        categoria: "alimentos",
        precio: 150000,
        imagen: "imagenes/pro.webp",
        emoji: "🥛",
        descripcion: "Alimento vegetal de proteína de soya con arándanos."
    },

    {
        id: 8,
        nombre: "Mermelada de Arándanos HGW",
        categoria: "alimentos",
        precio: 48000,
        imagen: "imagenes/Mermeladahgw.jpg",
        emoji: "🫐",
        descripcion: "Mermelada de arándanos."
    },

    {
        id: 9,
        nombre: "Galletas con Arándanos HGW",
        categoria: "alimentos",
        precio: 90000,
        imagen: "imagenes/BlueberryBiscuit.jpg",
        emoji: "🍪",
        descripcion: "Galletas con arándanos."
    },

    // ===============================
    // CONFITERÍA FUNCIONAL
    // ===============================

    {
        id: 10,
        nombre: "Caramelos de Arándano HGW",
        categoria: "confiteria",
        precio: 24000,
        imagen: "imagenes/cara.webp",
        emoji: "🍬",
        descripcion: "Caramelos de arándano."
    },

    // ===============================
    // CUIDADO PERSONAL
    // ===============================

    {
        id: 11,
        nombre: "Crema Dental con Probióticos HGW",
        categoria: "cuidado",
        precio: 30000,
        imagen: "imagenes/cew.webp",
        emoji: "🪥",
        descripcion: "Crema dental con probióticos."
    },

    {
        id: 12,
        nombre: "Crema Dental Turmalina Blanca HGW",
        categoria: "cuidado",
        precio: 30000,
        imagen: "imagenes/cremab.webp",
        emoji: "🪥",
        descripcion: "Crema dental de turmalina blanca."
    },

    {
        id: 13,
        nombre: "Crema Dental Turmalina Negra HGW",
        categoria: "cuidado",
        precio: 30000,
        imagen: "imagenes/negra.webp",
        emoji: "🪥",
        descripcion: "Crema dental de turmalina negra."
    },

    {
        id: 14,
        nombre: "Crema Dental sin Flúor HGW",
        categoria: "cuidado",
        precio: 30000,
        imagen: "imagenes/Herbspastadental.jpg",
        emoji: "🦷",
        descripcion: "Crema dental herbal con menta y xilitol."
    },

    {
        id: 15,
        nombre: "Protector Solar SPF 50 HGW",
        categoria: "cuidado",
        precio: 84000,
        imagen: "imagenes/protectorsolar.jpg",
        emoji: "☀️",
        descripcion: "Protector solar SPF 50 Smilife."
    },

    {
        id: 16,
        nombre: "Gel Aloe Vera HGW",
        categoria: "cuidado",
        precio: 30000,
        imagen: "imagenes/MoisturizingAloeVeraGel.jpg",
        emoji: "🌿",
        descripcion: "Gel de aloe vera para el cuidado de la piel."
    },

    {
        id: 17,
        nombre: "Crema para Manos HGW",
        categoria: "cuidado",
        precio: 42000,
        imagen: "imagenes/mano.webp",
        emoji: "🧴",
        descripcion: "Crema para manos con arándano y miel."
    },

    {
        id: 18,
        nombre: "Desodorante para Hombre HGW",
        categoria: "cuidado",
        precio: 96000,
        imagen: "imagenes/deso.webp",
        emoji: "🌊",
        descripcion: "Desodorante Deep Ocean sin aluminio."
    },

    {
        id: 19,
        nombre: "Desodorante para Dama HGW",
        categoria: "cuidado",
        precio: 96000,
        imagen: "imagenes/daam.webp",
        emoji: "🌸",
        descripcion: "Desodorante Sweet Candy sin aluminio."
    },

    {
        id: 20,
        nombre: "Jabón de Turmalina HGW",
        categoria: "cuidado",
        precio: 18000,
        imagen: "imagenes/jabonturmalina.jpg",
        emoji: "🧼",
        descripcion: "Jabón de turmalina para el cuidado de la piel."
    },

    {
        id: 21,
        nombre: "Toallas Higiénicas Noche HGW",
        categoria: "higiene",
        precio: 19200,
        imagen: "imagenes/EnjoyableNightUse.jpg",
        emoji: "🌙",
        descripcion: "Toallas higiénicas para uso nocturno."
    },

    {
        id: 22,
        nombre: "Toallas Higiénicas Día HGW",
        categoria: "higiene",
        precio: 21000,
        imagen: "imagenes/EnjoyableDayUse.jpg",
        emoji: "🌸",
        descripcion: "Toallas higiénicas para uso diurno."
    },

    {
        id: 23,
        nombre: "Gel de Baño de Turmalina HGW",
        categoria: "cuidado",
        precio: 54000,
        imagen: "imagenes/Gelbañoturmalina.jpg",
        emoji: "🧴",
        descripcion: "Gel de baño de turmalina."
    },

    {
        id: 24,
        nombre: "Shampoo con Keratina HGW",
        categoria: "cuidado",
        precio: 72000,
        imagen: "imagenes/ShampooKeratina.jpg",
        emoji: "🧴",
        descripcion: "Shampoo con keratina."
    },

    {
        id: 25,
        nombre: "Protectores Diarios HGW",
        categoria: "higiene",
        precio: 21000,
        imagen: "imagenes/EnjoyablePantyLiner.jpg",
        emoji: "🌸",
        descripcion: "Protectores diarios con turmalina y aniones."
    },

    {
        id: 26,
        nombre: "Jabón de Oliva HGW",
        categoria: "cuidado",
        precio: 18000,
        imagen: "imagenes/JabónOliva.jpg",
        emoji: "🧼",
        descripcion: "Jabón de oliva para el cuidado de la piel."
    },

    {
        id: 27,
        nombre: "Gel para el Dolor Mingdeshijia HGW",
        categoria: "cuidado",
        precio: 156000,
        imagen: "imagenes/OIP.webp",
        emoji: "🌿",
        descripcion: "Gel herbal Mingdeshijia."
    },

    // ===============================
    // ACCESORIOS
    // ===============================

    {
        id: 28,
        nombre: "Termo de Turmalina HGW",
        categoria: "accesorios",
        precio: 390000,
        imagen: "imagenes/term.webp",
        emoji: "🥤",
        descripcion: "Termo de turmalina HGW."
    },

    {
        id: 29,
        nombre: "Protector de Cintura HGW",
        categoria: "accesorios",
        precio: 288000,
        imagen: "imagenes/prote.webp",
        emoji: "🛡️",
        descripcion: "Protector de cintura con turmalina."
    }

];

// ===============================
// CARRITO
// ===============================

let carrito = [];


// ===============================
// MOSTRAR PRODUCTOS
// ===============================

function mostrarProductos(lista = productos) {

    const contenedor =
        document.getElementById("lista-productos");

    contenedor.innerHTML = "";

    if (lista.length === 0) {

        contenedor.innerHTML = `
            <p style="grid-column: 1/-1; text-align:center;">
                No encontramos productos.
            </p>
        `;

        return;
    }

    lista.forEach(producto => {

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `

            <div class="producto-imagen">

                ${
                    producto.imagen
                    ? `<img 
                        src="${producto.imagen}" 
                        alt="${producto.nombre}"
                       >`
                    : producto.emoji
                }

            </div>

            <div class="producto-info">

                <h3>${producto.nombre}</h3>

                <p>
                    ${producto.descripcion}
                </p>

                <div class="precio">
                    ${formatearPrecio(producto.precio)}
                </div>

                <button
                    class="btn-agregar"
                    onclick="agregarAlCarrito(${producto.id})"
                >
                    🛒 Agregar al carrito
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


// ===============================
// FORMATO DE PRECIO
// ===============================

function formatearPrecio(valor) {

    return valor.toLocaleString("es-CO", {

        style: "currency",

        currency: "COP",

        maximumFractionDigits: 0

    });

}


// ===============================
// AGREGAR AL CARRITO
// ===============================

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            producto => producto.id === id
        );

    if (!producto) return;

    const productoExistente =
        carrito.find(
            producto => producto.id === id
        );


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            ...producto,

            cantidad: 1

        });

    }


    actualizarCarrito();

    abrirCarrito();

}


// ===============================
// ACTUALIZAR CARRITO
// ===============================

function actualizarCarrito() {

    const contenedor =
        document.getElementById("productos-carrito");

    const contador =
        document.getElementById("contador-carrito");

    const total =
        document.getElementById("total-carrito");


    contenedor.innerHTML = "";


    if (carrito.length === 0) {

        contenedor.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

        contador.textContent = "0";

        total.textContent = "$0";

        return;
    }


    let totalCompra = 0;

    let cantidadTotal = 0;


    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;


        totalCompra += subtotal;

        cantidadTotal +=
            producto.cantidad;


        const item =
            document.createElement("div");

        item.classList.add("item-carrito");


        item.innerHTML = `

            <div>

                <h4>
                    ${producto.emoji}
                    ${producto.nombre}
                </h4>

                <p>
                    ${formatearPrecio(producto.precio)}
                    × ${producto.cantidad}
                </p>

            </div>

            <button
                class="btn-eliminar"
                onclick="eliminarDelCarrito(${producto.id})"
            >
                🗑️
            </button>

        `;


        contenedor.appendChild(item);

    });


    contador.textContent =
        cantidadTotal;


    total.textContent =
        formatearPrecio(totalCompra);

}


// ===============================
// ELIMINAR DEL CARRITO
// ===============================

function eliminarDelCarrito(id) {

    carrito =
        carrito.filter(
            producto => producto.id !== id
        );

    actualizarCarrito();

}


// ===============================
// ABRIR CARRITO
// ===============================

function abrirCarrito() {

    document
        .getElementById("carrito")
        .classList.add("activo");

    document
        .getElementById("fondo-carrito")
        .classList.add("activo");

}


// ===============================
// CERRAR CARRITO
// ===============================

function cerrarCarrito() {

    document
        .getElementById("carrito")
        .classList.remove("activo");

    document
        .getElementById("fondo-carrito")
        .classList.remove("activo");

}


// ===============================
// FILTRAR CATEGORÍA
// ===============================

function filtrarCategoria(categoria) {

    // Mostrar productos
    if (categoria === "todos") {

        mostrarProductos(productos);

    } else {

        const filtrados = productos.filter(
            producto => producto.categoria === categoria
        );

        mostrarProductos(filtrados);
    }


    // Cambiar botón activo
    const botones =
        document.querySelectorAll(".categorias button");

    botones.forEach(boton => {
        boton.classList.remove("activo");
    });


    // Buscar el botón seleccionado
    botones.forEach(boton => {

        const texto =
            boton.getAttribute("onclick");

        if (texto &&
            texto.includes(`'${categoria}'`)) {

            boton.classList.add("activo");
        }

    });

}


// ===============================
// BUSCADOR
// ===============================

function buscarProducto() {

    const texto =
        document
            .getElementById("buscador")
            .value
            .toLowerCase()
            .trim();


    const resultados =
        productos.filter(producto =>

            producto.nombre
                .toLowerCase()
                .includes(texto)

        );


    mostrarProductos(resultados);

}


// ===============================
// REALIZAR PEDIDO POR WHATSAPP
// ===============================

function realizarPedido() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    let mensaje =
        "🛍️ *NUEVO PEDIDO - HGW STORE*%0A%0A";


    let total = 0;


    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;


        total += subtotal;


        mensaje +=
            `📦 ${producto.nombre}%0A`;

        mensaje +=
            `Cantidad: ${producto.cantidad}%0A`;

        mensaje +=
            `Subtotal: ${formatearPrecio(subtotal)}%0A%0A`;

    });


    mensaje +=
        `💰 *TOTAL: ${formatearPrecio(total)}*%0A%0A`;


    mensaje +=
        "Hola, quiero realizar este pedido. 😊";


    /*
       IMPORTANTE:

       Aquí debe ir tu número de WhatsApp.

       Formato:
       573001234567

       SIN +, SIN espacios y SIN guiones.
    */

    const numeroWhatsApp =
        "573229272847";


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;


    window.open(url, "_blank");

}


// ===============================
// INICIAR PÁGINA
// ===============================

mostrarProductos();

actualizarCarrito();