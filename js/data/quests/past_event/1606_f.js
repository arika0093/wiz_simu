{
   id: "1606_f",
   name: "イベントトーナメント 封魔級",
   desc: "",
   overlap: false,
   aprnum: 3,
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
               hp: 10000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "黄炎の骨馬",
               hp: 10000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "黄炎の骨馬",
               hp: 10000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 1, 1, true)
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
               name: "黄炎の骨馬",
               hp: 10000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "閃焔の骨馬",
               hp: 10000,
               imageno: 763,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(4000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄炎の骨馬",
               hp: 10000,
               imageno: 762,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 1, 1, true)
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
            3
         ],
         enemy: [
            {
               name: "閃焔の骨馬",
               hp: 200000,
               imageno: 763,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP5000減少×10ターン", 100, false, 5000, 5, 11)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,0,0,0,0], 0.25, 6)/* Warning: 属性要確認： 火属性防御25%（5T） */),
                     s_enemy_attack(54.166666666666664, 5, 3, true)
                  ],
                  on_angry: [
                     damage_block_all(30000, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(54.166666666666664, 5, 3, true),
                     s_enemy_attack(54.166666666666664, 5, 3, true),
                     s_enemy_attack(54.166666666666664, 5, 3, true),
                     s_enemy_attack(54.166666666666664, 5, 3, true),
                     s_enemy_attack(54.166666666666664, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "閃焔の骨馬",
               hp: 400000,
               imageno: 763,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "継続大魔術（固定値：6000）3T ", 100, false, 3, 1500, 1500)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(166.66666666666666, 2, 3, true),
                     s_enemy_attack(166.66666666666666, 2, 3, true),
                     s_enemy_attack(166.66666666666666, 2, 3, true),
                     s_enemy_attack(166.66666666666666, 2, 3, true),
                     s_enemy_attack(166.66666666666666, 2, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "閃焔の骨馬",
               hp: 200000,
               imageno: 763,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 5体を完全に封印する（5T） */, "5体を完全に封印する（5T）", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_poison(300, 5, 6),
                     s_enemy_attack(83.33333333333333, 3, 3, true),
                     s_enemy_attack(83.33333333333333, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(1, 125, 125)
                  ],
                  on_move_angry: [
                     s_enemy_attack(83.33333333333333, 3, 3, true),
                     s_enemy_attack(83.33333333333333, 3, 3, true),
                     s_enemy_attack(83.33333333333333, 3, 3, true),
                     s_enemy_attack(83.33333333333333, 3, 3, true),
                     s_enemy_attack(83.33333333333333, 3, 3, true)
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