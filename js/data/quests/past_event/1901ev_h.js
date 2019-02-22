{
   id: "1901ev_h",
   name: "(2019/01)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: false,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "野蛮なケトス（雷）",
               hp: 50000,
               imageno: 12831,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrreverse(2, 5))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "危険なヒュドラ（雷）",
               hp: 50000,
               imageno: 12825,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ignoreguard(1200, 5, 1, true))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "野蛮なケトス（火）",
               hp: 30000,
               imageno: 12827,
               imageno_prefix: "",
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ignoreguard(600, 5, 1, true))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
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
               name: "チャラついた海蛇（雷）",
               hp: 100000,
               imageno: 12824,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャラついた海蛇（雷）",
               hp: 150000,
               imageno: 12824,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャラついた海蛇（雷）",
               hp: 100000,
               imageno: 12824,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)
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
               name: "不機嫌な海獣（雷）",
               hp: 1,
               imageno: 12830,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_poison(100, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "野蛮なケトス（光）",
               hp: 1,
               imageno: 12837,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,1,1,1,1], 5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "野蛮なケトス（雷）",
               hp: 100000,
               imageno: 12831,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_deathlimit(5, 11)
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
            5
         ],
         enemy: [
            {
               name: "危険なヒュドラ（光）",
               hp: 1,
               imageno: 12833,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,1,1,1,1], 5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "12支神怒髪天を衝く イノセント",
               hp: 750000,
               imageno: 13561,
               imageno_prefix: "",
               attr: 0,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_discharge(5, 99)),
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 3)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(2),
                     s_enemy_attrreverse(2, 5),
                     s_enemy_ss_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "チャラついた海蛇（雷）",
               hp: 300000,
               imageno: 12824,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不機嫌な海獣（光）",
               hp: 200000,
               imageno: 12836,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,0,1,0], 1, 3)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([0,0,0,1,0], 1.5, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "野蛮なケトス（闇）",
               hp: 200000,
               imageno: 12839,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,0,0,1], 1, 3)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 3, 500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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