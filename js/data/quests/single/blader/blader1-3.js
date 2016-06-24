{
   id: "blader1-3",
   name: "Demon’s Blader 覇級",
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
               hp: 80000,
               imageno: 2770,
               attr: 0,
               spec: 0,
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
               name: "ディバウアーゴーレム",
               hp: 60000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_sealed(4)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ディバウアーゴーレム",
               hp: 80000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_break()
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
               name: "ディバウアーゴーレム",
               hp: 100000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 600ダメージ） 5体×3T", 100, false, 600, 5, 4))
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
               name: "ヘルファイアドラゴン",
               hp: 150000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(700, 5, 4)),
                     s_enemy_poison(700, 5, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 100000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 4))
                  ],
                  on_move: [
                     damage_block_own(10000, 4)
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
            3
         ],
         enemy: [
            {
               name: "ヴォルテックスドラゴン",
               hp: 120000,
               imageno: 2772,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（3T） */, "5体を完全に封印する（3T）", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 100000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(3, 1000, 1000)),
                     s_enemy_continue_damage(3, 1000, 1000)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 25,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2000, 5, 1, true)
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
               name: "ヘルファイアドラゴン",
               hp: 200000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 3))
                  ],
                  on_move: [
                     damage_block_own(30000, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "極獄の殲炎アスモデウス・トビト",
               hp: 1000000,
               imageno: 8420,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 900ダメージ） 5体×3T", 100, false, 900, 5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(1, 500, 500))
                  ],
                  on_angry: [
                     s_enemy_noeffect('s_enemy_statusup',(3, 1, 5))/* Warning: シミュレータのほう実装してください・・ */
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 100000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "スペシャルスキルの発動ターンを99遅める", 100, false, 5, 99))
                  ],
                  on_move: [
                     s_enemy_panicshout(900, 5, 3),
                     s_enemy_poison(1000, 5, 4),
                     s_enemy_attack(500, 5, 1, true)
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