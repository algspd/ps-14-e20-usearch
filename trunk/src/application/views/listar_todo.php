
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
        echo "<form method='post' action='" . base_url() . "/index.php/listar_todo" . "'>";
        echo $fila->ref;
        echo "<input type='hidden' value='" . $fila->ref . "' name='ref'>";
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
        echo "<input type='hidden' value='" . $fila->precio . "' name='precio'>";
        echo "</td>";
        echo "<td>";
        echo "<input type=\"submit\" value=\"Añadir\">";
        echo "</form>";
        echo "</td>";
        echo "</tr>";
    }
?>
</table>
</form>
