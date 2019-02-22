{
   id: "1902ev_h",
   name: "(2019/02)イベントトーナメント 覇級",
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 10000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 10000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 2))
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 10000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 10000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 50000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 10000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true)/* nogambits */
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 100000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(166.5, 5, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 100000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(166.5, 5, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(1)
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 100000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_allySkillCharge(5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 100000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 20000,
               imageno: 13775,
               imageno_prefix: "",
               attr: 1,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "神様のいたずら エンジェル・ギブン",
               hp: 500000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 6666.5, 5, 1, true))
                  ],
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "女学院の女帝 アリーサ・ベルゴン",
               hp: 5000000,
               imageno: 13766,
               imageno_prefix: "",
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.75), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_recoilAttack(10000, 5, [0,0,1,0,0], 5, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神様のいたずら エンジェル・ギブン",
               hp: 500000,
               imageno: 8041,
               imageno_prefix: "",
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true)/* nogambits */
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