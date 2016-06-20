$.each(Quests, function(n, e){
    // Questの要素にcategory_jp内要素を突っ込む
	var ctjp = category_jp[e.category] || {};
	e.category_jp = ctjp.jp;
	e.is_dispmenu = ctjp.is_dispmenu;    
	e.is_dispsim  = ctjp.is_dispsim;    

    e.sortKey = {}
    // category内の定義順
    e.sortKey["0"] = (ctjp.sim_index !== undefined ? ctjp.sim_index : 9999);
	
    if(e.category === "tornament"){
        e.sortKey["1"] = e.name.slice(-4)
    }else if(e.category === "past_event"){
        e.sortKey["1"] = e.name.slice(0,8)
    }else{
        e.sortKey["1"] = 0
    }
   
    // イベトナメ用
    e.sortKey["2"] = 999
    var evOrder=["覇級","絶級","邪眼級","封魔級"]
    if(e.category === "past_event" || e.category === "evtornament"){
        for(var n=evOrder.length; n>0; n--){
            if(e.name.indexOf(evOrder[n])!=-1){
                e.sortKey["2"] = n;
            }
        }
    }

    // あとはid順（昇順）
    e.sortKey["3"] = e.id
})

Quests = Quests.sort(function(a, b){
    var x = a.sortKey;
    var y = b.sortKey;
    for(n = 0; n < Object.keys(x).length; n++){
		var ns = n;
		var sign = (n != 1 && n != 2  ? -1 : 1);
        if(x[ns] < y[ns]) return sign;
        if(x[ns] > y[ns]) return -sign;
    }
    return 0
})