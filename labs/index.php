<head>
	<title>Labs - WizTools</title>
	<meta charset=utf-8>
	<!--@NoDisp@-->
</head>
<h1>WizTools Labs</h1>
WizToolsに関する色々な開発中＆開発者向けコンテンツ
<table border=1>
<tr><td><b>コンテンツ</b></td><td><b>詳細</b></td></tr>
<?php
	$mydir=getcwd ( );

	if ($handle = opendir($mydir)) {
		while (false !== ($file = readdir($handle))) {
			if($file!="." && $file!=".." && (strpos($file, 'html') || strpos($file, 'php'))){
				$source=file_get_contents($mydir."/".$file);
				if(strpos($source, '@NoDisp@') == false){
					preg_match('/title>.*?</', $source, $matches);
					if(count($matches)!=0){
						$title=$matches[0];
						$title=str_replace("title>", "", $title);
						$title=str_replace(" - WizTools", "", $title);
						$title=str_replace("<", "", $title);
					}else{
						$title=$file;
					}

					preg_match('/@Detail@.*?@/', $source, $matches);
					if(count($matches)!=0){
						$detail=$matches[0];
						$detail=str_replace("@Detail@", "", $detail);
						$detail=str_replace("@", "", $detail);
					}else{
						$detail="";
					}
					echo "<tr><td><a href=$file>$title</a></td><td>$detail</td></tr>";
				}
			}
		}
		closedir($handle);
	}

?> 
</table>


