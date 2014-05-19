<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Buscar extends CI_Controller {

  public function index() {	 
      $this->load->library('cart');
      $this->load->helper('url');
      $this->load->helper('html');

      $this->load->model('microsmodel','',TRUE);
	   
      if (!empty($_POST['busqueda'])){	
	      $resultado = $this->microsmodel->buscar($_POST['campo'],$_POST['busqueda']);
	      $items = $this->cart->total_items();
	      $data = array('resultado'=> $resultado,'items' => $items);
	      $this->load->view('head',$data);
	      $this->load->view('listar_todo',$data);
	      $this->load->view('foot');
      }
	  else {
		  redirect("listar_todo");
  	  }
  }
}