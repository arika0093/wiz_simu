{
   id: "mareless2_h1",
   name: "初級 悪夢追撃",
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
               name: "塵芥をまとう夢",
               hp: 30000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ぎらり光る夢",
               hp: 30000,
               imageno: 9402,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 30000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*nogambits*/
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
               name: "塵芥をまとう夢",
               hp: 35000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 40000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カッと降り落ちる夢",
               hp: 60000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_noeffect("スコア減少2000")
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
               name: "塵芥をまとう夢",
               hp: 55000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "砂を食む夢",
               hp: 65000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 55000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
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
               name: "カッと降り落ちる夢",
               hp: 150000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("スコア減少2000")),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ぎらり光る夢",
               hp: 350000,
               imageno: 9402,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 40000, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 150000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 雷属性弱体化50%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(3000, 1, 1, true)
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