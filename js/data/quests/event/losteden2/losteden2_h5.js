{
   id: "losteden2_h5",
   name: "絶級 宿命の、殺し合い",
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
               name: "凍てつきを偽る竜",
               hp: 50000,
               imageno: 9156,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
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
               name: "凍えを偽る竜",
               hp: 60000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "凍てつきを偽る竜",
               hp: 70000,
               imageno: 9156,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
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
            2
         ],
         enemy: [
            {
               name: "凍えを偽る竜[OD]",
               hp: 70000,
               imageno: 9155,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1500, 2, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "凍てつきを偽る竜",
               hp: 70000,
               imageno: 9156,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "不安因子",
               hp: 50000,
               imageno: 9163,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "悲劇因子",
               hp: 80000,
               imageno: 9162,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 1600, 5, 3))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐怖因子",
               hp: 50000,
               imageno: 9159,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(832.5, 416.25, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "不幸因子[OD]",
               hp: 80000,
               imageno: 9161,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4))
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
               name: "凍てつきを偽る竜",
               hp: 220000,
               imageno: 9156,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 1600, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "殺戮の恋人 マッド・ルシエラ[OD]",
               hp: 700000,
               imageno: 9141,
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  on_angry: [
                     damage_block_own(30000, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(360, 3, 5, true),
                     s_enemy_attack(360, 3, 5, true),
                     s_enemy_attack(360, 3, 5, true),
                     s_enemy_attack(360, 3, 5, true),
                     s_enemy_attack(360, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "苦悶因子",
               hp: 180000,
               imageno: 9164,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */),
                     s_enemy_attack(500, 3, 1, true)
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