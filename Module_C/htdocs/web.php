<?php

use Gyu\App\Route;

if(__SESSION){
    Route::get("/enrollment","MainController@enrollment");
    Route::post("/enrollment","MainController@enrollmentPro");
    Route::post("/buy","MainController@buy");    
    if($_SESSION['user']->email == "admin") {
        Route::get("/admin","UserController@admin"); 
    }
    Route::get("/logout","UserController@logout");
    Route::get("/fundList","MainController@fundList");
}else {
    Route::get("/login","UserController@login");
    Route::post("/login","UserController@loginPro");
    Route::get("/register","UserController@register");
    Route::post("/register","UserController@registerPro");
    Route::get("/fundList","MainController@fund");
}


Route::get("/","MainController@Main");
Route::get("/invList","MainController@invList");
Route::get("/user","UserController@user"); 




