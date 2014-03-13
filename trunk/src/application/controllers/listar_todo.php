<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Listar_todo extends CI_Controller {

  public function index() {

    $this->load->helper('url');
    $this->load->helper('html');

    $this->load->model('microsmodel','',TRUE);
    $resultado=$this->microsmodel->listar_todo();

    $data = array('resultado'=> $resultado);
    $this->load->view('listar_todo',$data);

  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
