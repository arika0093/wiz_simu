vals = {
	roundNum: 0,
	clearNum: 0,
	totaltime: 0,
	name: "mikoto1",
	times: [],
	deck: ""
}

initialFlag = true;
commenttimer = 0;
timer = 0;
sw_status = 0;

function reset() {
	initialFlag = true;
	vals.totaltime = 0;
	commenttimer = 0;
	vals.roundNum = 0;
	vals.clearNum = 0;
	sw_status = 0;
	timer = 0;
	vals.times = [];
	speak("initial");
	draw(vals.times)
}

graphSettings = {
	linecolor: 'green',
	dotcolor: 'blue',
	fontcolor: 'blue',
	bgcolor: 'transparent',
	maxappear: 15,
	infFlag: false
}

function graphswitch() {
	graphSettings.infFlag = !graphSettings.infFlag;
	draw(vals.times)
}

function vcalc() {
	var message = "";
	// message += "クエスト名を"
	message += count_formatEx(vals.totaltime) + "の間、" + (vals.roundNum - 1) + "周して" + vals.clearNum + "回クリアし"
	if (isFinite(nowpoint.value) && isFinite(startpoint.value) && nowpoint.value * 1 != 0) {
		message += "、" + ((nowpoint.value * 1) - (startpoint.value * 1)).toLocaleString() + "[pt]稼ぎました。\n"
	} else {
		message += "ました。\n"
	}
	message += "LapTime：" + count_formatEx(average(vals.times)) + ", クリア率：" + Math.round(vals.clearNum / (vals.roundNum - 1) * 100) + "[%]"
	if (isFinite(nowpoint.value) && isFinite(startpoint.value) && nowpoint.value * 1 != 0) {
		message += ", 時速" + Math.round(((nowpoint.value * 1) - (startpoint.value * 1)) / (vals.totaltime / 10 / 60 / 60)).toLocaleString() + "[pt]"
	}
	message += "\n"
	// message += "リンクurl "
	message += "#wiz_stopwatch"
	alert(message)
}


function debugMinute(mi) {
	timer = mi * 60 * 10 * (.9 + Math.random() * .2)
}

function finite() {
	bstart.innerHTML = "測定開始";
	speak("finite")
	sw_status = 0
	clearInterval(timerID);
	initialFlag = true;
	draw(vals.times)
	round.innerHTML = vals.roundNum - 1 + "周[終了]"
}

function start_count() {
	if (sw_status == 0) {
		//スタート
		if (initialFlag == true) {
			reset()
			speak("start")
			initialFlag = false;
			roundUp(1);
		} else {
			speak("restart")
		}
		bstart.innerHTML = "一時停止";
		sw_status = 1;
		timerID = setInterval("count_up()", 100);
	} else {
		//ストップ
		speak("tempstop")
		bstart.innerHTML = "再開";
		sw_status = 0;
		clearInterval(timerID);
	}
}

function mdelete() {
	var maxval = max(vals.times)
	if (maxval < timer) {
		speak("deletenow")
		timer = 0;
	} else {
		speak("deletelog")
		roundDown(0);
		for (var mm = 0; mm < vals.times.length; mm++) {
			if (vals.times[mm] == maxval) {
				vals.times.splice(mm, 1);
			}
		}
		vals.totaltime -= maxval;
	}
	draw(vals.times);
}

function count_up() {
	timer++;
	commenttimer--;
	if (commenttimer == 0) {
		speak("normal")
	}
	if (sw_status < 2) {
		counter.innerHTML = count_format(timer);
	}
	draw(vals.times.concat(timer))
}

function say(mycomment, feel) {
	var imgpath = "https://i-quiz-colopl-jp.akamaized.net/img/talkstory/" + words[vals.name].imgbase + feel + ".png";
	$("div.stpwatch").css("background-image", "url(" + imgpath + ")");
	comment.innerHTML = mycomment;
}

function speak(key) {
	var myrnd = Math.floor(Math.random() * words[vals.name][key].length)
	say(words[vals.name][key][myrnd][0], words[vals.name][key][myrnd][1])
	if (words[vals.name][key][myrnd][2]) {
		commenttimer = words[vals.name][key][myrnd][2];
	} else {
		commenttimer = 70;
	}
}


function lap2(status) {
	roundUp(status)
	if (status == 0) {
		if (min(vals.times) > timer) {
			speak("best")
		} else if (max(vals.times) < timer) {
			speak("worst")
		} else if (average(vals.times) > timer) {
			speak("good")
		} else {
			speak("bad")
		}
		vals.times.push(timer)
		draw(vals.times)
		mam.innerHTML = "Min:" + count_format(min(vals.times)) + " Ave:" + count_format(average(vals.times)) + " Max:" + count_format(max(vals.times));
	} else {
		speak("retry")
	}
	vals.totaltime += timer;
	timer = 0;
}

