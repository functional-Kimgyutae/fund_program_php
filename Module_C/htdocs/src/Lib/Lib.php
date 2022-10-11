<?php

namespace Gyu\Lib;


class Lib
{
    public static function back($msg)
    {
        echo "<script>";
        echo "alert('$msg');";
        echo "history.back();";
        echo "</script>";
    }

    public static function go($msg,$url)
    {
        echo "<script>";
        echo "alert('$msg');";
        echo "location.href = '$url';";
        echo "</script>";
    }
}
