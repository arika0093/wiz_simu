{
   id: "losteden2_h4",
   name: "封魔級 合同作戦",
   desc: "",
   overlap: false,
   aprnum: 4,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "苦悶因子",
               hp: 45000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 4, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "苦悶因子",
               hp: 45000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 4, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "炎を偽る竜",
               hp: 30000,
               imageno: 9154,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 4, 2, true)
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
            2
         ],
         enemy: [
            {
               name: "苦悶因子[OD]",
               hp: 55000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_chain_sealed(4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "不安因子",
               hp: 55000,
               imageno: 9163,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "閃光を偽る竜",
               hp: 55000,
               imageno: 9157,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)/*nogambits*/
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
            3
         ],
         enemy: [
            {
               name: "閃光を偽る竜",
               hp: 60000,
               imageno: 9157,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_discharge(5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不安因子",
               hp: 90000,
               imageno: 9163,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 3, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "炎を偽る竜",
               hp: 50000,
               imageno: 9154,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
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
               name: "稲妻を偽る竜[OD]",
               hp: 300000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 30000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "破滅的共時性 ジェネティス[OD]",
               hp: 580000,
               imageno: 9137,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  on_angry: [
                     damage_block_own(30000, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 3, true),
                     s_enemy_attack(500, 5, 3, true),
                     s_enemy_attack(500, 5, 3, true),
                     s_enemy_attack(500, 5, 3, true),
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐慌因子",
               hp: 100000,
               imageno: 9160,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
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