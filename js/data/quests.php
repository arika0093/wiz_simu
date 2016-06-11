<?php

	//------------
	// config
	//------------
	$orderPath = "quests/##order.js";
	$questsPath = "quests/";

	//------------
	// main
	//------------
	// header export
	header("Content-type: application/x-javascript");

	// main
	echo "Quests = [";
	echo dir_open($questsPath);
	echo "]";
	
	//order
	echo "\n\n".file_get_contents($orderPath);
	
	//------------
	// functions
	//------------
	// file open function
	function dir_open($loaddir){
		static $output = "";
		if( is_dir( $loaddir ) && $handle = opendir( $loaddir ) ) {
			while( ($file = readdir($handle)) !== false ) {
				if(strpos($file, "##") !== false){continue;}
				if( filetype( $path = $loaddir . $file ) == "file" ) {
					$oneQuest = file_get_contents($path);
					if(strlen(preg_replace('/\s/s', "", $oneQuest)) != 0){
						$oneQuest = $oneQuest . ",";
						if(strpos($loaddir . $file, "#") !== false){
							$oneQuest = addProperty("hidden:true,", $oneQuest);
						}
						$output = $output . $oneQuest;
					}
				} else if(strpos($file, ".") === false){
					dir_open($loaddir.$file."/");
				}
			}
		}
		return $output;
	}

	function addProperty($property, $mystring){
		$string2 =  preg_replace('/^(.*)(data\:\ \[)/m', "$1".$property."\n$1$2", $mystring);
		return $string2;
	}
	function getDirectoryName($fullpath){
		preg_match_all('/.*?\//', $fullpath, $pathArray);
		$latestpath = $pathArray[0][count($pathArray[0])-1];
		$directoryName = preg_replace('/\/.*/', "", $latestpath);
		return $directoryName;
	}
?>