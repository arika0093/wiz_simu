{
   id: "bani2",
   name: "超魔道バーニングタワー 第2階 魔",
   category: "burning",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{desc:"SPスキルが使用できる状態で開始",proc:ss_skillboost(99)},{proc:ss_consume_all(1)},{proc:ss_consume_all(1)}, {proc:ss_resurrection([1,1,1,1,1], 1)}],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ディバウアーゴーレム",
               hp: 25,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_poison(500, 5, 3)
                  ],
                  on_angry: [
                     s_enemy_chain_sealed(4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ボラルグラナ",
               hp: 300000,
               imageno: 3878,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "スペシャルスキルの発動ターンを99遅める", 100, false, 5, 99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     damage_block_own(10000, 11)
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(5, 3),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 300000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 11)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(66.66666666666667, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(5000, 5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(66.66666666666667, 3, 3, true),
                     s_enemy_attack(66.66666666666667, 3, 3, true),
                     s_enemy_attack(66.66666666666667, 3, 3, true),
                     s_enemy_attack(66.66666666666667, 3, 3, true),
                     s_enemy_attack(66.66666666666667, 3, 3, true)
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