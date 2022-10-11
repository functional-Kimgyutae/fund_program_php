<?php

namespace Gyu\App;

class Route
{
    public static $actions = [];
    public static function __callStatic($name, $args)
    {
        $req = strtolower($_SERVER['REQUEST_METHOD']);
        if($name == $req)
        {
            self::$actions [] = $args;
        }
    }

    public static function init()
    {
        $path = explode("?",$_SERVER['REQUEST_URI']);
        $path = $path[0];
        foreach (self::$actions as $a) {
            if($a[0] == $path){
                $action = explode("@", $a[1]);
                $controllerName = "Gyu\\Controller\\" . $action[0];
                $c= new $controllerName();
                $c->{$action[1]}();
                return;
            }
        }
        echo "없는 페이지이거나 권한이 없습니다.";
    }
}