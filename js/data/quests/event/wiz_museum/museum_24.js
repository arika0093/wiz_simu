{
   id: "museum_24",
   name: "24: 黒猫チャレンジ6",
   desc: "",
   overlap: false,
   aprnum: 4,
   battle_before: [{
      desc: "ch+4",
	  proc: panel_chainplus(4),
	  isev: true,
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ファイアグリフォン",
               hp: 120000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_poison(1000, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアグリフォン",
               hp: 150000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
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
               name: "ファイアグリフォン",
               hp: 150000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ブレイズグリフォン",
               hp: 200000,
               imageno: 10514,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.25, 5, 6)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアグリフォン",
               hp: 150000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_noeffect("s_enemy_panelchange([0,0,1,0,0])")
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
               name: "ファイアグリフォン",
               hp: 400000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,1,0,0,0], 25, 75, 100))
                  ],
                  on_move: [
                     s_enemy_attack(2200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ブレイズグリフォン",
               hp: 800000,
               imageno: 10514,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 3))
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
               name: "ファイアグリフォン",
               hp: 400000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_continue_damage(10, 500, 500))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
            4
         ],
         enemy: [
            {
               name: "ブレイズグリフォン",
               hp: 600000,
               imageno: 10514,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "無窮自在の大牙 エルロウ・グィーオ",
               hp: 2800000,
               imageno: 10506,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attrguard_all([0,1,0,0,0], 0.25, 11),
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_heal_all(1)
                  ],
                  on_move_angry: [
                     s_enemy_cursed_break(5, 2),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_cursed_break(5, 2),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ブレイズグリフォン",
               hp: 600000,
               imageno: 10514,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 99)),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアグリフォン",
               hp: 300000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
                  ],
                  on_move: [
                     s_enemy_chainreduce(20)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアグリフォン",
               hp: 300000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
                  ],
                  on_move: [
                     s_enemy_chainreduce(20)
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