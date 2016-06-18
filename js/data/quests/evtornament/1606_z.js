{
   id: "1606_z",
   name: "イベントトーナメント 絶級",
   desc: "",
   overlap: false,
   aprnum: 2,
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
               name: "ディバウアーゴーレム",
               hp: 40000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ディバウアーゴーレム",
               hp: 40000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ディバウアーゴーレム",
               hp: 40000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
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
               name: "ヘルファイアドラゴン",
               hp: 550000,
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
                     s_enemy_cursed(400, 5, 3)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 3, 5, true),
                     s_enemy_attack(300, 5, 5, true),
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
               name: "ファハシュヴァイル",
               hp: 500000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（5T） */, "5体を完全に封印する（5T）", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 5, true)
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     damage_block_own(10000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_poison(300, 5, 3),
                     s_enemy_attack(83.33333333333333, 5, 3, true),
                     s_enemy_attack(83.33333333333333, 5, 3, true),
                     s_enemy_attack(83.33333333333333, 5, 3, true),
                     s_enemy_attack(83.33333333333333, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
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
                     m_enemy_once(damage_block_own(15000, 4)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(900, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            }
         ]
      }
   ]
}