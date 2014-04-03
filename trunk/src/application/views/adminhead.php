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
                
                <!-- Item: Listado -->
                <li>
                    <a style="text-decoration:underline;" href="<?php echo base_url() . "index.php/editar" ?>">EDITAR</a>
                </li>
                <!-- Item: Listado -->
                <li>
                    <a style="text-decoration:underline;" href="<?php echo base_url() . "index.php/agregar" ?>">CREAR NUEVO</a>
                </li>
            </ul>
        </div> <!-- Menu navegacion -->
    <div id="contenido_ppal">
