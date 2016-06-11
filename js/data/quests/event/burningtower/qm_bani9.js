{
   id: "bani9",
   name: "超魔道バーニングタワー 第9階 塔",
   category: "burningtower",
   desc: "",
   overlap: false,
   aprnum: 1,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "クレセントシャドウ",
               hp: 200000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_continue_damage(2, 750, 750)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_continue_damage(2, 750, 750)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2500, 2500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 700000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 2000ダメージ） 5体×3T", 100, false, 2000, 5, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attr_change(0)/* Warning: 属性に十分注意してください */,
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 100000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(500, 5, 4)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(70, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_poison(1500, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(140, 5, 5, true),
                     s_enemy_attack(140, 5, 5, true),
                     s_enemy_attack(140, 5, 5, true),
                     s_enemy_attack(140, 5, 5, true),
                     s_enemy_attack(140, 5, 5, true)
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