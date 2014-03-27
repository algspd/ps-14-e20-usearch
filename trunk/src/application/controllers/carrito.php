<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Carrito extends CI_Controller {

  public function index() {
    $this->load->helper('url');       
    $this->load->helper('html');       
    $this->load->view('head');
    $this->load->view('carrito');
    $this->load->view('foot');
  }
}

