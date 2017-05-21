{
   id: "kuugarize_vs01",
   name: "VS 死魂の葬者",
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
               name: "死魂の葬者 イルーシャ＆ファルク",
               hp: 400000,
               imageno: 10519,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 6)),
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(12000, 5, 1, true),
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 4)/* Warning: 属性要確認： 全属性弱体化25%（3T） */,
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_healreverse(1, 5)
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