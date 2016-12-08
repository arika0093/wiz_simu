{
   id: "mareless1_h6",
   name: "夢喰級 玉響tearless",
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
               name: "嘲笑い猛る夢",
               hp: 35000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "嘲笑い猛る夢",
               hp: 35000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
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
               name: "稲光り猛る夢",
               hp: 65000,
               imageno: 7680,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(4000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "嘲笑い猛る夢",
               hp: 50000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲光り猛る夢",
               hp: 50000,
               imageno: 7680,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5))
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
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
               name: "嘲笑い猛る夢",
               hp: 35000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
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
               name: "稲光り猛る夢",
               hp: 70000,
               imageno: 7680,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "嘲笑い猛る夢",
               hp: 35000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
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
               name: "稲光り猛る夢",
               hp: 150000,
               imageno: 7680,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(4))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "夢喰らう妖精の化身 アフリト",
               hp: 450000,
               imageno: 7667,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_discharge(5, 1),
                     s_enemy_attack(260, 5, 5, true),
                     s_enemy_attack(260, 5, 5, true),
                     s_enemy_attack(260, 5, 5, true),
                     s_enemy_attack(260, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "嘲笑い猛る夢",
               hp: 250000,
               imageno: 7681,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 10000, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_attack(150, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_attack(150, 3, 3, true)
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