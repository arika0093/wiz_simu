{
   id: "vzone_3",
   name: "絶天鎧装 覇級",
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
               name: "オーソナパトナ",
               hp: 40000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(5, 4)),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "捕縛型マニュピュレーター",
               hp: 40000,
               imageno: 5352,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_resurrection(1),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "オーソナパトナ",
               hp: 40000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_cursed(600, 5, 2, 0)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
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
            2
         ],
         enemy: [
            {
               name: "オーソナパトナ",
               hp: 40000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4, 1000))
                  ],
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "捕縛型マニュピュレーター",
               hp: 40000,
               imageno: 5352,
               attr: -1,
               spec: 6,
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
            },
            {
               name: "オーソナパトナ",
               hp: 40000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_break())
                  ],
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
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
               name: "オーソナパトナ",
               hp: 100000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "イェンフレイン",
               hp: 65000,
               imageno: 3577,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 99)),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
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
               name: "オーソナパトナ",
               hp: 100000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
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
               name: "捕縛型マニュピュレーター",
               hp: 150000,
               imageno: 5352,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1)/* Error: 二連続行動がおそらく存在するので要修正[怒り時]: 怒り時行動に怒り後行動を1つ移動させる */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
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
               name: "絶天鎧装 イーハソラス",
               hp: 350000,
               imageno: 10417,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 10500, 5, 1, true)),
                     m_enemy_once(s_enemy_attr_absorb([1,1,1,1,1], 3, 2)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(15000, 4),
                     s_enemy_cursed(0, 5, 4, 500)
                  ],
                  on_move_angry: [
					 // 防御貫通攻撃
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "オーソナパトナ",
               hp: 100000,
               imageno: 3574,
               attr: -1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_cursed(0, 5, 4, 1000),
                     s_enemy_attack(400, 5, 1, true)
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