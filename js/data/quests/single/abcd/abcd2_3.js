{
   id: "abcd2_3",
   name: "AbCd02 盲目の調和 真覇級",
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
               name: "ボラルグラナ",
               hp: 40000,
               imageno: 3878,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attrguard_all([1,0,0,0,0], 0.25, 4)/* Warning: 属性要確認： 火属性防御25%（3T） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "CODE:スビェート《無垢な壊滅者》",
               hp: 50000,
               imageno: 3570,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
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
               name: "CODE:スビェート《安息の聖地》",
               hp: 90000,
               imageno: 3571,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true),
                     s_enemy_chain_sealed(6)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ジズマントルチュ",
               hp: 140000,
               imageno: 3879,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true),
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
               name: "ジズマントルチュ",
               hp: 30,
               imageno: 3879,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "AbCd-γ:《耀く巡礼地 スビェート》",
               hp: 180000,
               imageno: 3573,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 6)),
                     damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 3, 5, true),
                     s_enemy_attack(500, 3, 5, true),
                     s_enemy_attack(1250, 1, 1, true),
                     s_enemy_attack(1250, 1, 1, true),
                     s_enemy_attack(1250, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファハシュヴァイル",
               hp: 70000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_heal_all(1),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  on_angry: [
                     attr_change(3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 1, 1, true)/* Warning: 属性に十分注意してください */
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
               name: "ジズマントルチュ",
               hp: 180000,
               imageno: 3879,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true),
                     s_enemy_attack(2500, 1, 1, true),
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "AbCd-γ:《絶望の聖地 スビェート》",
               hp: 800000,
               imageno: 6789,
               attr: 2,
               spec: 11,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  on_angry: [
                     attr_change(3),
                     s_enemy_deathlimit(5, 4)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attrguard_all([1,0,0,0,0], 0.25, 4)/* Warning: 属性要確認： 火属性防御25%（3T） */,
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ジズマントルチュ",
               hp: 160000,
               imageno: 3879,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 1, 1, true)
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