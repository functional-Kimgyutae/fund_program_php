<?php


namespace Gyu\App;

class DB
{
    public $con = null;
    public function __construct()
    {
        $host = "localhost";
        $dbname = "skills";
        $charset = "utf8mb4";
        $user = "root";
        $pass = "";
        $conStr = "mysql:host={$host};dbname={$dbname};charset={$charset}";
        $this->con = new \PDO($conStr,$user,$pass);
    }

    public function fetch($sql,$data=[])
    {
        $p = $this->con->prepare($sql);
        $p->execute($data);
        return $p->fetch(\PDO::FETCH_OBJ);
    }

    public function fetchAll($sql,$data=[])
    {
        $p = $this->con->prepare($sql);
        $p->execute($data);
        return $p->fetchAll(\PDO::FETCH_OBJ);
    }

    public function execute($sql,$data=[])
    {
        $p = $this->con->prepare($sql);
        return $p->execute($data);
    }
}

