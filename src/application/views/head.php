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
        <img id="logoWeb" src="<?php echo base_url() . "/img/logoWeb.png"; ?>" alt="Logo Web">
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
                    <a href="<?php echo base_url() . "index.php/carrito"; ?>">
                        <img id="carrito" src="<?php echo base_url() . "/img/carrito.png"; ?>" 
                            alt="Carrito" title="Carrito de compra">
                    	<div id="itemsCarrito">
                    	    <?php echo $items; ?> items
                    	</div>
                    </a>
                </li>
                
                <!-- Item: Buscador 
                <li>
                    <div id="buscador">
                        <input id="buscador_texto" type="text" name="q" value="" placeholder="Introduzca su búsqueda.." autocomplete="off">
                        <input id="buscador_boton" type="image" src="<?php echo base_url() . "img/buscador_boton.png"; ?>">
                    </div>
                </li>
                -->
                
                <!-- Item: Listado -->
                <li>
                    <a href="<?php echo base_url() . "index.php/listar_todo" ?>">LISTADO COMPLETO</a>
                </li>
            </ul>