{
   id: "sandbag_attrrev",
   name: "属性反転テスト用",
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
               name: "test",
               hp: 4000000,
               imageno: 8772,
               attr: 0,
               spec: 2,
				move: {
					on_popup: [
					],
					on_move: [
						m_enemy_once(s_enemy_attrreverse(5, 5)),
						s_enemy_attack(100, 3, 3, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
            },
         ]
      }
   ]
}