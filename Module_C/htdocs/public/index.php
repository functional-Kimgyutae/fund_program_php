<?php

date_default_timezone_set("Asia/Seoul");

session_start();

define("__ROOT" , dirname(__DIR__));
define("__SRC", __ROOT . "/src");
define("__VIEW", __SRC . "/View");
define("__SESSION", isset($_SESSION['user']));

require_once __ROOT . "/autoload.php";
require_once __ROOT . "/web.php";

Gyu\App\Route::init();
Gyu\App\autoMaker::init();