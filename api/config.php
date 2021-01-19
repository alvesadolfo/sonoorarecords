<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

if(!session_id()) {
    session_start();
}

$ip_server = "sonoora.postgresql.dbaas.com.br";
$user_server = "sonoora";
$pass_server = "s0n00r4";
$db_name = "sonoora";

$conexao = pg_connect("host=".$ip_server." dbname=".$db_name." user=".$user_server." password=".$pass_server) 
        or die ("Falha na conexao com o Banco de Dados!");
?>