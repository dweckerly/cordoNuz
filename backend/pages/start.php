<?php
include_once("db.php");
$uid = $_POST['id'];
$plt = $_POST['plat'];
// on mobile device
if($uid != "") {
    $stmt = $db->query("SELECT * FROM users WHERE device_id = '$uid' AND platform");
    if($stmt->rowCount() > 0) {
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $pid = $data['player_id'];
        $games = $db->query("SELECT * FROM games WHERE player_id = '$pid'");
        echo json_encode($games->fetchAll(PDO::FETCH_ASSOC)); 
    }
}
