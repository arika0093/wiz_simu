{
   id: "bani910",
   name: "超魔道バーニングタワー 第10階 へ",
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
               name: "白兵型ブレードロード",
               hp: 300000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_all(30000, 4)),
                     damage_switch(s_enemy_when_after_turn(4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(3000, 5, 4)
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
               name: "鳥だけにとりあえずの研究成果",
               hp: 400000,
               imageno: 8276,
               attr: 1,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP5000減少×6ターン", 100, false, 5000, 5, 7)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
					 s_enemy_reverse(0),
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(5, 4),
                     s_enemy_cursed(1000, 5, 4),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 300000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     damage_switch(s_enemy_when_after_turn(6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
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
            }
         ]
      }
   ],
   revData: [
      {
         name: "鳥だけにとりあえずの研究成果",
         hp: 600000,
         imageno: 8277,
         attr: 3,
         spec: 4,
         isStrong: false,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP5000減少×6ターン", 100, false, 5000, 5, 7)),
               damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
            ],
			on_move: [
               s_enemy_attack(750, 5, 1, true),
			],
            on_angry: [
               damage_block_all(15000, 4),
            ],
            on_move_angry: [
               s_enemy_attack_ratio(0.9, 5, true),
               s_enemy_continue_damage(3, 500, 500),
               s_enemy_attack(300, 5, 5, true),
               s_enemy_attack(300, 5, 5, true),
               s_enemy_attack(300, 5, 5, true)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}