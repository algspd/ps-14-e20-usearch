<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Buscar extends CI_Controller {

  public function index() {	  
      if (!empty($_POST['busqueda'])){	
		  echo "BUSQUEDA: '" . $_POST['busqueda'] . "'" . PHP_EOL;
      }
	  else {
		  forward(base_url());
  	  }
  }
}