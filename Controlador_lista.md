# Funcionamiento #

## Primera llamada ##
En la primera llamada, este controlador recupera de la base de datos un listado completo de los elementos a mostrar y posteriormente carga la vista listar\_todo pasandole como parametro esos elementos.

## Llamada con "ref" ##
Si este controlador es llamado con un parámetro "ref", el microchip correspondiente a esa referencia es insertado en el carrito. Si ya estaba en el carrito no se hace nada.