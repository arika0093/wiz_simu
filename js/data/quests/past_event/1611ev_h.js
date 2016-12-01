{
   id: "1611ev_h",
   name: "覇級 頂上決戦",
   desc: "",
   overlap: false,
   aprnum: 5,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "暗黒のヘイトフルドラゴン",
               hp: 8000,
               imageno: 9537,
               attr: 4,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "火炎剛竜",
               hp: 10000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒のヘイトフルドラゴン",
               hp: 8000,
               imageno: 9537,
               attr: 4,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
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
               name: "雷撃剛竜",
               hp: 6000,
               imageno: 9484,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のヘイトフルドラゴン",
               hp: 10000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 6000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
            3
         ],
         enemy: [
            {
               name: "暗黒のヘイトフルドラゴン",
               hp: 8000,
               imageno: 9537,
               attr: 4,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 2))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 10000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 6000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(135, 5, 1, true)
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
               name: "火河竜",
               hp: 10000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "燃えるヒッポポドラゴン",
               hp: 10000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 4)/*!*/)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 10000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
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
               name: "狂乱の魔刃竜 ケルク＝ナダ",
               hp: 10,
               imageno: 9465,
               attr: 0,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_panicshout(0, 5, 3)),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "偽りの微笑 アレンティノ",
               hp: 700000,
               imageno: 9538,
               attr: 0,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [1,1,1,1,1], 2, 3)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(700, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(40000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_continue_damage(3, 1500, 1500),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "竜骸獣 ログオーズ",
               hp: 100000,
               imageno: 9461,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0, 0, 1, 0, 0], 1, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(167.5, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([0,0,1,0,0], 3, 3)
                  ],
                  on_move_angry: [
                     s_enemy_ss_sealed(5, 1),
                     s_enemy_chain_sealed(100),
                     s_enemy_attack(167.5, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}