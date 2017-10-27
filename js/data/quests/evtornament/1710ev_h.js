{
   id: "1710ev_h",
   name: "(2017/10)イベントトーナメント 覇級",
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
               name: "蒼鐵機鎧兵",
               hp: 10000,
               imageno: 8286,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアスティンガー",
               hp: 50000,
               imageno: 8296,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "蒼鐵機鎧兵",
               hp: 10000,
               imageno: 8286,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "黄鉄鎧兵",
               hp: 12,
               imageno: 8287,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(1))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "グリムン・ブラムン",
               hp: 10000,
               imageno: 8340,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "天の火の使い マッス・ウローユ",
               hp: 25000,
               imageno: 8344,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_all(30000, 2))
                  ],
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グリムン・シャドウ",
               hp: 10000,
               imageno: 8342,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 5, true)
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
               name: "ブルースティンガー",
               hp: 20000,
               imageno: 8295,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.75, 2))
                  ],
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアスティンガー",
               hp: 120000,
               imageno: 8296,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ガンボージ・ヘルムホプス",
               hp: 10000,
               imageno: 8308,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
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
               name: "黒鎧の魔戦獣 タウルケンド",
               hp: 200000,
               imageno: 6322,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(1, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "妖しき光の王 フーガァー",
               hp: 700000,
               imageno: 9221,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_deathlimit(5, 6),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_heal_own(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光輪の虚神 エルデステリオ",
               hp: 180000,
               imageno: 6326,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([0,0,0,0,1], 2, 5, 2)/* Warning: 属性要確認： 光属性弱体化100%（1T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "汚れた水の王 ヴィロムコ",
               hp: 200000,
               imageno: 9229,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true),
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "傲慢な火焔王 アブロガンティ",
               hp: 100000,
               imageno: 9225,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [1,1,1,1,1], 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(75, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(500, 5, 1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(75, 5, 1, true),
                     s_enemy_attack(75, 5, 1, true),
                     s_enemy_attack(75, 5, 1, true),
                     s_enemy_attack(75, 5, 1, true),
                     s_enemy_attack(75, 5, 1, true)
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