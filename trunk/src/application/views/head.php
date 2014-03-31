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
        <div id="logoWeb">
            <img src="<?php echo base_url() . "/img/logoWeb.png"; ?>" alt="Logo Web">
        </div>
        <div id="tituloWeb">
            &#181;Search
        </div>	
		</a>
	</div> 
	    
    <!-- Sub-cabecera -->
    <div id="subcabecera">

        <!-- Sección de carrito -->
        <div id="carritoWrapper" >
            <a href="<?php echo base_url() . "index.php/carrito"; ?>">
                <div id="carrito" >
                    <img src="<?php echo base_url() . "/img/carrito.png"; ?>" alt="Carrito" 
                        title="Carrito de compra">
            	</div>
            	<div id="itemsCarrito">
            	    <?php echo $items; ?> items
            	</div>
            </a>
        </div>
        <a href="<?php echo base_url() . "index.php/listar_todo" ?>" id="botonListado">LISTADO COMPLETO</a>
