Quests.forEach(function(e){
    // 配置の定義
    var QuestOrder = {
        category:["tornament", "past event", "other"],
        name:["真覇", "覇級", "絶級"]
    }
    
    // カテゴリ順
    e.sortKey = []
    e.sortKey[0] = (QuestOrder.category.reverse().indexOf(e.category) + 1)
    
    // tornamentは後ろ4文字で纏める
    // tornament以外はざっくりと頭の8文字で纏める
    if(e.category == "tornament"){
        e.sortKey[1] = e.name.slice(-4)
    }else{
        e.sortKey[1] = e.name.slice(0, 8)
    }
    
    // イベントトナメ等の覇とか絶とかの考慮
    var tmpNum = 0
    QuestOrder.name.reverse().forEach(function(f, n){
        tmpNum = e.name.indexOf(f) == -1 ? tmpNum : n + 1
    })
    e.sortKey[2] = tmpNum
})

Quests = Quests.sort(function(a, b){
    var x = a.sortKey;
    var y = b.sortKey;
    for(n = 0; n < x.length; n++){
        if(x[n] < y[n]) return 1;
        if(x[n] > y[n]) return -1;
    }
    return 0
})