<?php
    //ランダム文字列生成
    function makeRandStr($length) {
        $str = array_merge(range('a', 'z'), range('0', '9'), range('A', 'Z'));
        $r_str = null;
        for ($i = 0; $i < $length; $i++) {
            $r_str .= $str[rand(0, count($str) - 1)];
        }
        return $r_str;
    }

    // ファイル処理
    // 複数ファイルのアップロード対応
    $conftext="";
    $id=makeRandStr(7);
    mkdir("io/".$id,0777);
    chmod("io/".$id,0777);
    mkdir("io/".$id."/inputImg/",0777);
    chmod("io/".$id."/inputImg/",0777);
    foreach ($_FILES["file"]["error"] as $key => $value) {
        // アップロード成功した際の処理
        if ($value == UPLOAD_ERR_OK) {
            // ファイル名
            $file_name = $_FILES["file"]["name"][$key];
            // ファイルタイプ（MIME）
            $file_type = $_FILES["file"]["type"][$key];
            // ファイルサイズ（byte）
            $file_size = $_FILES["file"]["size"][$key];
            // 一時的に保存された場所へのパス
            $file_temp = $_FILES["file"]["tmp_name"][$key];
            
            // 保存するファイル名 ( 今回はオリジナルのファイル名の前に upload を付加 )
            $file = "io/".$id."/inputImg/".$file_name;
            $conftext = $conftext.$file_name."\n";
            
            if (($result = move_uploaded_file($file_temp, $file)) === true) {
    //            echo "Upload Success.<br>";
            } else {
  //              echo "Upload Failed.<br>";
            }
        }
    }
    file_put_contents("io/".$id."/inputImg/imgList.info", $conftext);
    // "<br>Upload complete. ID is\"".$id."\".<br><br>";

    // "Analyze process starting..<br>";
    $command = 'nohup setarch `uname -m` -R ./sImgReader.out /b "'.$id.'" > /dev/null 2>&1 &';
//echo $command;
    system($command);
    
    // "Redirect result page..<br>";
    $url="result.shtml?id=".$id;
    //echo $url;
    header("Location: ".$url);
    //redirect



?>