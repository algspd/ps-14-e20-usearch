<!DOCTYPE html>
<html lang="en">
<head>
  <?php
    echo link_tag(base_url() . $this->config->item('css'));
    echo "\n";
  ?>
  <meta charset="utf-8">
  <title>Test view</title>
</head>
<body>
<form>
 <label for="ref">Referencia</label>
 <input id="ref" name="ref" type="text" placeholder=" <?php echo $default->ref; ?> " required autofocus>

</form>

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

</body>
</html>
