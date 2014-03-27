                        <!-- Sección de carrito -->
                        <a href="user_carrito.html"><img src="<?php echo base_url() . "/img/carrito.jpg"; ?>" alt="Carrito" id="logoCarrito" title="Carrito de compra"></a>
                        <a href="user_carrito.html" id="itemsCarrito">0 items</a>

                        <!-- Sección de búsqueda -->
                        <select id="selectPropiedades">
                                <option value="arquitectura">Arquitectura</option>
                                <option value="frecuencia">Frecuencia(MHz)</option>
                                <option value="flash">Flash(KB)</option>
                                <option value="ram">RAM(KB)</option>
                        </select>
                        <!-- FIXME: FORM -->
                        <input type="text" id="textoBusq" placeholder="Búsqueda...">
                        <input type="image" src="<?php echo base_url() . "/img/buscar.png"; ?>" alt="Buscar productos" id="logoBusqueda" name="Buscar">
                </div>
<div>

<table>
  <tr>
    <th>Referencia</th>
    <th>Arquitectura</th>
    <th>Frecuencia (MHz)</th>
    <th>Flash (kb)</th>
    <th>Ram (kb)</th>
    <th>Precio (€)</th>
    <th></th>

</tr>
<?php
      foreach($resultado as $fila){
        echo "<tr>";
        echo "<td>";
        echo $fila->ref;
        echo "</td>";
        echo "<td>";
        echo $fila->arch;
        echo "</td>";
        echo "<td>"  ;   
        echo $fila->freq;
        echo "</td>";
        echo "<td>";
        echo $fila->flash;
        echo "</td>";
        echo "<td>";
        echo $fila->ram;
        echo "</td>";
        echo "<td>";
        echo $fila->precio;
        echo "</td>";
        echo "<td>";
        echo "<button type='button'>Añadir</button>";
        echo "</td>";
        echo "</tr>";
    }
?>
</table>

