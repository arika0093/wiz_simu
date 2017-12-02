{
   id: "museum_15",
   name: "15: 哀しき一族のために",
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
               name: "あっつ～い魔夏のしずく",
               hp: 72000,
               imageno: 11049,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "あっつ～い魔夏のしずく",
               hp: 72000,
               imageno: 11049,
               attr: 0,
               spec: 2,
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
               name: "あっつ～い魔夏のしずく",
               hp: 72000,
               imageno: 11049,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(500, 5, 5)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏のシャクネツ魔狼少女",
               hp: 72000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "魔夏のシャクネツ魔狼少女",
               hp: 72000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
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
               name: "魔夏のシャクネツ魔狼少女",
               hp: 96000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "あっつ～い魔夏のしずく",
               hp: 96000,
               imageno: 11049,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrreverse(5, 5)),
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏のシャクネツ魔狼少女",
               hp: 96000,
               imageno: 11056,
               attr: 0,
               spec: 2,
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
               name: "魔夏のシャクネツ魔狼少女",
               hp: 96000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "きらっきら魔夏のしずく",
               hp: 96000,
               imageno: 11054,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)),
                     s_enemy_attack(1250, 1, 1, true)
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
               name: "魔夏のデンゲキ魔狼少女",
               hp: 60000,
               imageno: 11060,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(999.75, 333.25, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "あっつ～い魔夏のしずく",
               hp: 120000,
               imageno: 11049,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 2, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_deadgrudge(600, 900, 1200, true),
                     s_enemy_attack_deadgrudge(600, 900, 1200, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "しびれ～る魔夏のしずく",
               hp: 60000,
               imageno: 11053,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(999.75, 333.25, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "あっつ～い魔夏のしずく",
               hp: 96000,
               imageno: 11049,
               attr: 0,
               spec: 2,
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
               name: "あっつ～い魔夏のしずく",
               hp: 96000,
               imageno: 11049,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
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
            4
         ],
         enemy: [
            {
               name: "夢無き恋天使 アングリー・ギブン",
               hp: 480000,
               imageno: 11038,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 2)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_statusup(true, 0, -1, 200000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "夢無き恋天使 アングリー・ギブン",
               hp: 1200000,
               imageno: 11038,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 18000, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack_deadgrudge(900, 1800, 2700, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "夢無き恋天使 アングリー・ギブン",
               hp: 480000,
               imageno: 11038,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_statusup(true, 100, -1, 0)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "夢無き恋天使 アングリー・ギブン",
               hp: 360000,
               imageno: 11038,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(1000, 5, 5)),
                     s_enemy_heal_all(0.25),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "夢無き恋天使 アングリー・ギブン",
               hp: 360000,
               imageno: 11038,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 100))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(1, 5)),
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