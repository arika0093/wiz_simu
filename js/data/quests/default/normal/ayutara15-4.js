{
   id: "ayutara15-4",
   name: "",
   desc: "",
   overlap: false,
   aprnum: 7,
   panel_effect: [
	  panel_attackup(0.2),
	  panel_chainplus(2),
	  panel_healally(0.1),
	  panel_attr_guard([1,1,1,1,1], 0.2)
   ],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "怒りのクリムゾンボーン",
               hp: 68000,
               imageno: 5247,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(500, 1000, 1500)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "アガットレンジャー",
               hp: 48000,
               imageno: 5229,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 2, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "怒りのクリムゾンボーン",
               hp: 68000,
               imageno: 5247,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(500, 1000, 1500)
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
               name: "赫灼たる太陽の世界樹",
               hp: 78000,
               imageno: 2222,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "アクトハウスウォリアー",
               hp: 98000,
               imageno: 5241,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2))
                  ],
                  on_move: [
                     skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凶炎のブレイズリザード",
               hp: 86000,
               imageno: 5253,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(2, 6)),
                     s_enemy_deathlimit(2, 6)
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
               name: "氷岩フラッペスピリット",
               hp: 30,
               imageno: 5261,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(180, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "灼岩ラーヴァスピリット",
               hp: 30,
               imageno: 5259,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(160, 3, 5, true)
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
            4
         ],
         enemy: [
            {
               name: "怒りのクリムゾンボーン",
               hp: 98000,
               imageno: 5247,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(1000, 2000, 3000)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     m_enemy_once(s_enemy_resurrection(0.75)),
                     s_enemy_attack_deadgrudge(1000, 2000, 3000)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "リラソハウスウォリアー",
               hp: 72000,
               imageno: 5243,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2))
                  ],
                  on_move: [
                     skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "怒りのクリムゾンボーン",
               hp: 98000,
               imageno: 5247,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(1000, 2000, 3000)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     m_enemy_once(s_enemy_resurrection(0.75)),
                     s_enemy_attack_deadgrudge(1000, 2000, 3000)
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
            5
         ],
         enemy: [
            {
               name: "赫灼たる太陽の世界樹",
               hp: 78000,
               imageno: 2222,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "アクトハウスウォリアー",
               hp: 98000,
               imageno: 5241,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2))
                  ],
                  on_move: [
                     skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グランフランバット",
               hp: 96000,
               imageno: 5235,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attr_weaken(error, 2, 3, 11)/* /* Error: 属性解釈に失敗しました */Error: 属性解釈に失敗しました *//* Warning: 属性要確認： 火水弱体化2倍×10T */,
                     s_enemy_attr_weaken(error, 2, 3, 11)/* /* Error: 属性解釈に失敗しました */Error: 属性解釈に失敗しました *//* Warning: 属性要確認： 火水弱体化2倍×10T */
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(2, 4),
                     s_enemy_attr_weaken(error, 2, 3, 11)/* /* Error: 属性解釈に失敗しました */Error: 属性解釈に失敗しました *//* Warning: 属性要確認： 火水弱体化2倍×10T */
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
            6
         ],
         enemy: [
            {
               name: "ライトサンダーパンプキン",
               hp: 100,
               imageno: 1281,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(25, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "レッドホットパンプキン",
               hp: 100,
               imageno: 1279,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(25, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ブルーアイスパンプキン",
               hp: 100,
               imageno: 1280,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(25, 1, 1, true)/*nogambits*/
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
            7
         ],
         enemy: [
            {
               name: "魔を喚ぶ邪竜 ドランヘルグ",
               hp: 228000,
               imageno: 5225,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_as_sealed(3, 4),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "焔喰らう業魔 マリス・ゲヘナム",
               hp: 860000,
               imageno: 5227,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     skill_counter_func(s_enemy_poison, "-", 6, false, 800, 5, 10),
                     damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry(), true)
                  ],
                  on_move: [
                     skill_counter_func(s_enemy_poison, "-", 6, false, 800, 5, 10),
                     s_enemy_attack(240, 4, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(3, 4),
                     s_enemy_attack(600, 4, 5, true),
                     s_enemy_attack_deadgrudge(600, 2400, 4200)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔を喚ぶ邪竜 ドランヘルグ",
               hp: 162000,
               imageno: 5225,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_chain_break()
                  ],
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_attack(300, 4, 4, true)
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