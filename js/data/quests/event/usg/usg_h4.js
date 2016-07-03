{
   id: "usg_h4",
   name: "アルティメットガールズ2『到達級』",
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
               name: "稲光りする守護者",
               hp: 40000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "稲光りする守護者",
               hp: 15,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "稲光りする守護者",
               hp: 40000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
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
            2
         ],
         enemy: [
            {
               name: "稲光りする守護者",
               hp: 25,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "稲光りする守護者",
               hp: 75000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_deathlimit, "-", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "稲光りする守護者",
               hp: 70000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(6000, 1, 1, true)
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
            3
         ],
         enemy: [
            {
               name: "稲光りする守護者",
               hp: 80000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true)),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "稲光りする守護者",
               hp: 30,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "轟炎のシュッツァー",
               hp: 50000,
               imageno: 8495,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 4, true),
                     /* Error: 未定義のスキルです：{"id":110019,"name":"タイムアタックスコア強奪（20秒）","type":35,"target":0,"targetNum":0,"attrFire":0,"attrWater":0,"attrThunder":0,"attrLight":0,"attrDark":0,"paramType":2,"param1":20,"param2":0,"param3":0,"info":"タイムアタックスコア強奪（20秒）","minVersion":0,"astVerId":1,"vcType":1,"used":true} */
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
               name: "稲光りする守護者",
               hp: 30,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(300, 3, 5, true)),
                     /* Error: 未定義のスキルです：{"id":110019,"name":"タイムアタックスコア強奪（20秒）","type":35,"target":0,"targetNum":0,"attrFire":0,"attrWater":0,"attrThunder":0,"attrLight":0,"attrDark":0,"paramType":2,"param1":20,"param2":0,"param3":0,"info":"タイムアタックスコア強奪（20秒）","minVersion":0,"astVerId":1,"vcType":1,"used":true} */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔道士を拒絶する怪物 エクシュ",
               hp: 450000,
               imageno: 8466,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 2, true)
                  ],
                  on_angry: [
                     s_enemy_absorb(0.5, 5, 150000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 2, true),
                     s_enemy_attack(1000, 5, 2, true),
                     s_enemy_attack(1000, 5, 2, true),
                     s_enemy_attack(1000, 5, 2, true),
                     s_enemy_attack(1000, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲光りする守護者",
               hp: 100000,
               imageno: 8498,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
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
   ]
}