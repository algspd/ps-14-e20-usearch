<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {

  public function index() {

    $this->load->helper('url');
    $this->load->helper('html');

      $this->load->view('adminhead');
      $this->load->view('adminhome');
      $this->load->view('foot');
    }

}
