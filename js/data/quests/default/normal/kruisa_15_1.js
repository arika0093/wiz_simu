{
   id: "kruisa_15_1",
   name: "クルイサ15-1 道理を無視した力",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: true,
   panelchainDefault: 4,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "狂気のソウルスクリーマー",
               hp: 1000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_chainreduce(5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 1000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 800000,
               imageno: 12043,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 800000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            2,3,4
         ],
         enemy: [
            {
               name: "狂気のソウルスクリーマー",
               hp: 30,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 2000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_chain_sealed(6)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 2000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 2000000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 2000000,
               imageno: 12043,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            2,3,4
         ],
         enemy: [
            {
               name: "狂気のソウルスクリーマー",
               hp: 2000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 2000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_chain_sealed(6)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 2000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 2000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 2000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
	  {
         appearance: [
            2,3,4
         ],
         enemy: [
            {
               name: "フォグレンブル",
               hp: 2000000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光のマジタンポックル",
               hp: 500000,
               imageno: 12047,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
					 // 本来は逃走
                     s_enemy_attack(1, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_allySkillCharge(5, 10)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 99
               }
            },
            {
               name: "フォグレンブル",
               hp: 2000000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 2000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 30,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            5
         ],
         enemy: [
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 8000000,
               imageno: 12043,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 20000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(3000, 5, 1, true),
                     s_enemy_attack_ignoreguard(3000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 8000000,
               imageno: 12043,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 5000000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 5000000,
               imageno: 12041,
               imageno_prefix: "",
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ]
}