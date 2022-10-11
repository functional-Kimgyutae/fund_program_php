<?php

namespace Gyu\App;

use Gyu\App\DB;

class autoMaker 
{
    public static function init()
    {
        $db = new DB();
        $sql = "SELECT * FROM `user` WHERE email = ?";
        $result = $db->fetch($sql,["admin"]);
        if($result) {
            exit();
        }
        $sql = "INSERT INTO `user`(`email`, `name`, `password`, `pay`) VALUES (?,?,PASSWORD(?),0)";
        $result = $db->execute($sql,["admin","관리자","1234"]);
    }

}



