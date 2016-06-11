{
   id: "bani7",
   name: "超魔道バーニングタワー 第7階 炎",
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
               name: "ヘルファイアドラゴン",
               hp: 200000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(impregnable, "絶対防御×3T", 100, false, 3)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(1500, 4)
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
               name: "ファハシュヴァイル",
               hp: 400000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage/* Warning: 相当動作が怪しいので必ず実機検証してください。:継続大魔術（固定値：10000）3T */, "継続大魔術（固定値：10000）3T", 100, false, 3, 2500, 2500)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     damage_block_own(10000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_chain_break(),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 300000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(800, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(900, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true)
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