<?php
	$orderPath = "quests/#order.js";
	$output = "";
	// file open function
	function dir_open($loaddir){
		global $output, $orderPath;
		if( is_dir( $loaddir ) && $handle = opendir( $loaddir ) ) {
			while( ($file = readdir($handle)) !== false ) {
				if( strpos($file, "#") !== false){ continue; }
				if( filetype( $path = $loaddir . $file ) == "file" ) {
					$output = $output.file_get_contents($path);
					$output = $output.",";
				} else if(strpos($file, ".") === false){
					dir_open($loaddir.$file."/");
				}
			}
		}
	}



	// header export
	header("Content-type: application/x-javascript");

	// first
	$output = $output."Quests = [";
	
	// load and output
	$fstdir = "quests/";
	dir_open($fstdir);
	
	// end
	$output = $output."]";
	
	//order
	$output = $output."\n".file_get_contents($orderPath);
	
	echo $output;
?>