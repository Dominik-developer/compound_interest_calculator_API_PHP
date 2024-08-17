<?php
/* API for calculator */

header("Content-Type: application/json");

function calculateCompoundInterest($principal, $rate, $time) {
    $result = [];

    //principal = kwota
    for ($year =1; $year <= $time; $year++) {
        $amount = $principal * pow((1+$rate/100), $year); 
        $result = array("year" => $year, "amount" => round($amount, 2)); 
    }

    return $result;
}
    $principal = $_GET["principal"] ?? 0; 
    $rate = $_GET["rate"] ?? 0;
    $time = $_GET["time"] ?? 0;

    echo json_encode(calculateCompoundInterest($principal, $rate, $time));
