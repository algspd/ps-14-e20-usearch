<form method="post" action="/ps-14-e20-usearch/src/index.php/editar">
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
        echo "<button name='ref' value='" . $fila->ref . "' type='submit'>Editar</button>";
        echo "<button name='eliminar' value='" . $fila->ref . "' type='submit'>Eliminar</button>";
        echo "</td>";
        echo "</tr>\n";
    }
?>
</table>
