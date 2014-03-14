<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Editar extends CI_Controller {

  public function index() {

    $this->load->helper('url');
    $this->load->helper('html');

    if ( isset($_POST['ref'])) {
      $this->load->model('microsmodel','',TRUE);
      $def=$this->microsmodel->listar_uno($_POST['ref']);
      $data = array('def'=> $def);
      $this->load->view('editar',$data);
    }
    else{
      echo "Argumentos no correctos";
    }

  }
}
