{
   id: "shinryu3_h3",
   name: "上級 王を賭けた戦い",
   desc: "",
   overlap: false,
   aprnum: 4,
   battle_before: [{
      desc: "竜族のSPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge_spec(0)
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "雷撃剛竜",
               hp: 50000,
               imageno: 9484,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "雷撃剛竜",
               hp: 50000,
               imageno: 9484,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 50000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_poison(500, 5, 3)
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
               name: "火炎剛竜",
               hp: 50000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(1500, 5, 1, true)),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "痺河竜",
               hp: 60000,
               imageno: 9490,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "騒がしいヒッポポドラゴン",
               hp: 70000,
               imageno: 9491,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_as_sealed(5, 4),
                     s_enemy_attack(300, 3, 4, true)
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
               name: "騒がしいヒッポポドラゴン",
               hp: 80000,
               imageno: 9491,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 2000, 2000))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 90000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)/*!*/)
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
               name: "燃えるヒッポポドラゴン",
               hp: 50000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_deathlimit(5, 4),
                     s_enemy_attack(600, 5, 1, true)
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
            4
         ],
         enemy: [
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 90000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 5))
                  ],
                  on_move: [
                     s_enemy_as_sealed(3, 4),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "竜骸獣 ログオーズ",
               hp: 600000,
               imageno: 9461,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 11)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)/*!*/
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "騒がしいヒッポポドラゴン",
               hp: 20,
               imageno: 9491,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_poison(2000, 5, 3),
                     s_enemy_attack(291.6666666666667, 4, 3, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(328.125, 4, 4, true)
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