{
   id: "suzaku3_n6",
   name: "んんー！？級 縫合列車再臨",
   category: "suzaku3",
   category_jp: "スザクⅢ",
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
               name: "浮遊機雷 ヒョウカ",
               hp: 40000,
               imageno: 8208,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "自動迎撃式機雷 ミズノツキ",
               hp: 60000,
               imageno: 8209,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_all(4000, 3)),
                     s_enemy_attack_ratio(0.2, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "浮遊機雷 ヒョウカ",
               hp: 40000,
               imageno: 8208,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "自動迎撃式機雷 カゲロウ",
               hp: 25000,
               imageno: 8207,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(665, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "インターセプター スノークラブ",
               hp: 60000,
               imageno: 8214,
               attr: 1,
               spec: 6,
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
               name: "チャンスメドレー アヴァランチ",
               hp: 40000,
               imageno: 8215,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(500, 5, 4)),
                     s_enemy_attack(600, 5, 1, true)
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
               name: "自動迎撃式機雷 ミズノツキ",
               hp: 50000,
               imageno: 8209,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "自動迎撃式機雷 ミズノツキ",
               hp: 60000,
               imageno: 8209,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5))
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
               name: "インターセプター スノークラブ",
               hp: 30000,
               imageno: 8214,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 6))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
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
               name: "チャンスメドレー アヴァランチ",
               hp: 150000,
               imageno: 8215,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.25, 3)/* Warning: 属性要確認： 雷属性防御25%（2T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 2)
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
               name: "我が独道 ウシュガ＆ウィアノーヴァ",
               hp: 200000,
               imageno: 8202,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(6000, 11)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(320, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 5, 2, true),
                     s_enemy_attack(800, 5, 2, true),
                     s_enemy_attack(800, 5, 2, true),
                     s_enemy_attack(800, 5, 2, true),
                     s_enemy_attack(800, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "浮遊機雷 ライカ",
               hp: 150000,
               imageno: 8210,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "5体のアンサースキルを封印する（2T）", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_deathlimit(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(162.5, 5, 3, true),
                     s_enemy_attack(162.5, 5, 3, true),
                     s_enemy_attack(162.5, 5, 3, true),
                     s_enemy_attack(162.5, 5, 3, true),
                     s_enemy_attack(162.5, 5, 3, true)
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