<div>
<?php if (!empty($resultado)) { ?>
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
        echo "<form method='post' action='" . base_url() . "index.php/listar_todo" . "'>";
        echo "<tr>";
		  echo "<td class='ref'>";
            echo $fila->ref;
            echo "<input type='hidden' value='" . $fila->ref . "' name='ref'>";
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
            echo "<input type='hidden' value='" . $fila->precio . "' name='precio'>";
          echo "</td>";
          echo "<td class='buttonAdd'>";
            echo "<input type=\"image\" src=\"<?php echo base_url() . '/img/logoWeb.png'; ?>\">";
          echo "</td>";
        echo "</tr>\n";
        echo "</form>";
    }
?>
</table>
<?php } else { ?>
	<p class="texto_centrado">
		No hay resultados para <strong>'<?php echo $string_busqueda;?>'</strong> en el campo <strong>'<?php echo $campo_busqueda;?></strong>'
	</p>
<?php } ?>
</div>
</div>
