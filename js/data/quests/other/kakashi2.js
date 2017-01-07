{
   id: "sandbag2",
   name: "ダメージ計算用カカシ2",
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
               name: "カップル(光属性)",
               hp: 8000000,
               imageno: 9249,
               attr: 3,
               spec: 11,
            },
            {
               name: "カップル(闇属性)",
               hp: 8000000,
               imageno: 9246,
               attr: 4,
               spec: 11,
            },
         ]
      }
   ]
}