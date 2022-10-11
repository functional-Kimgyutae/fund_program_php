<?php

namespace Gyu\Controller;

use Gyu\App\DB;
use Gyu\Lib\Lib;

class MainController extends MasterController 
{
    public function Main() 
    {
        $db = new DB();
        $sql = "SELECT * FROM `fund` WHERE isDone = 0";
        $result = $db->fetchAll($sql,[]);
        $sql = "SELECT * FROM `inv`";
        $results = $db->fetchAll($sql,[]);
        $this->render("Main",['fundList'=>$result,'invList'=>$results]);
    }

    public function enrollment()
    {
        $this->render("enrollment");
    }

    public function enrollmentPro()
    {
        extract($_POST);

        $owner = $_SESSION['user']->email;
        $endDate = $date . " " . $hour;
        $total = str_replace(",","",$pay);
        $total = $total * 1;
        $db = new DB();

        $sql = "SELECT * FROM `fund` WHERE number = ?";
        $result = $db->fetch($sql,[$number]);
        if($result) {
            Lib::back("새로고침후 다시 시도해주세요.");
            exit();
        }

        $sql = "INSERT INTO `fund`(`number`, `name`, `endDate`, `total`, `current`, `owner`, `isDone`) VALUES (?,?,?,?,0,?,0)";
        $result = $db->execute($sql,[$number,$name,$endDate,$total,$owner]);
        if($result) {
            Lib::go("펀드가 등록되었습니다.","/");
        }else {
            Lib::back("데이터베이스 오류 발생.");
        }
    }
    public function buy()
    {
        extract($_POST);
        $total = str_replace(",","",$pay);
        $total = $total * 1;
        $owner = $_SESSION['user']->email;
        $db = new DB();
        $sql = "SELECT * FROM `user` WHERE email = ?";
        $re = $db->fetch($sql,[$owner]);
        $re->pay -= $total;

        $sql = "UPDATE `user` SET `pay`= ? WHERE email = ?";
        $result = $db->execute($sql,[$re->pay,$owner]);
        $_SESSION['user'] = $re;

        $sql = "SELECT * FROM `fund` WHERE number = ?";
        $res = $db->fetch($sql,[$number]);
        $res->current += $total;
    
        $sql = "UPDATE `fund` SET `current`= ? WHERE number = ?";
        $result = $db->execute($sql,[$res->current,$number]);
        //////
        $sql = "INSERT INTO `inv`(`idx`, `email`, `pay`, `total`, `datetime`, `name`, `fundName`, `number`) VALUES (NULL, ?,?,?,NOW(),?,?,?)";
        $result = $db->execute($sql,[$owner,$total,$res->total,$name,$fundName,$number]);
        if($result) {
            Lib::go("투자되었습니다.","/fundList");
        }else {
            Lib::back("데이터베이스 오류 발생.");
        }


    }
    public function fund()
    {
        $db = new DB();
        $sql = "SELECT * FROM `fund` WHERE isDone = 0";
        $result = $db->fetchAll($sql,[]);
        $sql = "SELECT * FROM `inv`";
        $results = $db->fetchAll($sql,[]);
        $this->render("fund",['fundList'=>$result,'invList'=>$results]);
    }
    public function fundList()
    {
        $db = new DB();
        $sql = "SELECT * FROM `fund` WHERE isDone = 0";
        $result = $db->fetchAll($sql,[]);
        $sql = "SELECT * FROM `inv`";
        $results = $db->fetchAll($sql,[]);
        $this->render("fundList",['fundList'=>$result,'invList'=>$results]);
    }
    public function invList()
    {
        $db = new DB();
        $sql = "SELECT * FROM `fund` WHERE isDone = 0";
        $result = $db->fetchAll($sql,[]);
        $sql = "SELECT * FROM `inv`";
        $results = $db->fetchAll($sql,[]);
        $this->render("invList",['fundList'=>$result,'invList'=>$results]);
    }

}






        // <!-- <?php
    // $fundist = [];
// 
 //<script>
    // let json = JSON.parse(<?= json_encode($fundist) );
// </script>