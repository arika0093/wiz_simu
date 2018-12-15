{
   id: "1811ev_h",
   name: "(2018/11)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: false,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "光のハルピュイア",
               hp: 1,
               imageno: 6,
               imageno_prefix: "",
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・サンダーファイター",
               hp: 1,
               imageno: 12,
               imageno_prefix: "",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光のハルピュイア",
               hp: 1,
               imageno: 6,
               imageno_prefix: "",
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅雷のデビルガンナー",
               hp: 1,
               imageno: 18,
               imageno_prefix: "",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅雷のデビルガンナー",
               hp: 1,
               imageno: 18,
               imageno_prefix: "",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
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
               name: "光の戦乙女",
               hp: 150000,
               imageno: 24,
               imageno_prefix: "",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_cursed(500, 5, 5, 0)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷斧のケンタウルス",
               hp: 150000,
               imageno: 48,
               imageno_prefix: "",
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_discharge(5, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光の戦乙女",
               hp: 150000,
               imageno: 24,
               imageno_prefix: "",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/* nogambits */
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
               name: "神話を彩る舞踏 ライトフラウ",
               hp: 25000,
               imageno: 13363,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
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
               name: "神話を彩る舞踏 ライトフラウ",
               hp: 25000,
               imageno: 13363,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb_all([0,0,0,1,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神話を彩る舞踏 ライトフラウ",
               hp: 25000,
               imageno: 13363,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,0,0], 1, 2))
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
            4
         ],
         enemy: [
            {
               name: "プラズマジェム",
               hp: 12,
               imageno: 36,
               imageno_prefix: "",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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
               name: "神話を彩る舞踏 ライトフラウ",
               hp: 700000,
               imageno: 13363,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb_all([0,0,0,1,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "月夜の聖女 サーシャ・スターライト",
               hp: 2000000,
               imageno: 13362,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 30000, 5, 1, true))
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
               name: "神話を彩る舞踏 ライトフラウ",
               hp: 700000,
               imageno: 13363,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
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
      }
   ]
}