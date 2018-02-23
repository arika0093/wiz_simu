{
   id: "1802ev_h",
   name: "(18/02)イベントトーナメント 覇級",
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
               name: "絶対に譲らない神",
               hp: 50000,
               imageno: 8850,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,0,1,0], 1, 1))
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
               name: "引き際を知らぬ神 リッキー・リック",
               hp: 10000,
               imageno: 8833,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "絶対に譲らない神",
               hp: 10000,
               imageno: 8850,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 10000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 10000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
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
               name: "砂を食む夢",
               hp: 20000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光を求める夢",
               hp: 30000,
               imageno: 9396,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,1,1,0,0], 0.99, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "砂を食む夢",
               hp: 20000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カッと降り落ちる夢",
               hp: 20000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カッと降り落ちる夢",
               hp: 20000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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
               name: "青き影より呼びかけるもの",
               hp: 20000,
               imageno: 8925,
               attr: 1,
               spec: 2,
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
               name: "蘇りし屍人たちの王 ヴァヌスス",
               hp: 20000,
               imageno: 10345,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_attack(100, 5, 1, true)/* Warning: usedでないgambitがあります。 */
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     m_enemy_once(damage_block_all(20000, 5)),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     m_enemy_once(damage_block_all(20000, 5)),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     m_enemy_once(damage_block_all(20000, 5)),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青き影より呼びかけるもの",
               hp: 20000,
               imageno: 8925,
               attr: 1,
               spec: 2,
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
               name: "グルドラン帝国蒼鋭兵",
               hp: 20000,
               imageno: 10355,
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
               name: "グルドラン帝国蒼鋭兵",
               hp: 20000,
               imageno: 10355,
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
            4
         ],
         enemy: [
            {
               name: "シャイニングサイボーグ歌仙",
               hp: 300000,
               imageno: 9900,
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(100000, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "玉座魔歌仙 スローン・シート",
               hp: 20,
               imageno: 9854,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイシクルサイボーグ歌仙",
               hp: 10000,
               imageno: 9862,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_attack(100, 5, 1, true)/* Warning: usedでないgambitがあります。 */
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドハートサイボーグ歌仙",
               hp: 10000,
               imageno: 9868,
               attr: 1,
               spec: 8,
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
               name: "コールドハートサイボーグ歌仙",
               hp: 10000,
               imageno: 9868,
               attr: 1,
               spec: 8,
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
            5
         ],
         enemy: [
            {
               name: "覆水を返す夢",
               hp: 900000,
               imageno: 10786,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_fear(5, 0, 0.5, [1,1,1,1,1]))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黎明魔道 ディルクルム",
               hp: 2200000,
               imageno: 10772,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ratio, "-", 100, false, 0.99, 5, true)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_recoilAttack(500, 5, [0,0,1,0,0], 2, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "覆水を返す夢",
               hp: 500000,
               imageno: 10786,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光あふれる夢",
               hp: 300000,
               imageno: 9404,
               attr: 3,
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
            },
            {
               name: "光あふれる夢",
               hp: 150000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(1, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 5, true)
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