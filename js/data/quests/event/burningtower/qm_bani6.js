{
   id: "bani6",
   name: "超魔道バーニングタワー 第6階 極",
   category: "burningtower",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "黄炎の骨馬",
               hp: 100000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "自分のみダメージブロック30000DMG×3T", 100, false, 30000, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 370000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP5000減少×6ターン", 100, false, 5000, 5, 6)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  on_angry: [
                     attr_change(2)/* Warning: 属性に十分注意してください */,
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_continue_damage(3, 500, 500)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：2000）3T */,
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄炎の骨馬",
               hp: 100000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "混乱（ターゲット対象味方のみ： 2000ダメージ） 5体×3T", 100, false, 2000, 5, 4)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 1000, 1000)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：4000）3T  */
                  ],
                  on_move_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1200, 5, 1, true)
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