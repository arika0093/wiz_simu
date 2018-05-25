{
   id: "1805ev_h",
   name: "(18/05)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   battle_before: [{
      desc: "ch+1",
	  proc: panel_chainplus(1),
	  isev: true,
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "濁流のごとく押し寄せる夢",
               hp: 50000,
               imageno: 9401,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔法の妖精 リピュア・アラト",
               hp: 50000,
               imageno: 9386,
               imageno_prefix: "",
               attr: 1,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "血の気を引かせる夢",
               hp: 50000,
               imageno: 9392,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
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
               name: "意思崩壊ドルキマス軍曹",
               hp: 80000,
               imageno: 12637,
               imageno_prefix: "",
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "荒鷲の艦隊 ブルーノ・シャルルリエ",
               hp: 100000,
               imageno: 11376,
               imageno_prefix: "",
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 80000,
               imageno: 12637,
               imageno_prefix: "",
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/* nogambits */
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
               name: "レモンイエロースクーパー",
               hp: 15,
               imageno: 8479,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(1)),
                     m_enemy_once(s_enemy_attrguard_own([0,1,0,0,0], 1, 1),
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_allySkillCharge(5, 1)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "天球を覆う大魔道 メリィ・ミツボシ",
               hp: 70000,
               imageno: 8458,
               imageno_prefix: "",
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/* nogambits */
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
               name: "チャンスメドレー スパークラー",
               hp: 350000,
               imageno: 12638,
               imageno_prefix: "",
               attr: 3,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "終の収穫者 タモン＆アドヴェリタス",
               hp: 350000,
               imageno: 12639,
               imageno_prefix: "",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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
            5
         ],
         enemy: [
            {
               name: "真理をこの手に アレク・ルミナレス",
               hp: 400000,
               imageno: 8412,
               imageno_prefix: "",
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(33.5, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "聖域の愛し子 ロレッタ・ミラージュ",
               hp: 1300000,
               imageno: 8413,
               imageno_prefix: "",
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_recoilAttack, "-", 100, false, 50000, 5, [0,0,0,0,1], 2, 5))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "雄魂の魔戦獅子 バロン・ライオネル",
               hp: 400000,
               imageno: 8411,
               imageno_prefix: "",
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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