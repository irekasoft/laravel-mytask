<?php

Route::get('/', [

    'as' => 'home',
    'uses' => 'PagesController@home'

]);

Route::resource('tasks', 'TasksController');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

