{
   id: "bani1",
   name: "超魔道バーニングタワー 第1階 超",
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
               name: "神水の使徒",
               hp: 50000,
               imageno: 6909,
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 11)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */),
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 1)
                  ],
                  on_move_angry: [
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */,
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */,
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */,
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */,
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "浄炎の使徒",
               hp: 400000,
               imageno: 6907,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_continue_damage(3, 3000, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     skill_counter_func(s_enemy_continue_damage/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */, "継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T", 100, false, 3, 1500, 750)
                  ],
                  on_move_angry: [
                     s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */,
                     s_enemy_attack(300, 3, 4, true),
                     s_enemy_attack(300, 3, 4, true),
                     s_enemy_attack(900, 3, 4, true),
                     s_enemy_attack(900, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "浄火の使徒",
               hp: 300000,
               imageno: 6906,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */, "継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T", 100, false, 3, 3000, 750)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 3000, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */
                  ],
                  on_move_angry: [
                     s_enemy_continue_damage(3, 3000, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */,
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true)
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