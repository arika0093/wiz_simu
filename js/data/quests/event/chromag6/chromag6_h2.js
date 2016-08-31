{
   id: "chromag6_h2",
   name: "中級 竜の宝を求めて",
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
               name: "怒涛のごとき略奪者",
               hp: 40000,
               imageno: 8913,
               attr: 1,
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
               name: "魔水鳥",
               hp: 50000,
               imageno: 8918,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪氷鳥",
               hp: 40000,
               imageno: 8919,
               attr: 1,
               spec: 2,
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
               name: "流れた末の野盗",
               hp: 50000,
               imageno: 8912,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "怒涛のごとき略奪者",
               hp: 60000,
               imageno: 8913,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */)
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
               name: "魔水鳥",
               hp: 60000,
               imageno: 8918,
               attr: 1,
               spec: 2,
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
            3
         ],
         enemy: [
            {
               name: "邪氷鳥",
               hp: 60000,
               imageno: 8919,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3)),
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪炎鳥",
               hp: 30000,
               imageno: 8917,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(833, 416.5, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "怒涛のごとき略奪者",
               hp: 60000,
               imageno: 8913,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
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
               name: "邪雷鳥",
               hp: 150000,
               imageno: 8921,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 6))
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
               name: "刃翼の魔道竜 フェルム",
               hp: 450000,
               imageno: 8894,
               attr: 1,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 30000, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_poison(1000, 5, 3),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "流れた末の野盗",
               hp: 200000,
               imageno: 8912,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 500, 5, 5))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_attack(3000, 5, 1, true)
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