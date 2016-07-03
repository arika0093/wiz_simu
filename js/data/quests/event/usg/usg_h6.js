{
   id: "usg_h6",
   name: "覇級 魔道の王、降臨",
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
               name: "レッドスクーパー",
               hp: 40000,
               imageno: 8474,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "レッドスクーパー",
               hp: 60000,
               imageno: 8474,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 40000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_own(15000, 6)),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_noeffect("タイム減少(20秒)")
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
               name: "スカーレットスクーパー",
               hp: 50000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 120000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 100000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "タイム減少(30秒)"))
                  ],
                  on_move: [
                     s_enemy_attack(533.3333333333334, 3, 3, true)
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
               name: "レッドスクーパー",
               hp: 75000,
               imageno: 8474,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true)),
                     s_enemy_attack(750, 3, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 150000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "レモンイエロースクーパー",
               hp: 35000,
               imageno: 8479,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_continue_damage(1, 250, 250))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("タイム減少(20秒)")),
                     s_enemy_attack(300, 5, 2, true)
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
               name: "レモンイエロースクーパー",
               hp: 50000,
               imageno: 8479,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 750, 750)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 2, true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([0,0,1,0,0], 2, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 2, true),
                     s_enemy_attack(200, 5, 2, true),
                     s_enemy_attack(200, 5, 2, true),
                     s_enemy_attack(200, 5, 2, true),
                     s_enemy_attack(200, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "破滅の魔道王 ブブル・アルガムナド",
               hp: 550000,
               imageno: 8473,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 2, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_attr_absorb([0,0,0,1,0], 2, 4)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(541.6666666666666, 5, 3, true),
                     s_enemy_attack(541.6666666666666, 5, 3, true),
                     s_enemy_attack(541.6666666666666, 5, 3, true),
                     s_enemy_attack(541.6666666666666, 5, 3, true),
                     s_enemy_attack(1250, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スカーレットスクーパー",
               hp: 170000,
               imageno: 8475,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(700, 5, 2, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_noeffect("タイム減少(20秒)"),
                     s_enemy_noeffect("タイム減少(20秒)"),
                     s_enemy_noeffect("タイム減少(20秒)"),
                     s_enemy_attack(700, 5, 2, true),
                     s_enemy_attack(700, 5, 2, true)
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