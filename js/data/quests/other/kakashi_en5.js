{
   id: "sandbag_en5",
   name: "敵5体テスト用",
   category: "other",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }, {
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
               name: "1",
               hp: 1000000,
               imageno: 9391,
               attr: 0,
               spec: 10,
				move: {
					on_popup: [
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
					],
					atrandom: false,
					turn: 1,
					wait: 2,
				},
            },
            {
               name: "2",
               hp: 1000000,
               imageno: 9393,
               attr: 1,
               spec: 10,
				move: {
					on_popup: [
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				},
            },
            {
               name: "3",
               hp: 1000000,
               imageno: 9395,
               attr: 2,
               spec: 10,
				move: {
					on_popup: [
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
					],
					atrandom: false,
					turn: 3,
					wait: 1,
				},
            },
            {
               name: "4",
               hp: 1000000,
               imageno: 9396,
               attr: 3,
               spec: 10,
				move: {
					on_popup: [
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
					],
					atrandom: false,
					turn: 1,
					wait: 3,
				},
            },
            {
               name: "5",
               hp: 1000000,
               imageno: 9397,
               attr: 4,
               spec: 10,
				move: {
					on_popup: [
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
					],
					atrandom: false,
					turn: 2,
					wait: 2,
				},
            },
         ]
      }
   ]
}