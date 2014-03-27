<div style="position:absolute;top:120px;left:150px;">
    <?php
      echo "Nombre: " . $_POST['nombre'] . "<br>";
      echo "Apellidos: " . $_POST['apellidos'] . "<br>";
      echo "Dirección: " . $_POST['direccion'] . "<br>";
      echo "Ciudad: " . $_POST['ciudad'] . "<br>";
      echo "Provincia: " . $_POST['provincia'] . "<br>";
      echo "Código postal: " . $_POST['cp'] . "<br>";
      echo "Teléfono: " . $_POST['tfn'] . "<br>";
      echo "E-mail: " . $_POST['email'] . "<br>";
      if ($_POST['cif']!="" and $_POST['empresa']!=""){
        echo "Empresa: " . $_POST['empresa'] . "<br>";
        echo "CIF: " . $_POST['cif'] . "<br>";
      }
    ?>
</div>
<table cellpadding="2" cellspacing="1" style="width:80%" border="1">
<tr>
  <th>Cantidad</th>
  <th>Referencia</th>
  <th style="text-align:right">Precio</th>
  <th style="text-align:right">Subtotal</th>
</tr>
<?php $i = 1; ?>
<?php foreach ($this->cart->contents() as $items): ?>
  <tr>
    <td><?php echo $items['qty']; ?></td>
    <td><?php echo $items['name']; ?></td>
    <td class="right"><?php echo $this->cart->format_number($items['price']); ?></td>
    <td class="right"><?php echo $this->cart->format_number($items['subtotal']); ?>€</td>
  </tr>
  <?php $i++; ?>
<?php endforeach; ?>
<tr>
  <td colspan="2"> </td>
  <td class="right"><strong>Total</strong></td>
  <td class="right"><?php echo $this->cart->format_number($this->cart->total()); ?>€</td>
</tr>
</table>
