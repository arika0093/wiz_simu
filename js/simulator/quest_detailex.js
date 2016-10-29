// 読み込み時に実行
$(function () {
	// get query
	var id = location.search.indexOf("?id=") == 0 ?			location.search.substr(4) : null;
	var genre = location.search.indexOf("?genre=") == 0 ?	location.search.substr(7) : null;
	var tag = location.search.indexOf("?tag=") == 0 ?		location.search.substr(5) : null;

	if (genre) {
		makeList(genre, "/simulator/quest/?id=");
	}else{
		makeList2();
	}
});

function makeList2(){
	var ctList=[];
	var ctListJp=[];
	Quests.forEach(function(Quest){
		if(ctList.indexOf(Quest.category)==-1){
			ctList.push(Quest.category)
			ctListJp.push(Quest.category_jp)
		}
	})
	outp="";
	ctList.forEach(function(ct, ctn){
		outp+="<a href=?genre="+ct+">"+ctListJp[ctn]+"</a><Br>"
	})
	var rst_html = "<dt>出現精霊一覧</dt><dd class='left_min' id='category_view'>"+outp+"</dd>";
	
	if (ctList.length > 0) {
		$("#result").html(rst_html);
	}
}
// クエスト一覧を表示
function makeList(genre, url) {
	// match and generate html
	var enms="";
	var enmobjs=[];
	var rst_html = "<dt>" + getCategoryJp(genre) + "の精霊出現箇所一覧</dt><dd class='left_min' id='category_view'>";
	var rst = $.grep(Quests, function (Quest, QuestNum) {
		// match check
		if (genre && Quest.category != genre) {
			return false;
		}
		Quest.data.forEach(function(qd){
			qd.enemy.forEach(function(myen){
				myen.locate=Quest.name
				enmobjs.push(myen)
			})
		})
		return true;
	});
	console.log(enmobjs)


	var trueOrder={};
	var imgNoList=[];
	enmobjs.forEach(function(enm){
		var imgNo=enm.imageno
		if(imgNoList.indexOf(imgNo)==-1){
			trueOrder[imgNo]={name:enm.name, locate:[]}
			imgNoList.push(imgNo)
		}
		var enLocate=enm.locate;
		if(trueOrder[imgNo].locate.indexOf(enLocate)==-1){
			trueOrder[imgNo].locate.push(enLocate)
		}
	})
	imgNoList.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
	})
	ohtml="<table border=1><tr><td>アイコン</td><td>名前</td><td>出現場所</td></tr>"
	imgNoList.forEach(function(imgNo){
		var menm=trueOrder[imgNo];
		ohtml+="<tr><td><img width=40px src="+get_image_url(imgNo)+"></td><td>"+menm.name+"</td><td>"
		menm.locate.forEach(function(mLoc, mn){
			ohtml+= (mn > 0 ? "<br>" : "") + mLoc
		})
		ohtml+="</td></tr>"
	})
	ohtml+="</table><br>ドロップすることを保証するものではありません。<Br>敵行動データベースに掲載していないクエストは表示されません。"
	rst_html += ohtml+"</dd>";
	
	if (rst.length > 0) {
		$("#result").html(rst_html);
	} else {
		var h = "<dl class='List'><dt>ERROR OCCURRED.</dt><dd>存在しないクエストが指定されました。</dd></dl>";
		$("#result").html(h);
	}
}

function getCategoryJp(key){
	return category_jp[key] != undefined ? category_jp[key].jp : key
}

