{
   id: "orlha_02h",
   name: "OR02 覇級 忌避されし報讐の邪悪",
   desc: "",
   overlap: false,
   aprnum: 4,
   battle_before: [{
      desc: "SP+4",
	  proc: panel_skillboost(4)
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "小麦色のシリェーナ",
               hp: 50000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黒紅のギガルス",
               hp: 50000,
               imageno: 4796,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(833.25, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "小麦色のシリェーナ",
               hp: 50000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "銀黄のトガラ",
               hp: 20,
               imageno: 4797,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "小麦色のシリェーナ",
               hp: 100000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "銀黄のトガラ",
               hp: 20,
               imageno: 4797,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "黒紅のギガルス",
               hp: 200000,
               imageno: 4796,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(333.3333333333333, 5, 3, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "小麦色のシリェーナ",
               hp: 50000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "小麦色のシリェーナ",
               hp: 50000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_multibarrier_all(15, 99)),
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
               name: "小麦色のシリェーナ",
               hp: 300000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(1, 5))
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
               name: "忌避されし報讐の邪悪 エンラ・プセ",
               hp: 2500000,
               imageno: 6121,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 100))/* Error: 二連続行動がおそらく存在するので要修正[通常時]: m_enemy_dualmove(a, b)を先制or初回行動に追加 */,
                     damage_switch(s_enemy_when_hpdown(0.7), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(1000, 5, 5),
                     s_enemy_multibarrier_own(15, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_noeffect("s_enemy_panelchange([1,0,0,0,0])"),
                     s_enemy_attack(5000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "銀黄のトガラ",
               hp: 150000,
               imageno: 4797,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 10000, 5, 1, true))
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
      }
   ]
}