{
   id: "1804ev_h",
   name: "(18/04)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "血塗られた〈悪夢のかけら〉",
               hp: 30000,
               imageno: "12455",
               imageno_prefix: "Ut5EsG_",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_steal(100, 5))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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
               name: "強襲する〈悪夢のかけら〉",
               hp: 300000,
               imageno: "12459",
               imageno_prefix: "Ut5EsG_",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(100000, 99))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_discharge(5, 10)
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
               name: "閃く〈悪夢のかけら〉",
               hp: 100000,
               imageno: "12458",
               imageno_prefix: "Ut5EsG_",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "強襲する〈悪夢のかけら〉",
               hp: 10,
               imageno: "12459",
               imageno_prefix: "Ut5EsG_",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(1))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "閃く〈悪夢のかけら〉",
               hp: 50000,
               imageno: "12458",
               imageno_prefix: "Ut5EsG_",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "光を求める夢",
               hp: 50000,
               imageno: 9396,
               imageno_prefix: "",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇を抱えた夢",
               hp: 400000,
               imageno: 9405,
               imageno_prefix: "",
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "光を求める夢",
               hp: 50000,
               imageno: 9396,
               imageno_prefix: "",
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,0,1,0], 1, 4))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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
            5
         ],
         enemy: [
            {
               name: "血塗られた〈悪夢のかけら〉",
               hp: 500000,
               imageno: "12455",
               imageno_prefix: "Ut5EsG_",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "天理嚮導 ディルクルム",
               hp: 1200000,
               imageno: "12453",
               imageno_prefix: "Ut5EsG_",
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_heal_all, "-", 100, false, 1))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "血塗られた〈悪夢のかけら〉",
               hp: 500000,
               imageno: "12455",
               imageno_prefix: "Ut5EsG_",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,0,0,1], 1, 4))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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