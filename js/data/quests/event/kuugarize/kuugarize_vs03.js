{
   id: "kuugarize_vs03",
   name: "VS ふにゃふわ神柔拳",
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
               name: "〈ふにゃふわ族〉 プグナ",
               hp: 550000,
               imageno: 10483,
               attr: 2,
               spec: 4,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,1,1,1,1], 1, 2)),
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 500, 5, 5)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 100)
                  ],
                  on_move_angry: [
                     s_enemy_multibarrier_all(2, 99),
                     s_enemy_heal_all(0.2),
                     s_enemy_multibarrier_all(2, 99),
                     s_enemy_heal_all(0.2),
                     s_enemy_multibarrier_all(2, 99)
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