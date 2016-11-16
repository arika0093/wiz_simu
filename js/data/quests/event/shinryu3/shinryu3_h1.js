{
   id: "shinryu3_h1",
   name: "初級 唐突な争い",
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
               name: "轟炎のヘイトフルドラゴン",
               hp: 35000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "火炎剛竜",
               hp: 35000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "火河竜",
               hp: 35000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
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
            2
         ],
         enemy: [
            {
               name: "燃えるヒッポポドラゴン",
               hp: 35000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "燃えるヒッポポドラゴン",
               hp: 30000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(2000, 5, 1, true)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のヘイトフルドラゴン",
               hp: 35000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
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
               name: "轟炎のヘイトフルドラゴン",
               hp: 35000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 30000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 40000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 3)),
                     s_enemy_attack(700, 5, 1, true)
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
            4
         ],
         enemy: [
            {
               name: "火炎剛竜",
               hp: 50000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.25, 4)/*!*/)
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のヘイトフルドラゴン",
               hp: 300000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2400, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 60000,
               imageno: 9486,
               attr: 0,
               spec: 0,
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
      }
   ]
}