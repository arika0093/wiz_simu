{
   id: "eva2_104n",
   name: "10-4 姫と騎士(NORMAL)",
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
               name: "炎纏う妨害機構",
               hp: 10000,
               imageno: 8604,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_delay_attack(900, 5),
                     s_enemy_chain_sealed(3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "暗黒空間浮遊機構",
               hp: 8000,
               imageno: 8673,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
                  ],
                  on_move: [
                     s_enemy_delay_attack(500, 5)
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
               name: "暗黒空間浮遊機構",
               hp: 6700,
               imageno: 8673,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間浮遊機構",
               hp: 6700,
               imageno: 8673,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "剛炎渦巻く妨害機構",
               hp: 13300,
               imageno: 8605,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 4)/* Warning: 属性要確認： 全属性弱体化25%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 2, true)
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
               name: "炎纏う幾何生物",
               hp: 10000,
               imageno: 8610,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_panicshout(0, 5, 1))
                  ],
                  on_move: [
                     s_enemy_delay_attack(800, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間浮遊機構",
               hp: 8000,
               imageno: 8673,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
                  ],
                  on_move: [
                     s_enemy_delay_attack(500, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "剛炎竜巻く幾何生物",
               hp: 10000,
               imageno: 8611,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_delay_attack(900, 5),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 3
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
               name: "暗黒空間妨害機構",
               hp: 30000,
               imageno: 8675,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 4)/* Warning: 属性要確認： 全属性弱体化25%（3T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 2, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 5, 2, true),
                     s_enemy_attack(150, 5, 2, true),
                     s_enemy_attack(150, 5, 2, true),
                     s_enemy_attack(150, 5, 2, true),
                     s_enemy_attack(150, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Mark.09 覚醒後",
               hp: 150000,
               imageno: 8597,
               attr: 0,
               spec: 3,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrguard_all/* Warning: 属性要確認： 全属性防御75%（5T） */, "-", 100, false, [1,1,1,1,1], 0.75, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 4, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir()
                  ],
                  on_move_angry: [
                     s_enemy_attack(2400, 5, 1, true),
                     s_enemy_attack(300, 5, 4, true),
                     s_enemy_attack(300, 5, 4, true),
                     s_enemy_attack(300, 5, 4, true),
                     s_enemy_attack(300, 5, 4, true),
                     s_enemy_attack(300, 5, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間浮遊機構",
               hp: 30000,
               imageno: 8673,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_delay_attack(500, 5)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_delay_attack(500, 5),
                     s_enemy_delay_attack(500, 5),
                     s_enemy_delay_attack(500, 5),
                     s_enemy_delay_attack(500, 5),
                     s_enemy_delay_attack(500, 5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "Mark.09 覚醒後",
         hp: 150000,
         imageno: 8679,
         attr: 4,
         spec: 3,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
               damage_switch(s_enemy_when_hpdown(0.7), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)/* Warning: 属性要確認： 全属性弱体化50%（3T） */,
               s_enemy_attack(750, 5, 1, true)
            ],
            on_angry: [
               s_enemy_absorb(0.4, 5, 50000)
            ],
            on_move_angry: [
               s_enemy_delay_attack(750, 5),
               s_enemy_force_reservoir(),
               s_enemy_attack(2250, 5, 1, true),
               s_enemy_delay_attack(750, 5),
               s_enemy_force_reservoir(),
               s_enemy_attack(2250, 5, 1, true),
               s_enemy_delay_attack(750, 5),
               s_enemy_delay_attack(750, 5)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}