{
   id: "kruisa_15_4",
   name: "クルイサ15-4 無限大の魔力",
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
               name: "ミスティアン",
               hp: 1000000,
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
               name: "ミスティアン",
               hp: 1000000,
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
            }
         ]
      },
      {
         appearance: [
            2
         ],
         enemy: [
            {
               name: "ミスティアン",
               hp: 50,
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
                     s_enemy_attack_ignoreguard(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_heal_all(1)
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
               name: "ミスティアン",
               hp: 50,
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
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
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
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
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
                  turn: 2,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            3
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
                     s_enemy_attack_ignoreguard(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 8000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     damage_block_own(600000, 11)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true)
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
                     s_enemy_attack_ignoreguard(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 1000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_continue_damage(3, 500, 500)
                  ],
                  atrandom: false,
                  turn: 1,
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
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            4
         ],
         enemy: [
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 5000000,
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
               name: "闇のマジタンポックル",
               hp: 500000,
               imageno: 12048,
               imageno_prefix: "",
               attr: 4,
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
               name: "陰鬱なソウルスクリーマー",
               hp: 5000000,
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
               name: "陰鬱なソウルスクリーマー",
               hp: 5000000,
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
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 5000000,
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
               name: "狂気のソウルスクリーマー",
               hp: 8000000,
               imageno: 12042,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 5,
                  wait: 1
               }
            },
            {
               name: "石砕魔甲獣 ビガロアンダンテ",
               hp: 40000000,
               imageno: 12000,
               imageno_prefix: "",
               attr: 4,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attr_change(3),
                     m_enemy_once(s_enemy_discharge(5, 99)),
                     m_enemy_once(s_enemy_chain_break()),
                     m_enemy_once(s_enemy_fear(5, 0.2, 0.2, [1,1,1,1,1]))
                  ],
                  on_move_angry: [
                     damage_block_own(600000, 3),
                     s_enemy_attack_ignoreguard(1000, 5, 1, true),
                     s_enemy_attack(7500, 5, 1, true),
                     s_enemy_attack_ignoreguard(2500, 5, 1, true),
                     s_enemy_attack(7500, 5, 1, true),
                     s_enemy_heal_own(0.1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 8000000,
               imageno: 12040,
               imageno_prefix: "",
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(1, 5))
                  ],
                  on_move: [
                     s_enemy_attack_ignoreguard(7500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 10,
                  wait: 10
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 5000000,
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
               hp: 5000000,
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
      }
   ]
}