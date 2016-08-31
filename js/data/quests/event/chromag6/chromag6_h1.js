{
   id: "chromag6_h1",
   name: "初級 争いの絶えぬ世界",
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
               name: "炎のごとき略奪者",
               hp: 40000,
               imageno: 8911,
               attr: 0,
               spec: 8,
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
               name: "邪炎鳥",
               hp: 40000,
               imageno: 8917,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "野望に燃える野盗",
               hp: 40000,
               imageno: 8910,
               attr: 0,
               spec: 8,
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
               name: "炎のごとき略奪者",
               hp: 50000,
               imageno: 8911,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "炎のごとき略奪者",
               hp: 60000,
               imageno: 8911,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
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
               name: "炎のごとき略奪者",
               hp: 50000,
               imageno: 8911,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
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
            3
         ],
         enemy: [
            {
               name: "流れた末の野盗",
               hp: 40000,
               imageno: 8912,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔火鳥",
               hp: 70000,
               imageno: 8916,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "流れた末の野盗",
               hp: 40000,
               imageno: 8912,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
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
               name: "魔火鳥",
               hp: 130000,
               imageno: 8916,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(4000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪炎鳥",
               hp: 400000,
               imageno: 8917,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 3))
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
               name: "野望に燃える野盗",
               hp: 25,
               imageno: 8910,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
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