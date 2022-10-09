<?php

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '33657420982012'
$dbName = 'form-teste'

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

if($conexao -> connect_errno)
{
    echo "Erro";
}
else {
    echo "Conexão efetuada com sucesso"

?>