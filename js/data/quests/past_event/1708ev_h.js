{
   id: "1708ev_h",
   name: "(2017/08)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "きらっきら魔夏のしずく",
               hp: 65000,
               imageno: 11054,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏の夜の魔狼少女",
               hp: 120000,
               imageno: 11061,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "きらっきら魔夏のしずく",
               hp: 65000,
               imageno: 11054,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏の夜の魔狼少女",
               hp: 65000,
               imageno: 11061,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏の夜の魔狼少女",
               hp: 65000,
               imageno: 11061,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
               name: "痺感サマーデーモンゼリー",
               hp: 100000,
               imageno: 11052,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "痺感サマーデーモンゼリー",
               hp: 150000,
               imageno: 11052,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 雷属性弱体化50%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "痺感サマーデーモンゼリー",
               hp: 100000,
               imageno: 11052,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
               name: "魔夏の夜の魔狼少女",
               hp: 180000,
               imageno: 11061,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chainreduce(6))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "魔夏のシャクネツ魔狼少女",
               hp: 60000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(6))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "しびれ～る魔夏のしずく",
               hp: 70000,
               imageno: 11053,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔夏のシャクネツ魔狼少女",
               hp: 60000,
               imageno: 11056,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
            5
         ],
         enemy: [
            {
               name: "きらっきら魔夏のしずく",
               hp: 300000,
               imageno: 11054,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "老いたる魔獅子 ジェラール・イニス",
               hp: 500000,
               imageno: 11034,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 1, 5)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "きらっきら魔夏のしずく",
               hp: 300000,
               imageno: 11054,
               attr: 3,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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