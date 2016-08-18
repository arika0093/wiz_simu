{
   id: "usg_h2",
   name: "森林級 逃走経路",
   desc: "",
   overlap: false,
   aprnum: 4,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "燃え盛る守護者",
               hp: 35000,
               imageno: 8494,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 4, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 50000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "燃え盛る守護者",
               hp: 35000,
               imageno: 8494,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_noeffect("タイム減少(20秒)")
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
               name: "轟炎のシュッツァー",
               hp: 35000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_noeffect("タイム減少(20秒)")
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 50000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 3)/* Warning: 属性要確認： 火属性弱体化50%（2T） */)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "氷結のシュッツァー",
               hp: 50000,
               imageno: 8497,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
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
               name: "氷結のシュッツァー",
               hp: 40000,
               imageno: 8497,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_weaken, "全属性弱体化100%(5T)", 100, false, [1,1,1,0,0], 2, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 30,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(700, 5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1333.3333333333333, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 60000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_noeffect("タイム減少(20秒)")
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
               name: "轟炎のシュッツァー",
               hp: 130000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 400000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 30000, 5)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 180000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true),
                     s_enemy_noeffect("タイム減少(20秒)")
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            }
         ]
      }
   ]
}