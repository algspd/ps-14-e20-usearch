<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

  /**
   * Controlador principal, el que se carga al Index Page for this controller.
   */
  public function index() {
    $this->load->library('cart');
    $this->load->helper('url');       
    $this->load->helper('html');       
    $items = $this->cart->total_items();
    $data = array('items' => $items);
    $this->load->view('adminhead',$data);
    $this->load->view('adminhome');
    $this->load->view('foot');
  }
}

