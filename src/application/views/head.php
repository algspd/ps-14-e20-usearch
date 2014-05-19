<!DOCTYPE html>
<html>
  <head>
    <title>MicroSearch</title>
    <meta charset="utf-8">
    <?php
      echo link_tag(base_url() . $this->config->item('css'));
      echo "\n";
    ?>
  </head>
  <body>
    <!-- Cabecera página web con logos -->
	<div id="cabecera">
	    <a href="<?php echo base_url(); ?>">
            <img id="logoWeb" src="<?php echo base_url() . "/img/logoWeb.png"; ?>" alt="Logotipo">
            <div id="tituloWeb">
                <img src="<?php echo base_url() . "/img/logoWeb_texto.png"; ?>" alt="uSearch: BUSCA. ENCUENTRA. COMPRA MICROS.">
            </div>
		</a>
	</div> 
	 
    <div id="contenido">
        <!-- Sub-cabecera -->
        <div id="menu_navegacion">
            
            <ul class="nav">
                 <!-- Item: carrito -->
                <li>
                    <div id="carrito">
                        <a href="<?php echo base_url() . "index.php/carrito"; ?>">
                            <img id="carrito_img" src="<?php echo base_url() . "/img/carrito.png"; ?>" 
                                alt="Carrito" title="Carrito de compra">
                        	<div id="icarrito_items"><?php echo $items; ?> items</div>
                        </a>
                    </div>
                </li>
                
                <!-- Item: Buscador -->
                <li>
					<?php echo "<form method='post' action='" . base_url() . "index.php/buscar" . "'>";?>
	                    <div id="buscador">
	                        <div id="buscador_selector">
	                            <select name="campo">
	                				<option value="arquitectura">Arquitectura</option>
	                				<option value="frecuencia">Frecuencia (MHz)</option>
	                				<option value="flash">Flash (KB)</option>
	                				<option value="ram">RAM (KB)</option>
	                            </select>
	                        </div>
	                        <input id="buscador_texto" type="text" name="busqueda" value="" placeholder="Introduzca su búsqueda..." autocomplete="off">
	                        <input id="buscador_boton" type="image" src="<?php echo base_url() . "img/buscador_boton.png"; ?>">
	                    </div>
					</form>
                </li>
                
                <!-- Item: Listado -->
                <li>
                    <a style="text-decoration:underline;" href="<?php echo base_url() . "index.php/listar_todo" ?>">LISTADO COMPLETO</a>
                </li>
            </ul>
        </div> <!-- Menu navegacion -->
    <div id="contenido_ppal">
