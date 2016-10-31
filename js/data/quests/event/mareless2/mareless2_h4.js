{
   id: "mareless2_h4",
   name: "封魔級 火花散る意思",
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
               hp: 40000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ぎらり光る夢",
               hp: 50000,
               imageno: 9402,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_all(15000, 4)),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "砂を食む夢",
               hp: 40000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
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
               name: "砂を食む夢",
               hp: 55000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "砂を食む夢",
               hp: 70000,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true))
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
               name: "熱を帯びたる夢",
               hp: 45000,
               imageno: 9398,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(attack_counter_dual, "-", 100, false, 1000, 6))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 4, true),
                     s_enemy_attack(150, 3, 4, true)
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
               name: "砂を食む夢",
               hp: 25,
               imageno: 9395,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カッと降り落ちる夢",
               hp: 75000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "パネル変換")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 25,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
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
               hp: 200000,
               imageno: 9403,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "パネル変換"))
                  ],
                  on_move: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "〈レベルメア〉反抗の夢",
               hp: 600000,
               imageno: 9376,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 750)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 1500, 1500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤き血を求める夢",
               hp: 180000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 3)/* Warning: 属性要確認： 火属性弱体化50%（2T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 4, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 3, 4, true),
                     s_enemy_attack(150, 3, 4, true),
                     s_enemy_attack(150, 3, 4, true),
                     s_enemy_attack(150, 3, 4, true),
                     s_enemy_attack(150, 3, 4, true)
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