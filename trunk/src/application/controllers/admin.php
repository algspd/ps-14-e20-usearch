<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class admin extends CI_Controller {

  /**
   * Controlador principal, el que se carga al Index Page for this controller.
   */
  public function index() {
    $this->load->library('cart');
    $this->load->helper('url');       
    $this->load->helper('html');     
    $data = array(
	  'items'           => $this->cart->total_items(),
	  'campo_busqueda'  => 'arquitectura',
	  'string_busqueda' => ''
	);	
    $this->load->view('adminhead',$data);
    $this->load->view('adminhome');
    $this->load->view('foot');
  }
}

