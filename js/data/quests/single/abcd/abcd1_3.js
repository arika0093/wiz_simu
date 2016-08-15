{
   id: "abcd1_3",
   name: "AbCd01 黒殻の王 真覇級",
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
               name: "ファハシュヴァイル",
               hp: 75000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 6))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "CODE:ウラガーン《崩落の主》",
               hp: 90000,
               imageno: 3707,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 3, 1, true),
                     s_enemy_poison(2000, 5, 6)
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
               name: "ファハシュヴァイル",
               hp: 120000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_poison(1000, 5, 6)
                  ],
                  on_move: [
                     s_enemy_attack(700, 5, 3, true),
                     s_enemy_attack_ratio(0.9, 5, true),
                     s_enemy_poison(1000, 5, 6)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ルインコンダクター",
               hp: 50000,
               imageno: 4070,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("パネルチェンジ(雷)")),
                     s_enemy_attack(500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
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
               name: "リジョンディッシェル",
               hp: 90000,
               imageno: 4069,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 1600, 1, 6))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "AbCd-X:《黒殻の暴君 ウラガーン》",
               hp: 180000,
               imageno: 4066,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(3, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir()
                  ],
                  on_move_angry: [
                     s_enemy_attack(4000, 1, 1, true),
                     s_enemy_attack(2000, 3, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファングサーラ",
               hp: 160000,
               imageno: 4068,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrguard_all/* Warning: 属性要確認： 水属性防御75%（5T） */, "-", 100, false, [0,1,0,0,0], 0.75, 6))
                  ],
                  on_move: [
                     s_enemy_attack(320, 2, 5, true)
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
               name: "ファハシュヴァイル",
               hp: 180000,
               imageno: 4067,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("パネルチェンジ(火)")),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "AbCd-X:《闇鎧の虐帝 ウラガーン》",
               hp: 800000,
               imageno: 6783,
               attr: 0,
               spec: 11,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 7)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 3, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_ss_sealed(5, 4)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファングサーラ",
               hp: 220000,
               imageno: 4068,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(2000, 5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
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