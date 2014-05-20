<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Listar_todo_editar extends CI_Controller {

  public function index() {
    $this->load->library('cart');
    $this->load->helper('url');
    $this->load->helper('html');

    $this->load->model('microsmodel','',TRUE);

    if ( isset($_POST['ref'])){
      $elemento=array(
        'id'    => $_POST['ref'],
        'qty'   => 1,
        'price' => $_POST['precio'],
        'name'  => $_POST['ref']);
      $this->cart->insert($elemento);
    }
    $data = array(
	  'resultado'       => $this->microsmodel->listar_todo(),
	  'items'           => $this->cart->total_items(),
	  'campo_busqueda'  => 'arquitectura',
	  'string_busqueda' => ''
	);
    $this->load->view('adminhead',$data);
    $this->load->view('listar_todo_editar',$data);
    $this->load->view('foot');
  }
}