// クエストの詳細を表示
function makeQD(id) {
	var resStr = "";
	var rst = $.grep(Quests, function (Quest, QuestNum) {
		// match check
		if (id && Quest.id != id) {
			return false;
		}
		// generate html
		resStr += "<dt>" + Quest.name + "</dt>"
		if(Quest.revData){
			Quest.data.push({enemy:Quest.revData})
		}
		Quest.data.forEach(function (Battle, BattleNum) {
			resStr += "<dd class='left_min'>" +
				"<p class='battle_num'>" + Battle.appearance + "戦目</p><div class='battle_d'>"
			Battle.enemy.forEach(function (Enemy, EnemyNum) {
				var move = Enemy.move;
				// add main
				var myid = "Q" + QuestNum + "B" + BattleNum;
				resStr += "<div class='etd clearfix' id=" + myid + ">";
				resStr += "<img class='eico" + (Enemy.hp < 100 ? " impregnable" : "") +
					"' src=" + get_image_url_b(Enemy.imageno) + ">";
				resStr += "<div class='e_name'>" + Enemy.name + "</div>";
				resStr += "<p class='e_attrspec'>" + get_attr_string(Enemy.attr) +
					" / " + get_spec_string(Enemy.spec) + "</p>";
				resStr += "<p class='e_hp'>" + addform("HP", comma3(Enemy.hp)) + "</p>";
				// add move
				if (move != undefined) {
					resStr += "<p class='em_fst'>" + addform("初回", move.turn, "T") +
						" / " + addform("行動周期", move.wait, "T") + "</p>"
					resStr += "<div class='e_move'>" + moveappear(move, "on_popup", "先制攻撃")
					resStr += moveappear(move, "on_move", "通常時")
					resStr += moveappear(move, "on_angry", "怒った時")
					resStr += moveappear(move, "on_move_angry", "怒り後") +"</div>"
				}
				resStr += "</div>"
			})
			resStr += "</div>"
			resStr += "<div class='bcks'>" +
				"<a class='sim_go back_category' href='#'>試走する</a>" +
				"<a class='back_category' href='/simulator/d/?qid=" + Quest.id + "'>みんなの投稿デッキを見る</a>" +
				"<a class='back_category' href='/simulator/quest/?genre=" + Quest.category + "'>カテゴリ一覧に戻る</a></div>";
			if (BattleNum % 2 == 0 && BattleNum < 4) {
				resStr += adsence_html("clear:both;");
			}
		})
		resStr += "</dd>";
		if (Quest.revData) {
			Quest.revData.forEach(function (Enemy, EnemyNum) {
				resStr += "<dd class='left_min'>" +
					"<p class='battle_num'>復活後</p><div class='battle_d'>"
				var move = Enemy.move;
				// add main
				var myid = "Q" + QuestNum + "Brev" + EnemyNum;
				resStr += "<div class='etd clearfix' id=" + myid + ">";
				resStr += "<img class='eico" + (Enemy.hp < 100 ? " impregnable" : "") +
					"' src=" + get_image_url_b(Enemy.imageno) + ">";
				resStr += "<div class='e_name'>" + Enemy.name + "</div>";
				resStr += "<p class='e_attrspec'>" + get_attr_string(Enemy.attr) +
					" / " + get_spec_string(Enemy.spec) + "</p>";
				resStr += "<p class='e_hp'>" + addform("HP", comma3(Enemy.hp)) + "</p>";
				// add move
				if (move != undefined) {
					resStr += "<p class='em_fst'>" + addform("初回", move.turn, "T") +
						" / " + addform("行動周期", move.wait, "T") + "</p>"
					resStr += "<div class='e_move'>" + moveappear(move, "on_popup", "先制攻撃")
					resStr += moveappear(move, "on_move", "通常時")
					resStr += moveappear(move, "on_angry", "怒った時")
					resStr += moveappear(move, "on_move_angry", "怒り後") + "</div>"
				}
				resStr += "</div>"
				resStr += "</div>"
				resStr += "<div class='bcks'>" +
					"<a class='sim_go back_category' href='#'>試走する</a>" +
					"<a class='back_category' href='/simulator/d/?id=" + Quest.id + "'>みんなの投稿デッキを見る</a>" +
					"<a class='back_category' href='/simulator/quest/?genre=" + Quest.category + "'>カテゴリ一覧に戻る</a></div>";
				resStr += "</dd>";
				return true;
			});
		}
		return true;
	});
	if (rst.length > 0) {
		$("#result").html(resStr);
	} else {
		var h = "<dl class='List'><dt>ERROR OCCURRED.</dt><dd>存在しないクエストが指定されました。</dd></dl>";
		$("#result").html(h);
	}
	$("a.sim_go").on("click", function () {
		sim_by_id(id);
		return;
	});
}

// on_hogehogeの全行動を返す
function moveappear(moveObj, key, title) {
	var tmpObj = moveObj[key]
	var impTag = ["分裂待機", "鉄壁", "スキル反射", "チェイン解除", "AS封印", "怒り", "属性変化"];
	var strBody = ""
	var strTitle = title == undefined ? "" : "<b class='em_title " + key +"'>" + title + "：</b><br>"
	if (tmpObj != undefined) {
		tmpObj.forEach(function (ss) {
			if (ss != undefined) {
				var isimp = $.grep(impTag, function (e) {
					if(ss.mdesc != undefined){
						return ss.mdesc.indexOf(e) >= 0;
					}else{
						return "undefined"
					}
				}).length > 0;

				strBody += (isimp ? "<b class='imp_move'>" : "") + ss.mdesc +
					(isimp ? "</b>" : "") + "<br>";
			}
		})
	}
	return strBody == "" ? "" :
		"<div class='clmn " + key + "'>" + strTitle + strBody + "</div>";
}

// テキストを成形する
function addform(title, param, unit, nobr) {
	var tmpstr = ""
	tmpstr = title == "" ? tmpstr : tmpstr + "<b>" + title + "：</b>"
	if (param == undefined) { return "" }
	tmpstr += param
	tmpstr = unit == undefined ? tmpstr : tmpstr + unit
	//tmpstr = (nobr != undefined || nobr == 1) ? tmpstr : tmpstr + "<br>"
	return tmpstr
}
