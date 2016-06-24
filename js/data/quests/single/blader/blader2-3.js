{
   id: "blader2-3",
   name: "Divine Blader 覇級",
   desc: "",
   overlap: false,
   aprnum: 4,
   panel_effect: [panel_chainplus(2)],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "シェセプ・アンク",
               hp: 80000,
               imageno: 1916,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リュウゼツラン・至聖",
               hp: 100000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     m_enemy_once(s_enemy_attack(4000, 5, 1, true)),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(4000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "シェセプ・アンク",
               hp: 80000,
               imageno: 1916,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
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
               name: "シェセプ・アンク",
               hp: 120000,
               imageno: 1916,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_break()),
                     s_enemy_attack(450, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カスケードドラゴン",
               hp: 50000,
               imageno: 1919,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     attack_counter(1000, 4)
                  ],
                  on_angry: [
                     s_enemy_deathlimit(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(120, 3, 5, true),
                     s_enemy_attack(120, 3, 5, true),
                     s_enemy_attack(120, 3, 5, true),
                     s_enemy_attack_deadgrudge(300, 600, 900)/* Warning: ダメージについて十分検証してください */,
                     s_enemy_attack(120, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リュウゼツラン・至聖",
               hp: 180000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(450, 3, 5, true)
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
               name: "シェム・ハ・メフォラシュ",
               hp: 120000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "継続大魔術（固定値：4000）3T ", 100, false, 3, 1000, 1000))
                  ],
                  on_move: [
                     s_enemy_attack(230, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "カスケードドラゴン",
               hp: 50000,
               imageno: 1919,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*case2*/
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
                     s_enemy_division(1)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(3, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_attack(200, 3, 5, true),
                     s_enemy_attack(200, 3, 5, true)
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
            4
         ],
         enemy: [
            {
               name: "シェム・ハ・メフォラシュ",
               hp: 150000,
               imageno: 1917,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(120, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魂を刈り取る廃堕魔神 ザラジュラム",
               hp: 1200000,
               imageno: 6111,
               attr: 2,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "5体に10連撃（DMG+500%）", 100, false, 750, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リュウゼツラン・至聖",
               hp: 300000,
               imageno: 1918,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 5, true)
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