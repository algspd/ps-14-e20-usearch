<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

  /**
   * Controlador principal, el que se carga al Index Page for this controller.
   */
  public function index() {
    $this->load->helper('url');       
    $this->load->helper('html');       
    $this->load->view('main_view');
  }
}

