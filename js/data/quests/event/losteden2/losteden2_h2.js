{
   id: "losteden2_h2",
   name: "中級 変異",
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
               name: "凍えを偽る竜",
               hp: 45000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凍てつきを偽る竜",
               hp: 50000,
               imageno: 9156,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凍えを偽る竜",
               hp: 40000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
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
               name: "凍えを偽る竜[OD]",
               hp: 20000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 2, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不幸因子",
               hp: 50000,
               imageno: 9161,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "凍えを偽る竜",
               hp: 50000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
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
               name: "恐慌因子",
               hp: 40000,
               imageno: 9160,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(667.5, 333.75, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "凍えを偽る竜",
               hp: 60000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凍えを偽る竜",
               hp: 60000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
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
               name: "不幸因子",
               hp: 150000,
               imageno: 9161,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([0,0,1,0,0], 0.5, 4)/* Warning: 属性要確認： 雷属性防御50%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凍えを偽る竜[OD]",
               hp: 450000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "苦悶因子",
               hp: 80000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(750, 1, 1, true)
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