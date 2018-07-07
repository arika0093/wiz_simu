{
   id: "verta10-4",
   name: "ヴェルタ10-4 そして、町に雪が降る",
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
               name: "雪降る森の隠者 カリフー",
               hp: 50000,
               imageno: 7169,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "雪降る森の隠者 カリフー",
               hp: 50000,
               imageno: 7169,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "雪降る森の隠者 カリフー",
               hp: 50000,
               imageno: 7169,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
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
               name: "花咲ける森の隠者 カリフー",
               hp: 40000,
               imageno: 7171,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(1500, 5, 1, true)),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "覗き返す青い鏡",
               hp: 70000,
               imageno: 7157,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(180, 3, 5, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
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
            3
         ],
         enemy: [
            {
               name: "覗き返す青い鏡",
               hp: 50000,
               imageno: 7157,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(180, 3, 5, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "覗き返す青い鏡",
               hp: 80000,
               imageno: 7157,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "5体のアンサースキルを封印する（5T）", 100, false, 5, 6))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3)),
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "覗き返す青い鏡",
               hp: 50000,
               imageno: 7157,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
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
               name: "寒々とした土地の魔草 プラティー",
               hp: 85000,
               imageno: 7182,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 6))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "追憶の器 スヴニアール",
               hp: 310000,
               imageno: 7198,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（5T） */, "5体を完全に封印する（5T）", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_heal_own(1)
                  ],
                  on_move_angry: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "肥沃な土地の魔草 プラティー",
               hp: 30,
               imageno: 7184,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
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