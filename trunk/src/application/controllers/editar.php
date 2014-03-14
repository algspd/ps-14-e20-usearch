<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Listar_todo extends CI_Controller {

  public function index() {

    $this->load->helper('url');
    $this->load->helper('html');

    $this->load->model('microsmodel','',TRUE);
    $def=$this->microsmodel->listar_uno("ATmega8");

    $data = array('def'=> $def);
    $this->load->view('editar',$data);

  }
}
