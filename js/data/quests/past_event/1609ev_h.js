{
   id: "1609ev_h",
   name: "(2016/09)イベントトーナメント 覇級",
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
               name: "無人戦艦",
               hp: 30000,
               imageno: 9077,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ドルキマス軍上等空兵",
               hp: 40000,
               imageno: 9072,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "無人戦艦",
               hp: 30000,
               imageno: 9077,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
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
               name: "無人戦艦",
               hp: 40000,
               imageno: 9077,
               attr: 1,
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
               name: "甲型爆撃戦艦",
               hp: 30000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "無人戦艦",
               hp: 40000,
               imageno: 9077,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
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
               name: "甲型爆撃戦艦",
               hp: 30000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "甲型爆撃戦艦",
               hp: 40000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 250, 250)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ドルキマス軍技術上等兵",
               hp: 30000,
               imageno: 9074,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(2)),
                     s_enemy_attack(150, 5, 1, true)
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
               name: "甲型爆撃戦艦",
               hp: 35000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack_deadgrudge(500, 3000, 5500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "甲型爆撃戦艦",
               hp: 50000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "甲型爆撃戦艦",
               hp: 30000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */)
                  ],
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
               name: "未来からの刺客 〈イグノビリウム〉",
               hp: 200000,
               imageno: 9058,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "侵食する闇の王 〈イグノビリウム〉",
               hp: 300000,
               imageno: 6542,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 600, 5, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_poison(1000, 5, 2),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凶空の破壊者 旗艦ネフィリムンド",
               hp: 180000,
               imageno: 6545,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 3)/* Warning: 属性要確認： 全属性防御25%（2T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true)
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