<?php

	//------------
	// config
	//------------
	$orderPath = "quests/#order.js";
	$categoryJpPath = "quests/#category_jp.js";
	$questsPath = "quests/";

	//------------
	// grobal args
	//------------
	//$categoryJps = getCategoryJps();

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
	echo "\n\n".file_get_contents($categoryJpPath);
	echo "\n\n".file_get_contents($orderPath);
	
	//------------
	// functions
	//------------
	// file open function
	function dir_open($loaddir){
		static $output = "";
		if( is_dir( $loaddir ) && $handle = opendir( $loaddir ) ) {
			while( ($file = readdir($handle)) !== false ) {
				if(strpos($file, "#") !== false){continue;}
				if( filetype( $path = $loaddir . $file ) == "file" ) {
					$oneQuest = file_get_contents($path);
					if(strlen(preg_replace('/\s/s', "", $oneQuest)) != 0){
						$oneQuest = $oneQuest . ",";
//						if(strpos($loaddir . $file, "#") !== false){
//							$oneQuest = setProperty("hidden","true", $oneQuest);
//						}
						$category = getDirectoryName($loaddir);
						$oneQuest = setProperty("category", "\"" . $category . "\"", $oneQuest);
//						$category_jp = getCategoryJp($category);
//						$oneQuest = setProperty("category_jp", "\"" . $category_jp . "\"", $oneQuest);
						
						$output = $output . $oneQuest;
					}
				} else if(strpos($file, ".") === false){
					dir_open($loaddir.$file."/");
				}
			}
		}
		return $output;
	}

	// $propertyのプロパティ名があれば上書き、なければ追加
	function setProperty($propertyName, $propertyValue, $mystring){
		$putstr = $propertyName . ": " . $propertyValue . ",";
		if(preg_match("/$propertyName.*,/", $mystring)){
			$string2 = preg_replace("/$propertyName\:.*,/", $putstr, $mystring);
		}else{
			$string2 = preg_replace('/^(.*)(data)/m', "$1" . $putstr . "\n$1$2", $mystring);
		}
		return $string2;
	}

	// $fullpathに含まれる最後のフォルダの名前を返す
	function getDirectoryName($fullpath){
		preg_match_all('/.*?\//', $fullpath, $pathArray);
		$latestpath = $pathArray[0][count($pathArray[0])-1];
		$directoryName = preg_replace('/\/.*/', "", $latestpath);
		$directoryName = str_replace("#", "", $directoryName);
		return $directoryName;
	}

	// php起動時にカテゴリ名の日本語対応一覧を取得する
	function getCategoryJps(){
		$categoryJpJson = file_get_contents("quests/#category_jp.js");
		$categoryJpJson = preg_replace("/^.*\{/s", "{", $categoryJpJson);
		$categoryJpJson = preg_replace("/,\s*\}.*/s", "}", $categoryJpJson);
		$categoryJps = json_decode($categoryJpJson, true);
		return $categoryJps;
	}

	// カテゴリ名が一覧に載っていれば日本語を返し、なければそのまま返す
	function getCategoryJp($key){
		global $categoryJps;
		if(array_key_exists($key, $categoryJps)){
			return $categoryJps[$key].jp;
		} else {
			return $key;
		}
	}
?>