{
   id: "museum_14",
   name: "14: 共鳴する力",
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
               name: "サンダーソードフィーンド",
               hp: 77000,
               imageno: 10223,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークガンフィーンド",
               hp: 66000,
               imageno: 10218,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
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
               name: "ダークガンフィーンド",
               hp: 77000,
               imageno: 10218,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(350, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エレクトロソードフィーンド",
               hp: 99000,
               imageno: 10224,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(10000, 99))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーソードフィーンド",
               hp: 99000,
               imageno: 10223,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
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
               name: "エレクトロソードフィーンド",
               hp: 77000,
               imageno: 10224,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(3)),
                     s_enemy_attack(2000, 1, 1, m_enemy_tgtype_minhp())
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ダークガンフィーンド",
               hp: 132000,
               imageno: 10218,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(350, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーソードフィーンド",
               hp: 77000,
               imageno: 10223,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2800, 1, 1, m_enemy_tgtype_maxhp())
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
               name: "ツインバウンサー：DF",
               hp: 165000,
               imageno: 10230,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_statusup(true, 20, 2, 0)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_statusup(true, 20, 2, 0),
                     s_enemy_attack(320, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(320, 5, 1, true),
                     s_enemy_attack(320, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Archfiend クロウヴン・フフ",
               hp: 1100000,
               imageno: 10205,
               attr: 2,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 3000, 5, 10, true)),
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_resurrection(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ツインバウンサー：AT",
               hp: 275000,
               imageno: 10229,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 3),
                     s_enemy_attack(160, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(160, 5, 1, true),
                     s_enemy_attack(160, 5, 1, true)
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