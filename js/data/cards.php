<?php
	$output = "";
	// file open function
	function dir_open($loaddir){
		global $output;
		if( is_dir( $loaddir ) && $handle = opendir( $loaddir ) ) {
			while( ($file = readdir($handle)) !== false ) {
				if( filetype( $path = $loaddir . $file ) == "file" ) {
					$output = $output.file_get_contents($path);
					$output = $output.",";
				}
			}
		}
	}



	// header export
	header("Content-type: application/x-javascript");

	// first
	$output = $output."Cards = [";
	
	// load and output
	$fstdir = "cards/";
	dir_open($fstdir);
	
	// end
	$output = $output."]";
	echo $output;
?>