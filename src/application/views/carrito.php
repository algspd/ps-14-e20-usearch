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

<input type="submit" name="submit" value="Actualizar">
<input type="submit" name="vaciar" value="Vaciar">
</form>
<form>
<input type="submit" name="pedir" value="Realizar pedido">
</form>
