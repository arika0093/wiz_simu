{
   id: "1809ev_h",
   name: "(2018/09)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: false,
   battle_before: [{
      desc: "ch+1",
	  proc: panel_chainplus(1),
	  isev: true,
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "がしゃどくろ<呪怨>",
               hp: 10000,
               imageno: 978,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 1, true),
                     s_enemy_attack(100, 1, 1, true),
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
               name: "戦火に燃ゆる鎧",
               hp: 50000,
               imageno: 972,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "地獄を這う骸",
               hp: 50000,
               imageno: 977,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "紅餓鬼",
               hp: 50000,
               imageno: 966,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
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
               name: "紅餓鬼",
               hp: 300000,
               imageno: 966,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄金色の武者の亡霊",
               hp: 100000,
               imageno: 975,
               imageno_prefix: "",
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(166.5, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_discharge(5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "朱き武者の亡霊",
               hp: 300000,
               imageno: 971,
               imageno_prefix: "",
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(500, 5, 1, true)
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
               name: "静寂を切り裂く骸",
               hp: 50000,
               imageno: 979,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "がしゃどくろ&lt;死相&gt;",
               hp: 70000,
               imageno: 980,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack_ignoreguard(250, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_ss_sealed(5, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "静寂を切り裂く骸",
               hp: 50000,
               imageno: 979,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ignoreguard(250, 5, 1, true)
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
               name: "幻狼アルギュロス",
               hp: 300000,
               imageno: 13137,
               imageno_prefix: "",
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(500, 5, 3, 0))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狼狐の月見酒 リュコス・ヴォーダン",
               hp: 1000000,
               imageno: 13104,
               imageno_prefix: "",
               attr: 0,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_fear(5, 0, 0.99, [0,0,0,0,0], [0,0,0,1,1]))
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
               name: "幻狼アシミ",
               hp: 300000,
               imageno: 13138,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.99, 5, true))
                  ],
                  on_move: [
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