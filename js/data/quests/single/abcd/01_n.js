{
	id: "abcd01_n",
	name: "AbyssCode01 黒殻の王『黒業級』",
	category: "other",
   category_jp: "その他",
	desc: "",
	aprnum: 4,
	overlap: false,
	hidden: false,
	data: [{
		appearance: [1],
		enemy: [{
			name: "ファハシュヴァイル",
			hp: 30000,
			imageno: 4067,
			attr: 0,
			spec: 0,
		}, {
			name: "ウラガーン",
			hp: 40000,
			imageno: 3706,
			attr: 0,
			spec: 11,
		}, {
			name: "ファングサーラ",
			hp: 20000,
			imageno: 4068,
			attr: 0,
			spec: 7,
			move: {
				on_move: [
					m_enemy_once(s_enemy_poison(500, 5, 3)),
				],
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "ルインコンダクター",
			hp: 15000,
			imageno: 4070,
			attr: 2,
			spec: 0,
			move: {
				on_popup: [
					skill_counter(9999, -1),
				]
			}
		}, {
			name: "ウラガーン",
			hp: 60000,
			imageno: 3707,
			attr: 0,
			spec: 11,
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "ファングサーラ",
			hp: 35000,
			imageno: 4068,
			attr: 0,
			spec: 7,
			move: {
				on_move: [
					s_enemy_poison(500, 5, 3),
				],
				turn: 1,
				wait: 3,
			},
		}, {
			name: "ウラガーン",
			hp: 90000,
			imageno: 3708,
			attr: 0,
			spec: 11,
			move: {
				on_popup: [
					s_enemy_force_reservoir(),
				],
			},
		}, {
			name: "リジョンディッシェル",
			hp: 60000,
			imageno: 4069,
			attr: 1,
			spec: 5,
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "ファハシュヴァイル",
			hp: 60000,
			imageno: 4067,
			attr: 0,
			spec: 0,
			move: {
				on_popup: [
					skill_counter(9999, -1),
				]
			}
		}, {
			name: "ウラガーン",
			hp: 180000,
			imageno: 4066,
			attr: 0,
			spec: 11,
			move: {
				on_popup: [
					s_enemy_attr_weaken([1, 0, 0, 0, 0], 1.25, 5, -1),
				]
			}
		}, {
			name: "ファングサーラ",
			hp: 35000,
			imageno: 4068,
			attr: 0,
			spec: 7,
			move: {
				on_popup: [
					skill_counter(9999, -1),
				]
			}
		}, ],
	}, ],
}