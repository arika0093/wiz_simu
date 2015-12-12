<<<<<<< HEAD
<<<<<<< HEAD
// SS�𔭓�����
function ss_push(n) {

	// SS�^�[�������Z�b�g
	Allys.Now[n].ss_current = 0;
	Allys.Now[n].ss_isfirst = false;
	// �ĕ\��
	sim_show();
}

// L���[�h�ɓ����Ă��邩�ǂ����𔻒肷��
=======
=======
>>>>>>> 447b73f... 潜在能力枠組み作成,
﻿// SSを発動する
function ss_push(n) {


	// SSターンをリセット
	Allys.Now[n].ss_current = 0;
	Allys.Now[n].ss_isfirst = false;
	// 再表示
	sim_show();
}

// Lモードに入っているかどうかを判定する
<<<<<<< HEAD
>>>>>>> e22626d... 潜在能力関連の整備
=======
>>>>>>> 447b73f... 潜在能力枠組み作成,
function is_legendmode(card, ally_n) {
	return get_ssturn(card, ally_n)[1] == 0;
}

<<<<<<< HEAD
<<<<<<< HEAD
// SS���c�艽�^�[���őłĂ邩��z��ŕԂ�
=======
// SSが残り何ターンで打てるかを配列で返す
>>>>>>> e22626d... 潜在能力関連の整備
=======
// SSが残り何ターンで打てるかを配列で返す
>>>>>>> 447b73f... 潜在能力枠組み作成,
function get_ssturn(card, ally_n) {
	// SS1 default
	var ss1_def = card.ss1.turn;
	// SS2 default
	var ss2_def = (card.islegend ? card.ss2.turn : undefined);
<<<<<<< HEAD
<<<<<<< HEAD
	// SS�`���[�W�^�[��
	var cg = ally_n.ss_current;
	// �������ĂȂ����ǂ���
	var fst = ally_n.ss_isfirst;
	// �v�Z
	var ss1 = Math.max(ss1_def - cg - (fst ? has_fastnum(card) : 0), 0);
	var ss2 = ss2_def !== undefined ? (Math.max(ss2_def - cg - (fst ? has_fastnum(card) : 0), 0)) : undefined;
	// �ԋp
=======
=======
>>>>>>> 447b73f... 潜在能力枠組み作成,
	// SSチャージターン
	var cg = ally_n.ss_current;
	// 発動してないかどうか
	var fst = ally_n.ss_isfirst;
	// ファストをいくつ持っているか
	var fast_num = has_fastnum(card);
	// 計算
	var ss1 = Math.max(ss1_def - cg - (fst ? fast_num : 0), 0);
	var ss2 = ss2_def !== undefined ? (Math.max(ss2_def - cg - (fst ? fast_num : 0), 0)) : undefined;
	// 返却
<<<<<<< HEAD
>>>>>>> e22626d... 潜在能力関連の整備
=======
>>>>>>> 447b73f... 潜在能力枠組み作成,
	return [ss1, ss2];
}