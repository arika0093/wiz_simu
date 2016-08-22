{
   id: "blader2-1",
   name: "Divine Blader 堕天級",
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
               name: "シェム・ハ・メフォラシュ",
               hp: 30000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リュウゼツラン・至聖",
               hp: 30000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 3
               }
            },
            {
               name: "シェム・ハ・メフォラシュ",
               hp: 20000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
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
               name: "シェセプ・アンク",
               hp: 20000,
               imageno: 1916,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     skill_counter(1200, 4)
                  ],
                  on_move: [
                     skill_counter(1200, 4)/* Info: 先制行動を再使用します */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "カスケードドラゴン",
               hp: 12000,
               imageno: 1919,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(550, 1, 1, true)/* Warning: Action8の正確な挙動は不明です */
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            },
            {
               name: "リュウゼツラン・至聖",
               hp: 20000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1600, 1, 1, true)/* Warning: Action8の正確な挙動は不明です */
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
            3
         ],
         enemy: [
            {
               name: "シェム・ハ・メフォラシュ",
               hp: 40000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 3
               }
            },
            {
               name: "シェセプ・アンク",
               hp: 28000,
               imageno: 1916,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,0,0,0,0], 0.5, 6)/* Warning: 属性要確認： 火防御（半減・5T） */),
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "シェム・ハ・メフォラシュ",
               hp: 50000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 2, 2, true)
                  ],
                  atrandom: false,
                  turn: 3,
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
               name: "リュウゼツラン・至聖",
               hp: 60000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     skill_counter(1200, 4)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "魂を穢す堕天魔神 ザラジュラム",
               hp: 220000,
               imageno: 1921,
               attr: 2,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(666.6666666666666, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "シェム・ハ・メフォラシュ",
               hp: 40000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_all_sealed(5, 2)/* Warning: ターン数を確認してください： 5×1T封印 */
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            }
         ]
      }
   ]
}