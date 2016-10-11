{
   id: "losteden2_th1",
   name: "祭り、極まる！",
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
               name: "不安因子",
               hp: 30,
               imageno: 9163,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 3, 1, true),
                     s_enemy_discharge(5, 2),
                     s_enemy_all_sealed(1, 3),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フェスティバル警備係 ムールス",
               hp: 2600000,
               imageno: 9214,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 10, 4000, 4000)),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(5000, 2, 1, true),
                     impregnable(2),
                     s_enemy_resurrection(0.5),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(15000, 1, 1, true),
                     s_enemy_cursed(1000, 5, 5)
                  ],
                  atrandom: false,
                  turn: 8,
                  wait: 1,
                  on_popup: [
                     s_enemy_reverse(0)
                  ]
               }
            },
            {
               name: "苦悶因子",
               hp: 1000000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.5, 100)/* Warning: 属性要確認： 全属性防御50%（99T） */),
                     attack_counter_dual(900, 5),
                     s_enemy_chain_sealed(5),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(8000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 5,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "獄門の鎖 ムールス",
         hp: 2600000,
         imageno: 9216,
         attr: 2,
         spec: 2,
         isStrong: false,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 10, 7500, 7500))
            ],
            on_move: [
               s_enemy_chain_break(),
               s_enemy_continue_damage(5, 2000, 2000),
               s_enemy_attrguard_all([1,1,1,1,1], 0.5, 100)/* Warning: 属性要確認： 全属性防御50%（99T） */,
               s_enemy_attack(2500, 3, 1, true),
               attack_counter_dual(700, 5),
               s_enemy_attack(2500, 3, 1, true),
               s_enemy_cursed(1000, 5, 5),
               s_enemy_force_reservoir(),
               s_enemy_attack(10000, 1, 1, true)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}