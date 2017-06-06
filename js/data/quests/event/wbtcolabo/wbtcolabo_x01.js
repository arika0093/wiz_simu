{
   id: "wbtcolabo_x01",
   name: "神曲級 アイドルの極み",
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
               name: "モストかわいいアイドルユニット",
               hp: 10000,
               imageno: 10603,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_after_turn(5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ピュアハザード ペオルタンω",
               hp: 2200000,
               imageno: 10614,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrreverse, "-", 100, false, 99, 5)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,0,0,0,0], 1.25, 5, 11)/* Warning: 属性要確認： 火属性弱体化25%（10T） */,
                     s_enemy_multibarrier_own(5, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(3000, 5, 1, true),
                     s_enemy_attack_ratio(0.8, 5, true),
                     s_enemy_attack_ignoreguard(3000, 5, 1, true),
                     s_enemy_attack_ignoreguard(4500, 5, 1, true),
                     s_enemy_attack_ignoreguard(4500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ジャーマネの紅き涙",
               hp: 10000,
               imageno: 10609,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_after_turn(5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true),
                     s_enemy_attack_ignoreguard(5000, 5, 1, true)
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