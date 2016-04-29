<html>
<head>
	<script>
		function rmlog(filename){
			pass = window.prompt("削除用パスワードを入力してください：", "");
			var datas = {
				'filename' : filename,
				'password' : pass
			};
			$.ajax({
				type: "POST",
				contentType: "application/json;charset=UTF-8",
				url: "/errorreport/rmlog.php",
				data: "JSON.stringify(datas)",
			});
		}
	</script>
</head>
<body>
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
	<!-- Use JQuery -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
</body>
</html>