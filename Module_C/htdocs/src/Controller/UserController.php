<?php

namespace Gyu\Controller;

use Gyu\App\DB;
use Gyu\Lib\Lib;

class UserController extends MasterController 
{
    public function admin() 
    {
        $db = new DB();
        $sql = "SELECT * FROM `fund` WHERE isDone = 0";
        $result = $db->fetchAll($sql,[]);
        $sql = "SELECT * FROM `inv`";
        $results = $db->fetchAll($sql,[]);
        $this->render("admin",['fundList'=>$result,'invList'=>$results]);
    }

    public function user() {
        $this->render("user");
    }
    public function login() 
    {
        $this->render("login");
    }
    public function loginPro() 
    {
        extract($_POST);
        $db = new DB();
        $sql = "SELECT * FROM `user` WHERE email = ? AND password = PASSWORD(?)";
        $result = $db->fetch($sql,[$email,$password]);
        if($result) {
            $_SESSION['user'] = $result;
            Lib::go("로그인되었습니다.","/");
        }else {
            Lib::back("아이디또는 비밀번호가 틀렸습니다.");
        }
    }
    public function register() 
    {
        $this->render("register");
    }
    public function registerPro() 
    {
        extract($_POST);
        $db = new DB();
        $sql = "SELECT * FROM `user` WHERE email = ?";
        $result = $db->fetch($sql,[$email]);
        if($result) {
            Lib::back("이미 있는 id입니다.");
            exit();
        }

        $sql = "INSERT INTO `user`(`email`, `name`, `password`, `pay`) VALUES (?,?,PASSWORD(?),50000)";
        $result = $db->execute($sql,[$email,$name,$password]);
        if($result) {
            Lib::go("회원가입되었습니다.","/login");
        }else {
            Lib::back("데이터베이스 오류 발생.");
        }
    }

    public function logout() 
    {
        unset($_SESSION['user']);
        Lib::go("로그아웃되었습니다.","/");
    }




}






        // <!-- <?php
    // $fundist = [];
// 
 //<script>
    // let json = JSON.parse(<?= json_encode($fundist) );
// </script>