{
   id: "grade19",
   name: "玖式(トーナメント19段)",
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
               name: "黄衣カムシーナ軽兵",
               hp: 5000,
               imageno: "13311",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ猟兵",
               hp: 10000,
               imageno: "13312",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ兵",
               hp: 5000,
               imageno: "13305",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ猟兵",
               hp: 5000,
               imageno: "13312",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ熟練兵",
               hp: 5000,
               imageno: "13306",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ兵",
               hp: 10000,
               imageno: "13305",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ熟練兵",
               hp: 10000,
               imageno: "13306",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_cursed(0, 5, 2, 2000)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄衣カムシーナ兵",
               hp: 10000,
               imageno: "13305",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ軽兵",
               hp: 10000,
               imageno: "13311",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
               name: "黄衣カムシーナ猟兵",
               hp: 10000,
               imageno: "13312",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
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
            3
         ],
         enemy: [
            {
               name: "黄衣カムシーナ猟兵",
               hp: 20000,
               imageno: "13312",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,1,1,0,0], 0.99, 3))
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
               name: "黄衣カムシーナ兵",
               hp: 5,
               imageno: "13305",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(3))
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
               name: "黄衣カムシーナ熟練兵",
               hp: 15,
               imageno: "13306",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(3))
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
               name: "黄衣カムシーナ軽兵",
               hp: 5,
               imageno: "13311",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(3))
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
            5
         ],
         enemy: [
            {
               name: "〈リンギオ〉の頭 カルマン",
               hp: 3000000,
               imageno: "13291",
               imageno_prefix: "r8Xgqs_",
               attr: 2,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_steal, "-", 100, false, 100, 5)),
                     m_enemy_once(s_enemy_statusup(false, 0, -1, 15000000)),
                     m_enemy_once(s_enemy_allySkillCharge(5, 1)),
                     s_enemy_statusReset(7)
                  ],
                  on_move: [
                     s_enemy_recoilAttack(1000, 5, [1,0,0,0,0], 1, 3),
                     s_enemy_attack_ratio(0.99, 5, true)
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