{
   id: "satajo_ns6",
   name: "シークレット ４１人目の生徒",
   category: "satajo",
   desc: "",
   overlap: false,
   aprnum: 4,
   hidden: true,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "輝くデーモンゼリー",
               hp: 30000,
               imageno: 8060,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(1000, 5, 1, true)),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "魔界乙女のキラメキのしずく",
               hp: 35000,
               imageno: 8061,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_absorb(0.2, 5, 10000)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "輝くデーモンゼリー",
               hp: 25000,
               imageno: 8060,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.4, 5, true)),
                     s_enemy_attack(90, 3, 5, true)
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
               name: "しびれるデーモンゼリー",
               hp: 45000,
               imageno: 8056,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 全属性弱体化50%（3T） */),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "輝く月に吠える魔狼少女",
               hp: 30000,
               imageno: 8071,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 500ダメージ） 5体×5T", 100, false, 500, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 3, true),
                     s_enemy_attack(250, 5, 3, true),
                     s_enemy_attack(250, 5, 3, true),
                     s_enemy_attack(250, 5, 3, true),
                     s_enemy_attack(250, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "魔界乙女のキラメキのしずく",
               hp: 30000,
               imageno: 8061,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP3000減少×5ターン", 100, false, 3000, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 3, true)
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
               name: "光の魔狼少女",
               hp: 45000,
               imageno: 8070,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "スペシャルスキルの発動ターンを3遅める", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 4, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "輝く月に吠える魔狼少女",
               hp: 55000,
               imageno: 8071,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_break()),
                     s_enemy_discharge(5, 2),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "光の魔狼少女",
               hp: 52000,
               imageno: 8070,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 5, 1, true)
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
               name: "輝く月に吠える魔狼少女",
               hp: 80000,
               imageno: 8071,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（4T） */, "5体を完全に封印する（4T）", 100, false, 5, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 4, true)
                  ],
                  on_angry: [
                     s_enemy_attack(200, 5, 4, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 4, true),
                     s_enemy_attack(200, 5, 4, true),
                     s_enemy_attack(200, 5, 4, true),
                     s_enemy_attack(200, 5, 4, true),
                     s_enemy_attack(200, 5, 4, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "たゆたいの幽姫 コレル・シュケル",
               hp: 200000,
               imageno: 8073,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 6)),
                     damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 3)),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     s_enemy_panicshout(500, 5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(225, 5, 5, true),
                     s_enemy_attack(225, 5, 5, true),
                     s_enemy_attack(225, 5, 5, true),
                     s_enemy_attack(225, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔界乙女のキラメキのしずく",
               hp: 80000,
               imageno: 8061,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_panicshout(0, 5, 3)),
                     s_enemy_attack(150, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 3, 5, true),
                     s_enemy_attack(150, 3, 5, true),
                     s_enemy_attack(150, 3, 5, true),
                     s_enemy_attack(150, 3, 5, true),
                     s_enemy_attack(150, 3, 5, true)
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