<?php

function myLoader($className)
{
    $perfix = "Gyu\\";
    $prelen = strlen($perfix);
    if(strncmp($className,$perfix,$prelen) == 0){
        $realName = substr($className,$prelen);
        $realName = str_replace("\\","/",$realName);
        require_once __SRC . "/{$realName}.php";
    }
}

spl_autoload_register("myLoader");
