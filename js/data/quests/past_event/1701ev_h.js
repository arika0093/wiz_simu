{
   id: "1701ev_h",
   name: "(2017/01)イベントトーナメント 覇級",
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
               name: "ダークサイボーグ歌仙",
               hp: 7000,
               imageno: 9901,
               attr: 4,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 10000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークサイボーグ歌仙",
               hp: 7000,
               imageno: 9901,
               attr: 4,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
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
               name: "シャイニングサイボーグ歌仙",
               hp: 6000,
               imageno: 9900,
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 10000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "バーニンハートサイボーグ歌仙",
               hp: 6000,
               imageno: 9866,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)/*nogambits*/
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
               name: "ファイアーサイボーグ歌仙",
               hp: 8000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4, 2000))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スイートハートサイボーグ歌仙",
               hp: 10000,
               imageno: 9870,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 2))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "シャイニングサイボーグ歌仙",
               hp: 6000,
               imageno: 9900,
               attr: 3,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 3, 3))
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
            4
         ],
         enemy: [
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 10,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スイートハートサイボーグ歌仙",
               hp: 10000,
               imageno: 9870,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 10000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_panelchange([0,1,0,0,0])),
                     s_enemy_attack(100, 5, 3, true)
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
               name: "外道大臣 ゲスタイガー",
               hp: 100000,
               imageno: 9842,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([0,0,1,0,0], 3, 3)
                  ],
                  on_move_angry: [
                     s_enemy_ss_sealed(5, 2),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "玉座魔歌仙 スローン・シート",
               hp: 700000,
               imageno: 9854,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [1,1,1,1,1], 2, 3)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.5, 4)/* Warning: 属性要確認： 全属性防御50%（3T） */
                  ],
                  on_move_angry: [
                     damage_block_own(20000, 4),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_continue_damage(3, 1500, 1500),
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ナース機神 メカガトリン -想世-",
               hp: 70000,
               imageno: 9857,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     m_enemy_once(s_enemy_panicshout(0, 5, 3)),
                     s_enemy_attack(150, 5, 1, true)
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