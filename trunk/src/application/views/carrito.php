<form method="post" action="<?php echo base_url() . "/index.php/carrito"?>">
<table cellpadding="2" cellspacing="1" style="width:80%" border="1">

<tr>
  <th>Cantidad</th>
  <th>Referencia</th>
  <th style="text-align:right">Precio</th>
  <th style="text-align:right">Subtotal</th>
</tr>
<?php $i = 1; ?>
<?php foreach ($this->cart->contents() as $items): ?>
  <?php echo form_hidden($i.'rowid', $items['rowid']); ?>
  <tr>
    <td><?php echo form_input(array('name' => $i.'qty', 'value' => $items['qty'], 'maxlength' => '3', 'size' => '5')); ?></td>
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
  <div id="botones_carro">
    <input type="submit" name="submit" value="Actualizar">
    <input type="submit" name="vaciar" value="Vaciar">
  </form>
</div>
<div id="formulario">
  <div id="formulario_2">
  <form method="post" action="<?php echo base_url() . "/index.php/carrito"?>">
    <label for="nombre">Nombre: </label>
    <input type="text" name="nombre"><br>
    <label for="apellidos">Apellidos: </label>
    <input type="text" name="apellidos"><br>
    <label for="direccion">Dirección: </label>
    <input type="text" name="direccion"><br>
    <label for="ciudad">Ciudad: </label>
    <input type="text" name="ciudad"><br>
    <label for="provincia">Provincia: </label>
    <input type="text" name="provincia"><br>
    <label for="cp">Código postal: </label>
    <input type="text" name="cp"><br>
    <label for="tfn">Teléfono: </label>
    <input type="text" name="tfn"><br>
    <label for="email">e-mail: </label>
    <input type="text" name="email"><br>
    <label for="empresa">Empresa: </label>
    <input type="text" name="empresa"><br>
    <label for="cif">CIF: </label>
    <input type="text" name="cif"><br>

    <input type="submit" name="pedir" value="Realizar pedido">
  </form>
  </div>
</div>
