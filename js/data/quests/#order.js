Quests.forEach(function(e){
    // 配置の定義
    var QuestOrder = {
        category:["tornament", "past event", "other"],
    }
    
    // カテゴリ順
    e.sortKey = []
    e.sortKey[0] = (QuestOrder.category.reverse().indexOf(e.category) + 1)
    
    // tornamentは後ろ4文字で並べる
    // past eventは前8文字で並べる
    if(e.category == "tornament"){
        e.sortKey[1] = e.name.slice(-4)
    }else if(e.category == "past event"){
        e.sortKey[1] = e.name.slice(0,8)
    }else{
        e.sortKey[1] = 0
    }
    
    // あとはid順（昇順）
    e.sortKey[2] = e.id
})

Quests = Quests.sort(function(a, b){
    var x = a.sortKey;
    var y = b.sortKey;
    var sign;
    for(n = 0; n < x.length; n++){
        sign = n == 2 ? -1 : 1;
        if(x[n] < y[n]) return sign;
        if(x[n] > y[n]) return -sign;
    }
    return 0
})