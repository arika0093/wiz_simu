{
   id: "abcd6_2",
   name: "AbCd06 劫末の獣 劫初級",
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
               name: "リジョンディッシェル",
               hp: 50000,
               imageno: 4069,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "CODE:イェルセル《怪魔侵蝕》",
               hp: 50000,
               imageno: 8117,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "リジョンディッシェル",
               hp: 50000,
               imageno: 4069,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
            2
         ],
         enemy: [
            {
               name: "オーソナパトナ",
               hp: 20000,
               imageno: 3574,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(5, 4)),
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "CODE:イェルセル《思惟消失》",
               hp: 50000,
               imageno: 8118,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 1, 2, true),
                     s_enemy_attack(400, 1, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リジョンディッシェル",
               hp: 25,
               imageno: 4069,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
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
               name: "code:リュジスモンノワール",
               hp: 30000,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 4))
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
               name: "CODE:イェルセル《暴獣咆哮》",
               hp: 170000,
               imageno: 8119,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true),
                     s_enemy_division(0.5)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 1)
                  ],
                  on_move_angry: [
                     s_enemy_noeffect("パネルチェンジ(雷)"),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "code:リュジスモンノワール",
               hp: 30000,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 4))
                  ],
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
               name: "code:リュジスモンノワール",
               hp: 25,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_healreverse(1, 5),
                     s_enemy_attack(90, 5, 5, true),
                     s_enemy_attack(90, 5, 5, true),
                     s_enemy_attack(90, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "AbCd-Κ:《劫末を兆す怪物》",
               hp: 800000,
               imageno: 8120,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 800, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_panicshout(400, 5, 2)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(5, 4),
                     attack_counter(500, 4),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リジョンディッシェル",
               hp: 220000,
               imageno: 4069,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(210, 5, 5, true)
                  ],
                  on_move_angry: [
                     attack_counter(500, 2),
                     s_enemy_attack(210, 3, 5, true),
                     s_enemy_attack(210, 3, 5, true),
                     s_enemy_attack(210, 3, 5, true),
                     s_enemy_attack(210, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}