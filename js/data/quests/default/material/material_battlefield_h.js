{
   id: "battlefield_h",
   name: "知識の闘技場 覇級",
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
               name: "ハイ・スパークリーパー",
               hp: 30000,
               imageno: 60,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷鳴のゴブリン",
               hp: 30000,
               imageno: 42,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・スパークリーパー",
               hp: 30000,
               imageno: 60,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)/*nogambits*/
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
               name: "雷鳴のゴブリン",
               hp: 30000,
               imageno: 42,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・スパークリーパー",
               hp: 40000,
               imageno: 60,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷鳴のゴブリン",
               hp: 30000,
               imageno: 42,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*nogambits*/
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
               name: "ハイ・レッドクリーパー",
               hp: 40000,
               imageno: 56,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・イエローマミー",
               hp: 50000,
               imageno: 433,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・レッドクリーパー",
               hp: 40000,
               imageno: 56,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "ハイ・イエローデーモン",
               hp: 50000,
               imageno: 30,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "クーシー",
               hp: 100000,
               imageno: 7612,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_weaken/* Warning: 属性要確認： 雷属性弱体化50%（3T） */, "-", 100, false, [0,0,1,0,0], 1.5, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイ・イエローデーモン",
               hp: 50000,
               imageno: 30,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/*nogambits*/
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