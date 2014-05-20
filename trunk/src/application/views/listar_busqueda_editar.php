<?php echo "<form method='post' action='" . base_url() . "index.php/buscar_editar" . "'>";?>
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
        echo "<td class='ref'>";
        echo $fila->ref;
        echo "</td>";
        echo "<td class='arq'>";
        echo $fila->arch;
        echo "</td>";
        echo "<td class='freq'>"  ;   
        echo $fila->freq;
        echo "</td>";
        echo "<td class='flash'>";
        echo $fila->flash;
        echo "</td>";
        echo "<td class='ram'>";
        echo $fila->ram;
        echo "</td>";
        echo "<td class='precio'>";
        echo $fila->precio;
        echo "</td>";
        echo "<td class='buttonsEditDelete'>";
        echo "<button name='ref' value='" . $fila->ref . "' type='submit'>Editar</button>";
        echo "<button name='eliminar' value='" . $fila->ref . "' type='submit'>Eliminar</button>";
        echo "</td>";
        echo "</tr>\n";
    }
?>
</table>
</form>
</div>
