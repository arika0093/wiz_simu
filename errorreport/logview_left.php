<head>
	<script>
		function rmlog(filename){
			pass = window.prompt("削除用パスワードを入力してください：", "");
			var datas = {
				'filename' : filename,
				'password' : pass
			};
		    var xhr = new XMLHttpRequest();
		    xhr.open('POST', '/errorreport/rmlog.php');
		    xhr.setRequestHeader('Content-Type', 'applicatoin/json;charset=UTF-8');
		    xhr.send(JSON.stringify(datas));
		}
	</script>
</head>

	<?php
		$dir="logfiles";
		$files = scandir($dir);
		$result="<center><input type=button value=メニュー更新 onclick=location.reload()><br><br><table border=1><tr><td>閲覧</td><td>削除</td></tr>";
	 	foreach ($files as $tkey => $tmp){
			if(mb_strlen($tmp)>2){
				$result = $result ."<tr><td>";
				$result = $result ."<a href=logfiles/" .$tmp ." target='content'>" .$tmp . "</a><br>";
				$result = $result ."</td><td><a href=# onclick=rmlog('".$tmp."')>●</a></td></tr>";
			}
		}
		$result=$result ."</table>";
		echo $result
	?>

</body>