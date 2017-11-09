{
   id: "sandbag",
   name: "ダメージ計算用カカシ",
   category: "other",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "ch+1",
	  proc: panel_chainplus(1)
   }, {
      desc: "ch+2",
	  proc: panel_chainplus(2)
   }, {
      desc: "ch+3",
	  proc: panel_chainplus(3)
   }, {
      desc: "ch+4",
	  proc: panel_chainplus(4)
   }, {
      desc: "SP+50",
	  proc: panel_skillboost(50)
   }],
   battle_before_def: -1,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ブロッカー(火)",
               hp: 8000000,
               imageno: 11472,
               attr: 0,
               spec: 11,
            },
            {
               name: "ブロッカー(水)",
               hp: 8000000,
               imageno: 11470,
               attr: 1,
               spec: 11,
            },
            {
               name: "ブロッカー(雷)",
               hp: 8000000,
               imageno: 11474,
               attr: 2,
               spec: 11,
            },
         ]
      }
   ]
}