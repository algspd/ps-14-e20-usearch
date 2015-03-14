# Funcionamiento #
## Primera llamada ##
Si se llama al carrito sin parámetros, este muestra la vista "carrito" con los elementos que en ese momento están en el carrito, que se encuentran almacenados en la sesión.

## Llamada con "pedir" ##
Si se efectua una llamada al carrito con un parámetro "pedir", se generará una hoja de pedido con los datos del formulario y los elementos del carrito.
La hoja será mostrada sobre la web en la primera iteración del proyecto y más adelante se generará un PDF con la hoja de pedido.

## Llamada con "vaciar" ##
Si se efectua una llamada al carrito con un parámetro "vaciar", se borrarán todos los elementos del carrito.

## Llamada con "submit" ##
Se efectúa esta llamada al pulsar el usuario el botón de "actualizar", a fin de actualizar las cantidades de chips requeridas y el importe total.
Esta llamada realizará dicha actualización y mostrará de nuevo el carrito.