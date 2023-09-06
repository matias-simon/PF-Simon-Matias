# Tienda en Línea de Guitarras Simon's Guitars

## Descripción del Proyecto

La **Tienda en Línea de Guitarras de Simón** es una aplicación web de comercio electrónico que permite a los usuarios comprar guitarras y bajos en línea. Este proyecto está construido con **React** y utiliza **Firebase** para almacenar los datos.

## Demostración en Vivo

Puedes acceder a una **demostración en vivo** de la aplicación [aquí](#). ¡Explora nuestra selección de guitarras y bajos de alta calidad!

## Características Principales

- **Exploración de Productos:** Los usuarios pueden explorar una amplia selección de guitarras y bajos de diferentes marcas y modelos.

- **Información Detallada:** Cada producto tiene su propia página con información detallada, incluyendo imágenes, descripción, precio y disponibilidad.

- **Carrito de Compras:** Los usuarios pueden agregar productos a su carrito de compras y ajustar las cantidades según sea necesario.

- **Proceso de Compra:** Se proporciona un formulario de compra donde los usuarios pueden ingresar su información de contacto (nombre, teléfono y correo electrónico) antes de finalizar su compra.

- **Confirmación de Pedido:** Después de completar una compra, los usuarios recibirán una confirmación de pedido con un número de pedido único.

## Instrucciones de Instalación

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el Repositorio:**
    git clone https://github.com/matias-simon/PF-Simon-Matias


2. **Instala las Dependencias:**
    npm install


3. **Configura Firebase:**
- Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
- Configura Firebase agregando tus credenciales en `src/Services/firebase/firebaseConfig.js`.
- Configura Firestore y las reglas de Firestore según sea necesario.

4. **Inicia el Servidor de Desarrollo:**
    npm run dev


5. **Accede a la Aplicación:**
Abre tu navegador web y visita `http://localhost:5173/`.

## Tecnologías Utilizadas

- React
- React Router
- Material-UI
- Firebase (Firestore)
- React Hook Form

## Uso

- Explora el catálogo de productos seleccionando diferentes categorías.
- Haz clic en un producto para ver sus detalles.
- Agrega productos a tu carrito de compras haciendo clic en "Agregar al Carrito".
- Ajusta la cantidad de productos en tu carrito.
- Elimina productos del carrito si es necesario.
- Procede al proceso de pago cuando estés listo.
- Ingresa tu información de contacto (nombre, teléfono, correo electrónico) y haz clic en "Completa Tu Compra".
- Recibirás una página de confirmación de pedido que muestra tu ID de pedido único.
- Los pedidos se almacenan en la base de datos Firestore de Firebase.

