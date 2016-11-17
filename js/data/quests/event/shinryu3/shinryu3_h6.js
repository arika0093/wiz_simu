{
   id: "shinryu3_h6",
   name: "魔竜級 その名を知る者",
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
               name: "騒がしいヒッポポドラゴン",
               hp: 60000,
               imageno: 9491,
               attr: 2,
               spec: 0,
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
               name: "痺河竜",
               hp: 60000,
               imageno: 9490,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.25, 5, 4)/*!*/),
                     s_enemy_attack(400, 3, 3, true)
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
            2
         ],
         enemy: [
            {
               name: "静かなヒッポポドラゴン",
               hp: 50000,
               imageno: 9489,
               attr: 1,
               spec: 0,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_attrsp(805, 230, [1,0,0,0,0], 5, 1, false)),
                     s_enemy_attack(375, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "痺河竜",
               hp: 70000,
               imageno: 9490,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 4)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "雷撃剛竜",
               hp: 80000,
               imageno: 9484,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(3000, 1, 1, true)
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
               name: "痺河竜",
               hp: 120000,
               imageno: 9490,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 100000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_sealed, "-", 100, false, 6))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻のヘイトフルドラゴン",
               hp: 100000,
               imageno: 9485,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
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
            4
         ],
         enemy: [
            {
               name: "轟炎のヘイトフルドラゴン",
               hp: 200000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2500, 1, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "偽りの微笑 アレンティノ",
               hp: 900000,
               imageno: 9472,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 600, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4)/*!*/,
                     s_enemy_deathlimit(3, 3),
                     damage_block_own(30000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(875, 5, 1, true),
                     s_enemy_absorb(0.5, 5, 500000),
                     s_enemy_attack(875, 5, 1, true),
                     s_enemy_attack(875, 5, 1, true),
                     s_enemy_attack(875, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷撃剛竜",
               hp: 300000,
               imageno: 9484,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/*!*/),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2000, 2000),
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true)
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