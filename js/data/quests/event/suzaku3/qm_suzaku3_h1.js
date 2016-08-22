{
   id: "suzaku3_h1",
   name: "歴戦級 スザクロッド自警団",
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
               name: "浮遊機雷 ライカ",
               hp: 15,
               imageno: 8210,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(750, 1, 1, true)/* Warning: Action8の正確な挙動は不明です */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "自動迎撃式機雷 イナズマ",
               hp: 40000,
               imageno: 8211,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "浮遊機雷 ライカ",
               hp: 20,
               imageno: 8210,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
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
               name: "自動迎撃式機雷 イナズマ",
               hp: 60000,
               imageno: 8211,
               attr: 2,
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
               name: "インターセプター サンダーバグ",
               hp: 60000,
               imageno: 8216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1250, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "チャンスメドレー スパークラー",
               hp: 60000,
               imageno: 8217,
               attr: 2,
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
            }
         ]
      },
      {
         appearance: [
            3
         ],
         enemy: [
            {
               name: "インターセプター サンダーバグ",
               hp: 50000,
               imageno: 8216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_as_sealed(5, 5),
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャンスメドレー スパークラー",
               hp: 70000,
               imageno: 8217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     skill_counter_func(damage_block_own, "自分のみダメージブロック20000DMG×5T", 100, false, 20000, 6)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     skill_counter_func(damage_block_own, "自分のみダメージブロック20000DMG×5T", 100, false, 20000, 6)/* Info: 先制行動を再使用します */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "自動迎撃式機雷 カゲロウ",
               hp: 40000,
               imageno: 8207,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_attr_weaken([0,0,1,0,0], 1.75, 5, 4)/* Warning: 属性要確認： 雷属性弱体化75%（3T） */
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true),
                     s_enemy_attr_weaken([0,0,1,0,0], 1.75, 5, 4)/* Warning: 属性要確認： 雷属性弱体化75%（3T） *//* Info: 先制行動を再使用します */
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
            4
         ],
         enemy: [
            {
               name: "浮遊機雷 ライカ",
               hp: 30,
               imageno: 8210,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)/* Warning: Action8の正確な挙動は不明です */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "インターセプター サンダーバグ",
               hp: 250000,
               imageno: 8216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャンスメドレー スパークラー",
               hp: 130000,
               imageno: 8217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     skill_counter_func(s_enemy_attack, "通常攻撃 （625ダメージ、単体）", 100, false, 625, 1, 1, true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 5, true),
                     s_enemy_attack(250, 3, 5, true),
                     s_enemy_attack(250, 3, 5, true),
                     s_enemy_attack(250, 3, 5, true),
                     skill_counter_func(s_enemy_attack, "通常攻撃 （625ダメージ、単体）", 100, false, 625, 1, 1, true)/* Info: 先制行動を再使用します */
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