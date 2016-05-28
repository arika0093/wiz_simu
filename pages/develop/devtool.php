<?php 
    //---------------------
    //   共有リソース
    //---------------------
    function makehead($title){
    echo "
    <html>
        <head>
            <title>Wiztools Devtool [".$title."]</title>
            <style>
                .content_c{
                    white-space: pre;
                    background-color:lightgray;
                    display:none;
                }
                .title1{
                    border-left:2px solid black;
                    border-bottom:1px solid black;
                    paggind-left:5px;
                    margin-top:5px;
                    font-weight:bold;
                    padding-left:2px;
                    font-size:120%;
                }
                .title2{
                    display-style:inline;
                    font-weight:bold;
                    margin-top:5px;
                    margin-left:25px;
                }
                .desc1{
                    margin-left:25px;
                    font-size:80%;
                }
                .desc2{
                    margin-left:50px;
                    font-size:80%;
                }
            </style>
            <script>
                function content_open(a){
                    childs=(a.parentNode).childNodes;
                    if(a.value=='開く'){
                        a.value='閉じる';
                        for(n=0;n<childs.length;n++){
                            if(childs[n].className=='content_c'){
                                childs[n].style.display='block';
                            }
                        }
                    }else{
                        a.value='開く';
                        for(n=0;n<childs.length;n++){
                            if(childs[n].className=='content_c'){
                                childs[n].style.display='none';
                            }
                        }
                    }
                    
                }
            </script>
        </head>
        <body>
            <h1><a href=devtool.php>Dev/".$title."</a></h1>
    ";
    }
    function makefoot(){
    echo "
        </body>
    </html>
    ";
    }
?>
<?php 
    //---------------------
    //   内容生成
    //---------------------
    switch(@$_GET["f"]){
        case "skill_enemy":
        case "skill_ans":
        case "skill_awake":
            //データ読み込み
            $result=file_get_contents("../../js/data/".$_GET["f"].".js");
            $result=preg_replace('/[\n\r]{3,}/',"\n",$result);
            //説明2（関数）の開始と終了
            $result=preg_replace('/^(function.*\n)/m',"<div class=desc2>$1<input value='開く' type=button onclick=content_open(this)>\n<span class=content_c>",$result);
            $result=preg_replace('/^(}.*$)/m',"$1</span>\n</div>",$result);
            //タイトル1
            $result=preg_replace('/[\/]{2} ---.*?\n([\/]{2}(.*?\n))*?[\/]{2} ---.*?\n/',"<div class=title1>$2</div>\n",$result);
            //タイトル2
            $result=preg_replace('/<\/div>(.*?)\/\/(.*?)\n/s',"</div>$1\n<div class=title2>$2</div>",$result);
            //タイトル2と説明の2の間は説明1
            $result=preg_replace('/class=title2>(.*?)<\/div>(.*?)<div class=desc2>/s',"class=title2>$1</div><div class=desc1>$2</div><div class=desc2>",$result);
            $result=preg_replace('/[\/]{2} (.*)/',"$1<br>",$result);
            $result=preg_replace('/<br>[ \n\r]<\/div>/',"</div>",$result);
            break;
        case "skill_spe":
            //データ読み込み
            $result=file_get_contents("../../js/data/skill_spe.js");
            //functionを非表示にするdivを定義し、ボタン生成
            $result=preg_replace('/^(function.*\n)/m',"<div class=desc2>$1<input value='開く' type=button onclick=content_open(this)>\n<span class=content_c>",$result);
            //divを閉じる
            $result=preg_replace('/^(}.*$)/m',"$1"."</span>\n</div>",$result);
            //余分な改行を削除
            $result=preg_replace('/[\n\r]{3,}/',"\n",$result);
            //大見出しの定義
            $result=preg_replace("/\/\/ \-{3,}(.*?)\n\/\/ (.*?)\n/","<div class=title1>$2</div>\n",$result);
            //小見出しの定義
            $result=preg_replace("/\/[\*]{1,}(.*?)[\*]{1,}\//s","<div class=desc1>$1</div>",$result);
            //小見出しの中のレイアウト設定1
            $result=preg_replace("/^\ \*\ /m","<br>",$result);
            //小見出しの中のレイアウト設定2
            $result=preg_replace("/class=desc1>.*?<br>(.*?)\n<br>/s","class=title2>$1</div>\n<div class=desc1>\n",$result);
            break;
        default:
            $result="";
            $result=$result.makelink("skill_enemy")."<br>";
            $result=$result.makelink("skill_spe")."<br>";
            $result=$result.makelink("skill_awake")."<br>";
            $result=$result.makelink("skill_ans")."<br>";
            break;
    }
?>

<?php 
    //---------------------
    //   表示
    //---------------------
    makehead(@$_GET["f"]);
    $result=makenavi($result);
    echo($result);
    makefoot();
?>

<?php
    //---------------------
    //   関数定義
    //---------------------
    function makelink($str){
        // トップ用にリンク作る
        return "<a href=devtool.php?f=".$str.">".$str."</a>";
    }
    function makenavi($str){
        // 各ページtitle1へのリンクを作る
        $str=preg_replace_callback("/(?<=title1\>).*?(?=\<\/div)/s", function($e){return "<a name=".crc32($e[0]).">".$e[0]."</a><a href=#>▲</a>";}, $str);
        preg_match_all("/\<a name\=.*?\<\/a\>/s", $str, $links);
        foreach($links[0] as $k => $v){
            print "<li>".str_replace("name=","href=#",$v)."</li>";
        }
        print "<br>";
        return $str;
    }
?>