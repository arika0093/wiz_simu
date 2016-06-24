{
   id: "blader4-2",
   name: "Tempest Blader 破槍級",
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
               name: "ヘルファイアドラゴン",
               hp: 60000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 70000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 45000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_resurrection(1)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "ヘルファイアドラゴン",
               hp: 60000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 150000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1500, 100)/* Warning: かなり怪しい物理カウンター */)
                  ],
                  on_move: [
                     s_enemy_ss_sealed(3, 4),
                     s_enemy_as_sealed(5, 4)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 60000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
               name: "捕縛型マニュピュレーター",
               hp: 160000,
               imageno: 5352,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(250, 3)/* Warning: かなり怪しい物理カウンター */)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 5, true),
                     s_enemy_ss_sealed(3, 4),
                     attack_counter(250, 3)/* Error: 未定義のActionです： 6 *//* Warning: かなり怪しい物理カウンター */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 25,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.5, 5, true)
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
               name: "強襲型マインソルジャー",
               hp: 80000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(8000, 5))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "破槍の獄炎帝 ブリューダイン・ギア",
               hp: 800000,
               imageno: 6114,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1250, 3)/* Warning: かなり怪しい物理カウンター */)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 100000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed/* Error: 未定義のActionです： 7 */, "2体を2ターンスキル封印", 100, false, 3, 2))
                  ],
                  on_move: [
                     s_enemy_ss_sealed(3, 2),
                     s_enemy_poison(1200, 5, 3),
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_cursed(0, 5, 1)/* Warning: 特殊効果解除。HP降下0ののろいで代用 */
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