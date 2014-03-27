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
    <div class="cabecera">
      <div class="logos">
        <a href="admin_home.html"><img src="<?php echo base_url() . "/img/logoWeb.png"; ?>" alt="Logo Web" id="logoWeb"></a>
        <a href="admin_home.html"><img src="<?php echo base_url() . "/img/logoEmpresa.jpg"; ?>" alt="Logo Empresa" id="logoEmpresa"></a>
      </div>          
    </div>
    <!-- Sub-cabecera -->
    <div class="subcabecera">

