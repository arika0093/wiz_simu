<?php
	$json_string = file_get_contents('php://input');
 	$datas=json_decode($json_string);
	if(md5($datas->{"password"})=="2080cae8de6c0058351c34ddac499f5c"){
		unlink('logfiles/' .$datas->{"filename"});
		echo "消しました。";
	}else{
		echo "passが違います。";
	}
?>



