<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function menu(Request $request)
    {
        $menus = [
            [
                'url' => "/home",
                'icone' => "mdi-home-outline",
                'titulo' => 'Início',
            ]
        ];
        
        $submenus = [];
        array_push($submenus, [
            'url' => "/avaliadores-chave",
            'icone' => "mdi-account-star-outline",
            'titulo' => 'Avaliadores Chave',
        ]);

        array_push($menus, [
            'icone' => 'mdi-cog-outline',
            'url' => null,
            'titulo' => 'Configurações',
            'items' => $submenus
        ]);

        return $menus;
    }
}
