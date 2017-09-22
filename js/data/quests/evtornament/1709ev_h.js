{
   id: "1709ev_h",
   name: "(2017/09)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   battle_before: [{
      desc: "ch+3",
	  proc: panel_chainplus(3),
	  isev: true,
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "深紅 木負いガメ",
               hp: 50000,
               imageno: 3741,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "焔嵐 タービネックス",
               hp: 40000,
               imageno: 3723,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
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
               name: "ボーンソルジャー・チャード",
               hp: 50000,
               imageno: 5246,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔岩ラーヴァゴースト",
               hp: 80000,
               imageno: 5258,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
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
            3
         ],
         enemy: [
            {
               name: "戦慄の物語 ザップテイル",
               hp: 90000,
               imageno: 7154,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.75, 2)/* Warning: 属性要確認： 水属性防御75%（1T） */)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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
               name: "雷術戦闘官",
               hp: 70000,
               imageno: 8317,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.6, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "業炎のハイ・マジクラート",
               hp: 200000,
               imageno: 8324,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷術戦闘官",
               hp: 50000,
               imageno: 8317,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(200, 5, 1, true)
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
               name: "聖星は眠らない アレク・ルミナレス",
               hp: 250000,
               imageno: 11258,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "清廉龍水誓剣 ルシェ・ワダツミ",
               hp: 800000,
               imageno: 11270,
               attr: 1,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.5, 2)/* Warning: 属性要確認： 雷属性防御50%（1T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(312.5, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack(125, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(125, 5, 5, true),
                     s_enemy_attack(125, 5, 5, true),
                     s_enemy_attack(125, 5, 5, true),
                     s_enemy_attack(125, 5, 5, true),
                     s_enemy_attack(125, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "冷静な知と情熱の智 ティア＆キーラ",
               hp: 400000,
               imageno: 11274,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 7500, 7500)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(625, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack(250, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true),
                     s_enemy_attack(250, 5, 5, true)
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