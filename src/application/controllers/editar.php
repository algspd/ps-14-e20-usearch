<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Editar extends CI_Controller {

  public function index() {

    $this->load->helper('url');
    $this->load->helper('html');
    $this->load->model('microsmodel','',TRUE);

    if (isset($_POST['ref']) && isset($_POST['arch']) &&
        isset($_POST['freq']) && isset($_POST['flash']) &&
        isset($_POST['ram']) && isset($_POST['precio']) ){
      // Se ha enviado un micro completo para ser modificado
      $this->microsmodel->modificar(
        $_POST['ref'],$_POST['arch'],
        $_POST['freq'],$_POST['flash'],
        $_POST['ram'],$_POST['precio']);
      echo "Micro modificado\n";
      return;
    }

    if (isset($_POST['ref'])) {
      // Se ha enviado solo la referencia, procedemos a hacer la modificación
      $def=$this->microsmodel->listar_uno($_POST['ref']);
      $data = array('def'=> $def);
      $this->load->view('editar',$data);
    }
    if (! isset($_POST['ref'])) {
      // No hay datos en el post, cargamos la lista para que el usuario elija qué editar
      $resultado=$this->microsmodel->listar_todo();
      $data = array('resultado'=> $resultado);
      $this->load->view('listar_todo_editar',$data);
    }

  }
}
