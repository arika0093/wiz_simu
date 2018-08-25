{
   id: "1808ev_h",
   name: "(2018/08)イベントトーナメント覇級",
   desc: "",
   overlap: false,
   aprnum: 4,
   panelchainEnable: false,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "耐雷物見家電",
               hp: 30000,
               imageno: 12110,
               imageno_prefix: "",
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_steal(100, 5))
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)
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
               name: "耐水物見家電",
               hp: 100000000,
               imageno: 12108,
               imageno_prefix: "",
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_escape(2))
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 5, true),
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "耐火物見家電",
               hp: 100000000,
               imageno: 12106,
               imageno_prefix: "",
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 0, 5, 6, 20000)),
                     m_enemy_once(s_enemy_escape(2))
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 1, true),
                     s_enemy_attack(5000, 5, 5, true),
                     s_enemy_attack(5000, 5, 5, true),
                     s_enemy_attack(5000, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "耐雷物見家電",
               hp: 100000000,
               imageno: 12110,
               imageno_prefix: "",
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_escape(2))
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 5, true),
                     s_enemy_attack(5000, 5, 1, true)
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
               name: "黄色掃除家電",
               hp: 200000,
               imageno: 12119,
               imageno_prefix: "",
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(3500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "耐雷掃除家電",
               hp: 200000,
               imageno: 12120,
               imageno_prefix: "",
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,0,1,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_discharge(5, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄色掃除家電",
               hp: 200000,
               imageno: 12119,
               imageno_prefix: "",
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(3500, 5, 1, true)
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
               name: "耐光掃除家電",
               hp: 200000,
               imageno: 12122,
               imageno_prefix: "",
               attr: 3,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true),
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "描いた絵を現実とする神 エソラゴト",
               hp: 500000,
               imageno: 12104,
               imageno_prefix: "",
               attr: 2,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrreverse(2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "耐闇物見家電",
               hp: 200000,
               imageno: 12114,
               imageno_prefix: "",
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true),
                     s_enemy_attack(50, 1, 1, true)
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