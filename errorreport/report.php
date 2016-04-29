<?php
	$file='logfiles/' . date("YmdHis") . '.txt';
	$json_string = file_get_contents('php://input');
 	var_dump(json_decode($json_string));
	$out=ob_get_contents();
	ob_end_clean();
	file_put_contents($file,$out,FILE_APPEND);
?>