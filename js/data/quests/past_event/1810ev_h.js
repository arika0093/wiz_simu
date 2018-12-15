{
   id: "1810ev_h",
   name: "(2018/10)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: false,
   panel_effect: [
     panel_attr_guard([1,1,1,1,1], 0.8)
   ],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "黒みそなめ",
               hp: 10000,
               imageno: "13199",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黒みそなめ",
               hp: 50000,
               imageno: "13199",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黒みそなめ",
               hp: 10000,
               imageno: "13199",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
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
               name: "白みそなめ",
               hp: 50000,
               imageno: "13198",
               imageno_prefix: "W4ripe_",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光る獅子不舞",
               hp: 50000,
               imageno: "13200",
               imageno_prefix: "W4ripe_",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  on_dead: [
                     s_enemy_allySkillCharge(5, 1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "白みそなめ",
               hp: 50000,
               imageno: "13198",
               imageno_prefix: "W4ripe_",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
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
               name: "光る獅子不舞",
               hp: 100000,
               imageno: "13200",
               imageno_prefix: "W4ripe_",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  on_dead: [
                     s_enemy_cursed(0, 5, 2, 20000)
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
               name: "暗い獅子不舞",
               hp: 4,
               imageno: "13201",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗い獅子不舞",
               hp: 10,
               imageno: "13201",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  on_dead: [
                     s_enemy_attack(6000, 3, 8, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗い獅子不舞",
               hp: 4,
               imageno: "13201",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
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
               name: "黒みそなめ",
               hp: 200000,
               imageno: "13199",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Passionの神話 Mr.ボブ",
               hp: 700000,
               imageno: 13213,
               imageno_prefix: "",
               attr: 3,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,0,1,0], 1, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗い獅子不舞",
               hp: 200000,
               imageno: "13201",
               imageno_prefix: "W4ripe_",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
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