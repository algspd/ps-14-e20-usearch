<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

  public function index() {
    $this->load->model('microsmodel','',TRUE);
    $this->load->view('test');
    echo $this->microsmodel->insertar('a1234','arc1234','100Mhz','1MB','1kb');

    //$fila=$this->microsmodel->listar_uno('a12345');
    //echo ($fila->ref . "," . $fila->arch . "," . $fila->freq . "," . $fila->flash . "," . $fila->ram);

    //$this->microsmodel->modificar('a12345','arc1234','100Mhz','1MB','1kb-modificado');
    //$this->microsmodel->eliminar('a1234');
  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
