{
   id: "losteden2_h6",
   name: "覇級 祭り、再び！",
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
               name: "稲妻を偽る竜",
               hp: 60000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "稲妻を偽る竜",
               hp: 60000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "稲妻を偽る竜",
               hp: 60000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
            2
         ],
         enemy: [
            {
               name: "稲妻を偽る竜",
               hp: 60000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 6)/* Warning: 属性要確認： 雷属性弱体化50%（5T） */),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "稲妻を偽る竜[OD]",
               hp: 30,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(4)),
                     damage_switch(s_enemy_when_after_turn(4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1300, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(4000, 5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1300, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻を偽る竜",
               hp: 60000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,0,0,0,0], 0.5, 6)/* Warning: 属性要確認： 火属性防御50%（5T） */),
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "稲妻を偽る竜",
               hp: 80000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1600, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "稲妻を偽る竜",
               hp: 100000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐怖因子",
               hp: 30,
               imageno: 9159,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1250, 1, 1, true)
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
               name: "恐怖因子",
               hp: 200000,
               imageno: 9159,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "浮世離れ聖王 イアデル・セラフィム[OD]",
               hp: 500000,
               imageno: 9144,
               attr: 2,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 5)),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻を偽る竜",
               hp: 150000,
               imageno: 9158,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 600, 5, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "浮世離れ聖王 イアデル・セラフィム[OD]",
         hp: 800000,
         imageno: 9172,
         attr: 3,
         spec: 3,
         isStrong: false,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 40000, 4))
            ],
            on_move: [
               s_enemy_attack(200, 3, 5, true)
            ],/* 低スコアだと怒る
            on_angry: [
                Error: 未定義の怒り条件です：{"ID":0,"ToAngryType":5,"ToAngryValue":3,"AngryAttr":-1,"AngryNumFirstTurn":1,"AngryNumTurn":1,"IsAngryMode":false} Error: 未定義のスキルです：{"id":102353,"name":"火属性防御50%（4T） 単体","type":14,"target":1,"targetNum":1,"attrFire":1,"attrWater":1,"attrThunder":1,"attrLight":1,"attrDark":1,"paramType":1,"param1":50,"param2":1,"param3":5,"info":"火属性防御50%（4T） 単体","minVersion":139,"astVerId":0,"vcType":2,"used":true} 
            ],
            on_move_angry: [
               s_enemy_attack(200, 5, 5, true),
               s_enemy_attack(200, 5, 5, true),
               s_enemy_attack(200, 5, 5, true),
               s_enemy_attack(200, 5, 5, true),
               s_enemy_attack(200, 5, 5, true)
            ],*/
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}