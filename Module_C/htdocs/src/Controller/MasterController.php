<?php

namespace Gyu\Controller;

class MasterController
{
    public function render($view,$data = [])
    {
        extract($data);
        require_once __VIEW . "/layout/header.php";
        require_once __VIEW . "/{$view}.php";
        require_once __VIEW . "/layout/footer.php";
    }
}