function roundUp(status) {
	if (status == 0) {
		vals.clearNum++;
	}
	vals.roundNum++;
	bclear.innerHTML = vals.roundNum + 1 + "週目開始<br>(クリア)"
	bretry.innerHTML = vals.roundNum + 1 + "週目開始<br>(リタイア)"
	round.innerHTML = vals.roundNum + "週目"
}

function roundDown(status) {
	if (status == 0) {
		vals.clearNum--;
	}
	vals.roundNum--;
	bclear.innerHTML = vals.roundNum + 1 + "週目開始<br>(クリア)"
	bretry.innerHTML = vals.roundNum + 1 + "週目開始<br>(リタイア)"
	round.innerHTML = vals.roundNum + "週目"
}

function min(data) {
	if (data.length == 0) {
		return Infinity
	} else {
		return Math.min.apply(null, data)
	}
}
function max(data) {
	if (data.length == 0) {
		return -Infinity
	} else {
		return Math.max.apply(null, data)
	}
}
function sum(data) {
	var tmpval = 0;
	data.forEach(function (e) {
		tmpval += e;
	})
	return tmpval;
}

function average(data) {
	return sum(data) / data.length;
}

function draw(datas) {
	var gs = graphSettings;
	/* canvas要素のノードオブジェクト */
	var canvas = document.getElementById('canvassample');
	/* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
	if (!canvas || !canvas.getContext) {
		return false;
	}
	/* 2Dコンテキスト */
	var ctx = canvas.getContext('2d');

	/*クリア*/
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	/* ぬりつぶし*/
	ctx.beginPath();
	ctx.fillStyle = gs.bgcolor
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.closePath();

	/*表示数制限*/
	if (gs.infFlag) {
		pnmin = 0;
		nownum = datas.length;
	} else {
		pnmin = Math.max(0, datas.length - gs.maxappear)
		nownum = Math.min(gs.maxappear, datas.length)
	}

	/*線*/
	ctx.strokeStyle = gs.linecolor;
	ctx.beginPath();
	for (pn = pnmin; pn < datas.length; pn++) {
		nowx = ((pn - pnmin) / (nownum - 1) * .9 + .05) * canvas.width
		nowy = (1 - (datas[pn] - min(datas.slice(0, -1))) / (max(datas) - min(datas.slice(0, -1))) * .8 - .05) * canvas.height
		if (pn == 0) {
			ctx.moveTo(nowx, nowy);
		} else {
			ctx.lineTo(nowx, nowy);
		}
	}
	ctx.stroke();

	/*点と数字*/
	if (!gs.infFlag) {
		ctx.font = " Meiryo, 'ヒラギノ角ゴ Pro W3', 'Droid Sans Japanese', sans-serif";
		for (pn = pnmin; pn < datas.length; pn++) {
			ctx.fillStyle = gs.dotcolor;
			nowx = ((pn - pnmin) / (nownum - 1) * .9 + .05) * canvas.width
			nowy = (1 - (datas[pn] - min(datas.slice(0, -1))) / (max(datas) - min(datas.slice(0, -1))) * .8 - .05) * canvas.height
			ctx.beginPath();
			ctx.arc(nowx, nowy, 5, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = gs.fontcolor;
			ctx.fillText(count_format2(datas[pn]), nowx - 11, nowy - 10);
		}
	}
}

function count_format(num) {
	var ts = num / 10;
	var tm = Math.floor(ts / 60);
	var ts = (ts % 60).toFixed(1);
	tm = tm % 60;
	//表示の整形
	if (ts < 10) ts = "0" + ts;
	if (tm < 10) tm = "0" + tm;
	return tm + ":" + ts;
}


function count_format2(num) {
	var ts = num / 10;
	var tm = Math.floor(ts / 60);
	var ts = (ts % 60).toFixed(0);
	tm = tm % 60;
	//表示の整形
	if (ts < 10) ts = "0" + ts;
	if (tm < 10) tm = "0" + tm;
	return tm + ":" + ts;
}

function count_formatEx(num) {
	var ts = num / 10;
	var tm = Math.floor(ts / 60);
	var th = Math.floor(tm / 60);
	ts = ts - tm * 60;
	tm = tm - th * 60;
	outp = "";
	if (th > 0) {
		outp += th + "時間"
	}
	if (th > 0 | tm > 0) {
		outp += tm + "分"
	}
	if (th == 0 && (tm > 0 || ts > 0)) {
		outp += Math.round(ts) + "秒"
	}
	return outp
}

$(function () {
	reset();
});