{
   id: "test",
   name: "魔道杯乱舞 テスト",
   category: "other",
   desc: "",
   overlap: false,
   aprnum: 1,
   limitturn: 3,
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
               name: "test1",
               hp: 200000,
               imageno: 6909,
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(3, 1500, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：6000）、継続効果値（固定値：3000）3T */),
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "test2",
               hp: 4000,
               imageno: 6907,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                  ],
                  on_move: [
                     s_enemy_continue_damage(3, 3000, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "test3",
               hp: 80,
               imageno: 6906,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */, "継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T", 100, false, 3, 3000, 750)),
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 3000, 750)/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：12000）、継続効果値（固定値：3000）3T */
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