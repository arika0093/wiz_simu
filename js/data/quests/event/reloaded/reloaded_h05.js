{
   id: "reloaded_h05",
   name: "絶級 古の真実",
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
               name: "Ｃヘルバ・フリーズ",
               hp: 120000,
               imageno: 11431,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・フリーズ",
               hp: 50000,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・アイス",
               hp: 120000,
               imageno: 11436,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "Ｃインセクタ・フリーズ",
               hp: 20,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・ダーク",
               hp: 100000,
               imageno: 11441,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3)),
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・フリーズ",
               hp: 20,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "Ｃインセクタ・ダーク",
               hp: 150000,
               imageno: 11441,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・フリーズ",
               hp: 100000,
               imageno: 11431,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 6)/* Warning: 属性要確認： 全属性弱体化50%（5T） */)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・ダーク",
               hp: 50000,
               imageno: 11441,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "Ｃインセクタ・ダーク",
               hp: 300000,
               imageno: 11441,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 6, 1000, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "古の真実 アヴリオ＆エゴイプセ",
               hp: 1500000,
               imageno: 11424,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 15000, 5, 1, true)),
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 0.15, 0.75, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 3, true),
                     s_enemy_attack(1000, 5, 3, true),
                     s_enemy_attack(1000, 5, 3, true),
                     s_enemy_attack(1000, 5, 3, true),
                     s_enemy_attack(1000, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・サンダー",
               hp: 150000,
               imageno: 11438,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
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