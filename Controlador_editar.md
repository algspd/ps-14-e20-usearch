# Funcionamiento #

## Primera llamada ##
En la primera llamada el controlador carga la vista "**listar\_todo\_editar**", desde la cual se puede seleccionar el chip a editar.

## Llamada desde la primera vista ##
Cuando se llama al controlador de editar con una referencia en el post, se carga la vista "**editar**" con un formulario con los valores actuales del micro.

## Llamada para modificar ##
Cuando se llama al controlador editar con todos los valores de un micro, se realiza la edición efectiva en la base de datos de dicho. Se muestra al usuario una notificación de que la edición ha tenido éxito.


Se debe llamar a /ps-14-e20-usearch/src/index.php/editar con un POST que contenga un campo ref, con una referencia valida de un micro.