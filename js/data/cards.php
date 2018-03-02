<?php
	// header export
	header("Content-type: application/x-javascript");

	// cards data
	echo "Cards = [";
	echo 	cards_listup();
	echo "]\n";

	
	// -------------------------
	// function
	function cards_listup() {
		$output = "";
		$dir = "cards/";
		$handle = opendir( $dir );
		while( ($file = readdir($handle)) !== false ) {
			if( filetype( $path = ($dir . $file) ) == "file" ) {
				$card = file_get_contents($path);
				$output = $output.$card.",";
			}
		}
		$output = rtrim($output, ',');
		return $output;
	}
	
	
	
?>