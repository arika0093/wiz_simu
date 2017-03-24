{
   id: "1703_h03",
   name: "(17/03)イベントトーナメント覇級[雷]",
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
               name: "光あふれる夢",
               hp: 60000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(5, 2)),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "機神の操者 スミオ＆エクスマキナ",
               hp: 90000,
               imageno: 5287,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3, 0)),
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光あふれる夢",
               hp: 60000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(5, 2)),
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
               name: "チャンスメドレー スパークラー",
               hp: 10,
               imageno: 8217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3)),
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
               name: "空戦支配の片翼 ローヴィ・フロイセ",
               hp: 100000,
               imageno: 6472,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99))
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
               name: "其れは雷を背負いし者",
               hp: 10,
               imageno: 7924,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3)),
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
            3
         ],
         enemy: [
            {
               name: "雷光のシュッツァー",
               hp: 50000,
               imageno: 8499,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄昏魔道 サンセット＝リフィル",
               hp: 40000,
               imageno: 7636,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "苦悶因子",
               hp: 50000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
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
               name: "光あふれる夢",
               hp: 40000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔道は海より広く アリエッタ・トワ",
               hp: 70000,
               imageno: 8429,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光あふれる夢",
               hp: 40000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
               name: "光あふれる夢",
               hp: 150000,
               imageno: 9404,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 1)),
                     damage_switch(s_enemy_when_after_turn(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_own(10, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
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
               name: "叛逆の大元帥 ディートリヒ・ベルク",
               hp: 220000,
               imageno: 9024,
               attr: 2,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.9), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(180, 5, 5, true),
                     s_enemy_attack(180, 5, 5, true),
                     s_enemy_attack(180, 5, 5, true),
                     s_enemy_attack(180, 5, 5, true),
                     s_enemy_attack(180, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャンスメドレー スパークラー",
               hp: 100000,
               imageno: 8217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.99, 5, true)),
                     m_enemy_once(s_enemy_cursed(400, 5, 3, 0)),
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
      }
   ]
}