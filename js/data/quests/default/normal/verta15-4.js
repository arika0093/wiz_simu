{
   id: "verta15-4",
   name: "ヴェルタ15-4 哀れな末路と、死闘",
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
               name: "青い灯火 シャンデリッパー",
               hp: 40000,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(4000, 1, 1, true)),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(4000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "青い灯火 シャンデリッパー",
               hp: 60000,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
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
               name: "冷たい本 ザップテイル",
               hp: 60000,
               imageno: 7151,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.25, 5, 4)/* Warning: 属性要確認： 水属性弱体化25%（3T） */),
                     s_enemy_division(1)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
               name: "覗き返す青い鏡",
               hp: 65000,
               imageno: 7157,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_break()),
                     m_enemy_once(attack_counter_dual(900, 6)),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "冷たい本 ザップテイル",
               hp: 115000,
               imageno: 7151,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（5T） */, "5体を完全に封印する（5T）", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "動く水翼魔のレリーフ",
               hp: 100000,
               imageno: 7163,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5)),
                     s_enemy_attack(300, 3, 3, true)
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
            4
         ],
         enemy: [
            {
               name: "冷酷な物語 ザップテイル",
               hp: 105000,
               imageno: 7152,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 3)),
                     m_enemy_once(s_enemy_chain_break()),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "昏き水に蠢く インベル・ゲッタ",
               hp: 1200000,
               imageno: 7202,
               attr: 1,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "5体に5連撃（DMG+200%）", 100, false, 1200, 5, 5, true)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 4, true)
                  ],
                  on_angry: [
                     s_enemy_heal_all(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_poison(1500, 5, 4),
                     s_enemy_deathlimit(5, 9),
                     s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */,
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "戦慄の物語 ザップテイル",
               hp: 80000,
               imageno: 7154,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.8, 5, true)),
                     m_enemy_once(s_enemy_force_reservoir()),
                     m_enemy_once(s_enemy_attack(3000, 1, 1, true)),
                     s_enemy_attack(1500, 1, 1, true)
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