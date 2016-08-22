{
   id: "material_kameon_sinpa_thunder",
   name: "カメオン真覇（雷）",
   desc: "",
   overlap: false,
   aprnum: 6,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "輝黄玉のカメオン",
               hp: 30000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 30000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 30000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
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
               name: "輝黄玉のカメオン",
               hp: 30000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(5, 4)),
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 40000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 30000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 3)/* Warning: 属性要確認： 全属性弱体化50%（2T） */),
                     s_enemy_attack(800, 5, 1, true)
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
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 3))
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
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack(1200, 1, 2, true)
                  ],
                  on_move_angry: [
                     s_enemy_discharge(5, 2),
                     s_enemy_attack(1200, 1, 2, true),
                     s_enemy_attack(1200, 1, 2, true),
                     s_enemy_attack(1200, 1, 2, true),
                     s_enemy_attack(1200, 1, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 3))
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
            4
         ],
         enemy: [
            {
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "黄鱗黒珠のカメオン",
               hp: 50000,
               imageno: 8246,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(4500, 1, 1, true),
                     s_enemy_force_reservoir()/* Info: 先制行動を再使用します */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_break()),
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
            5
         ],
         enemy: [
            {
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄鱗黒珠のカメオン",
               hp: 60000,
               imageno: 8246,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝黄玉のカメオン",
               hp: 50000,
               imageno: 5218,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
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
            6
         ],
         enemy: [
            {
               name: "黄鱗黒珠のカメオン",
               hp: 80000,
               imageno: 8246,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_panicshout(0, 5, 3),
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄鱗黒珠のカメオン",
               hp: 300000,
               imageno: 8246,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 800ダメージ） 5体×3T", 100, false, 800, 5, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄鱗黒珠のカメオン",
               hp: 100000,
               imageno: 8246,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true)
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