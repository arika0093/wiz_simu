{
   id: "blader4-3",
   name: "Tempest Blader 覇級",
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
               name: "ヘルファイアドラゴン",
               hp: 60000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 60000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2000, 1, 1, m_enemy_tgtype_maxhp())/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 40000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)/* Warning: 属性要確認： 全属性弱体化50%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 3, 5, true),
                     s_enemy_attack(100, 3, 5, true),
                     s_enemy_attack(100, 3, 5, true),
                     s_enemy_attack(100, 3, 5, true),
                     s_enemy_attack(100, 3, 5, true)
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
               name: "ヘルファイアドラゴン",
               hp: 90000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 180000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(3, 3)),
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_angry: [
                     damage_block_own(20000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 90000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
               name: "捕縛型マニュピュレーター",
               hp: 90000,
               imageno: 5352,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(180, 5, 5, true),
                     s_enemy_attack(180, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 35,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true),
                     s_enemy_ss_sealed(5, 4)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
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
               name: "強襲型マインソルジャー",
               hp: 150000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 4)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(20000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "破槍の獄炎帝 ブリューダイン・ギア",
               hp: 700000,
               imageno: 8423,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 4, 1500, 1500)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(5, 4),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "白兵型ブレードロード",
               hp: 100000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(4, 4)),
                     m_enemy_once(s_enemy_poison(1000, 5, 3)),
                     s_enemy_attack(400, 3, 5, true)
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