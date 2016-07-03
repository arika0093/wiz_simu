{
   id: "usg_h5",
   name: "航海級 後悔先に立たず",
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
               name: "スカーレットスクーパー",
               hp: 15,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_noeffect("タイム減少(10秒)")
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 40000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(700, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 40000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "スカーレットスクーパー",
               hp: 60000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(5, 2)),
                     s_enemy_attack(1200, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 60000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_panicshout(0, 5, 2)),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 70000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 5))
                  ],
                  on_move: [
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
            3
         ],
         enemy: [
            {
               name: "ブルースクーパー",
               hp: 50000,
               imageno: 8476,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(4))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 80000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(6000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 80000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [1,0,0,0,0], 1, 2))
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
            4
         ],
         enemy: [
            {
               name: "スカーレットスクーパー",
               hp: 120000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 火属性弱体化50%（3T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_deadgrudge(1000, 5000, 9000),
                     s_enemy_attack(666.6666666666666, 3, 3, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凶滅を秘めたる者 トランディア",
               hp: 450000,
               imageno: 8470,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 2)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true),
                     m_enemy_once(s_enemy_attack_ratio(0.8, 5, true))
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(833.3333333333334, 3, 3, true),
                     s_enemy_attack(833.3333333333334, 3, 3, true),
                     s_enemy_attack(833.3333333333334, 3, 3, true),
                     s_enemy_attack(833.3333333333334, 3, 3, true),
                     s_enemy_attack(833.3333333333334, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ウルトラマリンスクーパー",
               hp: 100000,
               imageno: 8477,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 2)),
                     s_enemy_attack(1200, 1, 1, true)
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