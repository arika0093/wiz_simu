{
   id: "chromag6_kh1",
   name: "(2人協力)クロマグゼロ グランドが―コイル",
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
               name: "蒼鐵機鎧兵",
               hp: 1000000,
               imageno: 8286,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 3, 3, true),
                     s_enemy_as_sealed(3, 2),
                     s_enemy_force_reservoir()
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack(4800, 5, 1, true),
                     s_enemy_resurrection(0.25)
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 3, 3, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(4800, 5, 1, true),
                     s_enemy_attack(800, 3, 3, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(4800, 5, 1, true),
                     s_enemy_attack(800, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "魔の彫像 ガーゴイル",
               hp: 2000000,
               imageno: 8950,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true),
                     s_enemy_attack(5000, 1, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_angry: [
                     attr_change(1),
                     s_enemy_attack(5000, 1, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_statusup(true, 10, -1),
                     s_enemy_statusup(true, 10, -1),
                     s_enemy_attack(5000, 5, 1, true),
                     s_enemy_statusup(true, 10, -1),
                     s_enemy_statusup(true, 10, -1),
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 44,
                  wait: 44
               }
            },
            {
               name: "蒼鐵機鎧兵",
               hp: 1000000,
               imageno: 8286,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2250, 3, 1, true),
                     s_enemy_deathlimit(2, 6),
                     s_enemy_attack(2250, 3, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.25)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2250, 3, 1, true),
                     s_enemy_deathlimit(2, 6),
                     s_enemy_attack(2250, 3, 1, true),
                     s_enemy_deathlimit(2, 6),
                     s_enemy_attack(2250, 3, 1, true)
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
         name: "魔の解放 ガーゴイル",
         hp: 2500000,
         imageno: 8952,
         attr: 1,
         spec: 6,
         isStrong: false,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_attrguard_all/* Warning: 属性要確認： 全属性防御75%（2T） */, "-", 100, false, [1,1,1,1,1], 0.75, 3)),
               s_enemy_reverse(1)
            ],
            on_move: [
               s_enemy_cursed(1000, 5, 3),
               s_enemy_attack(1500, 5, 3, true),
               s_enemy_deathlimit(1, 2),
               s_enemy_poison(2000, 3, 5),
               s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 4)/* Warning: 属性要確認： 全属性弱体化25%（3T） */,
               s_enemy_attack(2250, 5, 3, true),
               s_enemy_deathlimit(1, 2),
               s_enemy_chain_break()
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}