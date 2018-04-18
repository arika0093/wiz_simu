{
   id: "mareless4_high",
   name: "人擬態級 残響dearless",
   desc: "",
   overlap: false,
   aprnum: 1,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "〈ラスティメア〉取り戻す夢",
               hp: 500000,
               imageno: 9368,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_noeffect("s_enemy_panelchange([1,0,0,0,0])"),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "〈ロードメア〉みなを導く夢",
               hp: 1500000,
               imageno: 9383,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_fear(5, 0, 0.5, [1,0,0,0,0])),
                     damage_switch(s_enemy_when_dead_x(4), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attack(666.75, 5, 1, true),
                     s_enemy_heal_own(0.2)
                  ],
                  on_angry: [
                     s_enemy_resurrection(1),
                     s_enemy_heal_all(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(666.75, 5, 1, true),
                     s_enemy_attack(666.75, 5, 1, true),
                     s_enemy_attack(666.75, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "〈アイアンメア〉みんなを守る夢",
               hp: 20,
               imageno: 9379,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "〈レベルメア〉反抗の夢",
               hp: 500000,
               imageno: 9376,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(3000, 99))
                  ],
                  on_move: [
                     m_enemy_once(skill_counter_func(s_enemy_heal_own, "-", 100, false, 1)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "〈ラウズメア〉解き放つ夢",
               hp: 500000,
               imageno: 9372,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,1,1,1,1], 0.5, 99))
                  ],
                  on_move: [
                     s_enemy_heal_all(0.1)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "残響dearless",
         hp: 10000000,
         imageno: 12460,
		 imageno_prefix: "V2qtvK_",
         attr: 2,
         spec: 2,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(s_enemy_cursed(0, 5, 20, 3000)),
               m_enemy_once(s_enemy_fear(5, 0, 0.9, [1,0,0,0,0])),
               damage_switch(s_enemy_when_hpdown(0.95), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attack_ignoreguard(2000, 5, 1, true)
            ],
            on_angry: [
               impregnable(2),
               s_enemy_attrguard_own([1,1,1,1,1], 0.5, 5),
               attack_counter(3000, 3),
               s_enemy_fear(5, 0, 0.9, [1,0,0,0,0])
            ],
            on_move_angry: [
               s_enemy_noeffect("s_enemy_panelchange([1,0,0,0,0])"),
               s_enemy_attack_ignoreguard(4000, 5, 1, true),
               attack_counter(3000, 3),
               s_enemy_recoilAttack(5000, 5, [1,0,0,0,0], 5, 2),
               s_enemy_heal_own(0.1),
               s_enemy_attrguard_all([1,1,1,1,1], 0.5, 5),
               impregnable(2)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}