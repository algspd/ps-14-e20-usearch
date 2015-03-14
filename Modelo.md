# Funciones disponibles #

## Insertar ##
> `insertar(ref, arch, freq, flash, ram, precio)`
Crea una nueva entrada en la base de datos. Todos los campos son obligatorios y deben ser proporcionados al llamar a la función.
En caso de intentar insertar dos elementos con la misma referencia, devolverá FALSE. En caso de éxito, devolverá TRUE.

## Modificar ##
> `modificar(ref, arch, freq, flash, ram, precio)`
Modificar una entrada existente. Todos los campos son obligatorios y deben ser proporcionados al llamar a la función. En caso de tratar de modificar un elemento con referencia inexistente, no se modifica ningún elemento.

## Eliminar ##
> `eliminar(ref)`
Elimina una entrada de la tabla micros. La referencia debe existir. Si la referencia no existe no se borra ningún elemento.

## Listar todo ##
> `listar_todo()`

Devuelve un listado completo de los microcontroladores de la base de datos. Lo devuelve en un vector de objetos de la clase Microsmodel.
Se puede leer dicho vector de forma sencilla de la siguiente manera:

```
$resultado=$this->microsmodel->listar_todo();
  foreach($resultado as $fila){
    echo ($fila->ref . "," . $fila->arch . "," . $fila->freq . "," . $fila->flash . "," . $fila->ram . "," . $fila->precio);
}
```
## Listar uno ##
> `listar_uno(ref)`

Devuelve un objeto de la clase Microsmodel conteniendo la información correspondiente a la referencia pasada como argumento.
Si la referencia no existe, devuelve un objeto de la clase Microsmodel con los campos vacíos.

## Buscar ##

> ``busqueda(...) `[iteracion 2]```

Sin implementar.