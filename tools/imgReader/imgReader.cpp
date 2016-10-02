#include <iostream>
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/highgui/highgui.hpp>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <string>
#include <iterator>
#include <fstream>
#include <iostream>
#include <sys/stat.h>
#include <unistd.h>
#include <limits.h>
#include <sys/types.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <cstdlib>

/*------------------------
       定数
------------------------*/
//カードスロット数の設定
static const int CXGNum = 5;
static const int CYGNum = 3;
static const int CLNum = CXGNum * CYGNum;

//Dictionaryの最大数
static const int maxcardNo=10000;

//時間測定用の変数
clock_t t1,t2,td;
double tb = CLOCKS_PER_SEC;

//動作モード制御用
bool ModeDisassembly = false;

//雑なスケール補正
static const int defCol = 675;
static const int defDist = 125;

//辞書画像サイズ
static const int cvHeight=45;
static const int cvWidth=60;

//高速化のための画像再縮小率(変更時、辞書再構築が必要)
double reReduceRate = 0.3;


static const int iTrimX0 = -30;
static const int iTrimY0 = -555;

//出力文字列
std::string outpStr;
std::string LOGROOT;



/*------------------------
       非依存系
------------------------*/
//ファイル読み込み
std::string readFile(const char *filename)
{
        std::ifstream ifs(filename);
        return std::string(std::istreambuf_iterator<char>(ifs),
                      std::istreambuf_iterator<char>());
}

//数字配列の中から最大値を返す（第２変数は第１変数の長さ）
int max(int myArray[], int nmax) {
	int tmp = myArray[0];
	for (int n = 1; n < nmax; n++) {
		if (myArray[n] > tmp) {
			tmp = myArray[n];
		}
	}
	return tmp;
}

//数字配列の中から最少値を返す（第２変数は第１変数の長さ）
int min(int myArray[], int nmax) {
	int tmp = myArray[0];
	for (int n = 1; n < nmax; n++) {
		if (myArray[n] < tmp) {
			tmp = myArray[n];
		}
	}
	return tmp;
}

//数字配列の合計値を返す（第２変数は第１変数の長さ）
int sum(int myArray[], int nmax) {
	int res = 0;
	for (int n = 0; n < nmax; n++) {
		res += myArray[n];
	}
	return res;
}

//数字配列の平均値を返す（第２変数は第１変数の長さ）
int mean(int myArray[], int nmax) {
	return sum(myArray, nmax) / nmax;
}

//座標平滑に使うパラメータを返す（大体dist/2）
int getHomoParam(int myArray[], int nmax, int gnum) {
	return (max(myArray,CLNum)- min(myArray,CLNum))/CXGNum/2;
}

//等差数列の差を返す（第2変数は第1変数の長さ）
int distance(int homo[], int GNum) {
	int tmpSum=0;
	int tmpMin=99999;
	int tmpCount=GNum;
	for(int tn=0; tn<GNum; tn++){
		tmpSum+=homo[tn];
		if(tmpMin>homo[tn]){
			tmpMin=homo[tn];
		}
	}
	return (tmpSum-tmpMin*tmpCount)/(tmpCount*(tmpCount-1)/2);
}


void putLog(const char* dir, const char* file, const char* outpStr){
	std::string nowDir = LOGROOT + dir;
	std::string nowFile = nowDir + file;
	mkdir(nowDir.c_str(), 0777);
	std::ofstream ofs(nowFile.c_str());
	ofs << outpStr;
}
//自身のパスを返す
std::string get_selfpath() {
    char buff[PATH_MAX];
    ssize_t len = ::readlink("/proc/self/exe", buff, sizeof(buff)-1);
    if (len != -1) {
      buff[len] = '\0';
      return std::string(buff);
    }
    /* handle error condition */
}
/*------------------------
       処理系
------------------------*/

//いろいろなパスを管理する構造体
struct paths{
	std::string id;
	std::string work;
	std::string inputImg;
	std::string imgList;
	std::vector<std::string> inputImgs;
	std::vector<std::string> cvImgs;
	std::string cvImg;
	std::string L;
	std::string io;
	std::string execDir;
	int imgNum;
	public:
		paths(){
		  	std::string selfpath = get_selfpath();
			std::string dirTmp2;
			for(int n=0;n<selfpath.size();n++){
				dirTmp2+=selfpath[n];
				if(selfpath[n]=='/'){
					execDir=dirTmp2;
				}
			}
		}
		void readImgList(){
			imgNum = 0;
			std::string imgListString;
			imgListString = readFile(imgList.c_str());
			std::string tmpString="";
			for(int i = 0; i < (int)imgListString.size(); i++){
				if(imgListString[i]=='\n'){
					if((int)tmpString.size()>0){
						inputImgs.push_back(inputImg + tmpString);
						std::stringstream ss;
						ss << imgNum;
						cvImgs.push_back(cvImg + ss.str() + ".png");
						imgNum++;
						tmpString="";
					}
				}else{
					tmpString += imgListString[i];
				}
			}
		}
		void setId(std::string myId){
			id=myId;
			io = "io/";
			work =  io + id + "/";
			L = "L.png";
			mkdir(io.c_str(), 0777);
			LOGROOT = work + "log/";
			inputImg = work + "inputImg/";
			imgList = inputImg + "imgList.info";
			cvImg = work + "cvImg/";
			mkdir(cvImg.c_str(), 0777);
			readImgList();
		}
};
int putError(){
	putLog("", "error", "true");
	return 0;
}


//カード配置の寸法を扱うための構造体
struct Lengths{
	int Distx;
	int Disty;
	int Lxs[CXGNum];
	int Lys[CYGNum];
	int Trimx;
	int Trimy;
	int Dicx;
	int Dicy;
	int L2Trimx;
	int L2Trimy;
	float trimxRate;
	float trimyRate;
	public:
		Lengths(){
			Dicx=cvWidth;
			Dicy=cvHeight;
			trimxRate=.48;
			trimyRate=.16;
		}
		//L点の位置を入力してcv領域を返す
		cv::Rect pullCvRectFromL(int x, int y){
			return cv::Rect(Lxs[x]-L2Trimx, Lys[y]-L2Trimy, Dicx, Dicy);
		}
		//全L点の生データを入力してLengthを初期化する
		void setLs(int xs[], int ys[]){
			int xHomoParam = getHomoParam(xs, CLNum, CXGNum);
			int xTmpArray[CYGNum];
			int tmpMin;
			int count;
			for (int n = 0; n <CXGNum; n++) {
				tmpMin = min(xs, CLNum);
				count = 0;
				for (int m = 0; m < CLNum; m++) {
					if (xs[m] < tmpMin + xHomoParam) {
						xTmpArray[count] = xs[m];
						xs[m] = 99999;
						count++;
					}
				}
				Lxs[n] = mean(xTmpArray, CYGNum);
			}
			int yHomoParam = getHomoParam(ys, CLNum, CYGNum);
			int yTmpArray[CXGNum];
			for (int n = 0; n < CYGNum; n++) {
				tmpMin = min(ys, CLNum);
				count = 0;
				for (int m = 0; m < CLNum; m++) {
					if (ys[m] < tmpMin + yHomoParam) {
						yTmpArray[count] = ys[m];
						ys[m] = 99999;
						count++;
					}
				}
				Lys[n] = mean(yTmpArray, CXGNum);
			}

			Distx=distance(Lxs, CXGNum);
			L2Trimx=Distx*trimxRate;
			Disty=distance(Lys, CYGNum);
			L2Trimy=Disty*trimyRate;
		}
	protected:
};

//1次配列を標準出力に返す（使ってない。デバッグ用）
void print1DArray(int myArray[], int nmax){
	std::string s1 = "";
	for (int n = 0; n < nmax; n++) {
		std::stringstream ss;
		ss << myArray[n];
		s1 = s1 + ss.str() + ",";
	}
	std::cout << s1 << std::endl;
}

// 画像を画像に貼り付ける関数
void paste(cv::Mat dst, cv::Mat src, int x, int y, int width, int height) {
	cv::Mat resized_img;
	cv::resize(src, resized_img, cv::Size(width, height));

	if (x >= dst.cols || y >= dst.rows) return;
	int w = (x >= 0) ? std::min(dst.cols - x, resized_img.cols) : std::min(std::max(resized_img.cols + x, 0), dst.cols);
	int h = (y >= 0) ? std::min(dst.rows - y, resized_img.rows) : std::min(std::max(resized_img.rows + y, 0), dst.rows);
	int u = (x >= 0) ? 0 : std::min(-x, resized_img.cols - 1);
	int v = (y >= 0) ? 0 : std::min(-y, resized_img.rows - 1);
	int px = std::max(x, 0);
	int py = std::max(y, 0);

	cv::Mat roi_dst = dst(cv::Rect(px, py, w, h));
	cv::Mat roi_resized = resized_img(cv::Rect(u, v, w, h));
	roi_resized.copyTo(roi_dst);
}

// 画像を画像に貼り付ける関数（サイズ指定を省略したバージョン）
void paste(cv::Mat dst, cv::Mat src, int x, int y) {
	paste(dst, src, x, y, src.size().width, src.size().height);
}

//第一変数を第二変数桁に0フィルした文字列で返す
std::string digitString(int num, int digit) {
    char c[32];
    sprintf(c, "%d", num);

    std::string s(c);
    while (s.length() < digit) {
        s = "0" + s;
    }
    return s;
}

//辞書画像1枚分の構造体（vectorで配列化して使う）
struct dicImg{
	bool isEnable;
	public:
		dicImg(){
			isEnable=false;
		}
		//指定した番号の辞書を読み込む
		void setImg(int mynum){
			std::string fname = "dic/" + digitString(mynum, 5) + ".png";
			myImg = cv::imread(fname);
			if (myImg.data != NULL) {
				// cv::resize(myImg, myImg, cv::Size(), .3, .3);
				isEnable=true;
			}
		}
		//画像を返す
		cv::Mat pullImg(){
			return myImg;
		}
	protected:
		cv::Mat myImg;
};


void getXsYs(int xs[], int ys[], cv::Mat L_img, cv::Mat search_img){
	cv::Mat result_img;
	cv::Rect roi_rect(0, 0, L_img.cols, L_img.rows);
	cv::Rect roi_rect2(0, 0, L_img.cols, L_img.rows);
	cv::Point max_pt;
	double maxVal;
	cv::matchTemplate(search_img, L_img, result_img, CV_TM_CCOEFF_NORMED);
	for (int n = 0; n < CLNum; n++)
	{
		cv::minMaxLoc(result_img, NULL, &maxVal, NULL, &max_pt);
		roi_rect.x = max_pt.x;
		roi_rect.y = max_pt.y;
		roi_rect2.x = max_pt.x - L_img.cols / 2;
		roi_rect2.y = max_pt.y - L_img.rows / 2;
		xs[n] = roi_rect.x;
		ys[n] = roi_rect.y;
		cv::rectangle(search_img, roi_rect, cv::Scalar(80, 80, 80, 3));
		//（画像に重なりがないという条件があるので）既取得積分画像をテンプレ画像分黒塗り
		cv::rectangle(result_img, roi_rect2, cv::Scalar(0, 0, 0, 3), -1, CV_AA);
	}
}



//画像を読み込んで格納しておく構造体
struct cvImgs{
	paths path;
	cv::Mat LImg;
	std::vector<cv::Mat> imgs;
	int xs[CLNum];
	int ys[CLNum];
	Lengths myLens;
	double resizeRate;
	public:
		cvImgs(){
			resizeRate = 1;
		}
		cv::Mat pullCvImg(int i, int xn, int yn){
			cv::Rect cvArea = myLens.pullCvRectFromL(xn, yn);
			return imgs[i](cvArea);
		}
		void loadImgByPath(paths myPath){
			path = myPath;
			LImg = cv::imread(path.L.c_str());
			putLog("imgs/", "isArray", "true");
			if (LImg.data == NULL) {
				printf("%sが見つかりません\n", path.L.c_str());
				putLog("", "errorMsg", "loadImgByPath img undefined 01");
				putError();
			}
			for(int i=0; i<path.imgNum; i++){
				std::stringstream imgdir;
				imgdir << "imgs/" << i << "/";
				std::stringstream nowid;
				nowid << i;
				putLog(imgdir.str().c_str(), "id", nowid.str().c_str());
				std::stringstream cardsdir;
				cardsdir << imgdir.str().c_str() << "cards/";
				putLog(cardsdir.str().c_str(), "isArray", "true");

				imgs.push_back(cv::imread(path.inputImgs[i].c_str()));
				if(imgs[i].data == NULL) {
					printf("%sが見つかりません\n", path.inputImgs[i].c_str());
					putLog("", "errorMsg", "loadImgByPath img undefined 02");
					putError();
				}
				if(i==0){
					//resizeRate, myLensの導出
					if(imgs[i].cols!=defCol){
						double colRate = double(defCol) / double(imgs[i].cols);
						cv::resize(imgs[i], imgs[i], cv::Size(), colRate, colRate);
						resizeRate *= colRate;
					}
					getXsYs(xs, ys, LImg, imgs[i]);
					myLens.setLs(xs, ys);
					if(myLens.Distx!=defDist){
						double disRate=double(defDist)/double(myLens.Distx);
						cv::resize(imgs[i], imgs[i], cv::Size(), disRate, disRate);
						resizeRate *= disRate;
						getXsYs(xs, ys, LImg, imgs[i]);
						myLens.setLs(xs, ys);
					}
				}else{
					if(resizeRate != 1){
						cv::resize(imgs[i], imgs[i], cv::Size(), resizeRate, resizeRate);
					}
				}
				cv::imwrite(path.cvImgs[i].c_str(), imgs[i]);
				std::stringstream imgUrl;
				imgUrl << path.execDir << path.cvImgs[i].c_str();
				putLog(imgdir.str().c_str(), "imgUrl", imgUrl.str().c_str());
			}
		}
};

//所持カード画面を分解し、辞書と照合してcardNoを返す
int mainAnalyze(std::string myId) {
	paths myPath;
	myPath.setId(myId);
	putLog("", "id", myId.c_str());
	putLog("", "getPath", "true");

	std::stringstream spid;
	spid << getpid();
	putLog("", "pid", spid.str().c_str());

	std::stringstream sin;
	sin << myPath.imgNum;
	putLog("", "imgNum", sin.str().c_str());


	printf("Loading input Img\n");
	cvImgs myCvImg;
	myCvImg.loadImgByPath(myPath);
	putLog("", "loadImg", "true");



	printf("Loading Dictionary\n");
	t1 = clock();
	std::vector<dicImg> dics(maxcardNo);
	if(!ModeDisassembly){
		for(int n=0; n<maxcardNo; n++){
			dics[n].setImg(n);
		}
	}
	t2 = clock();
	td = t2 - t1;
	printf("f() took %d count [%4.2f sec].\n",td,(double)td / (double)tb);
	putLog("", "loadDic", "true");
	
	printf("Searching\n");
	cv::Mat searchImg;
	cv::Mat dicImg;
	cv::Mat matchedImg;
	cv::Point max_pt;
	double maxVal;
	for(int i = 0; i < myPath.imgNum; i++){
		for (int yn = 0; yn < CYGNum; yn++) {
			for (int xn = 0; xn < CXGNum; xn++) {
				t1 = clock();
				if(ModeDisassembly){
					reReduceRate = 1;
				}
				cv::resize(myCvImg.pullCvImg(i, xn, yn), searchImg, cv::Size(), reReduceRate, reReduceRate);
				double maxHitVal=0;
				int maxHitNum=0;
				if(!ModeDisassembly){
					for (int dn = 0; dn < maxcardNo; dn++) {
						if (dics[dn].isEnable) {
							cv::matchTemplate(searchImg, dics[dn].pullImg(), matchedImg, CV_TM_CCOEFF_NORMED);
							cv::minMaxLoc(matchedImg, NULL, &maxVal, NULL, &max_pt);
							if(maxHitVal < maxVal){
								maxHitVal=maxVal;
								maxHitNum=dn;
							}
						}
					}
				}
				std::cout << maxHitNum << std::endl;

				std::stringstream sse;
				sse << (xn +( CXGNum*yn));
				std::stringstream ss2;
				ss2 << maxHitNum;
				outpStr = outpStr + ss2.str() + ", ";

				std::stringstream cdir;
				cdir << "imgs/" << i << "/cards/" << sse.str().c_str() << "/";
				putLog(cdir.str().c_str(), "id", sse.str().c_str());
				putLog(cdir.str().c_str(), "imageno", ss2.str().c_str());

				std::stringstream conco;
				conco << maxHitVal;
				putLog(cdir.str().c_str(), "concordanceRate", conco.str().c_str());

				std::stringstream smc;
				smc << "xy" << xn << yn;
				putLog(cdir.str().c_str(), "class", smc.str().c_str());

				std::stringstream shtml;
				shtml << "<img src=\\\"" << myPath.cvImgs[i] << "\\\" class=\\\"" << smc.str().c_str() << "\\\" style=\\\"position:absolute;left:" << (iTrimX0 - xn * myCvImg.myLens.Distx) << "px;top:" << (iTrimY0 - yn * myCvImg.myLens.Disty) << "px;\\\">";
				putLog(cdir.str().c_str(), "html", shtml.str().c_str());

				t2 = clock();
				td = t2 - t1;
				printf("f() took %d count [%4.2f sec].\n",td,(double)td / (double)tb);
				printf("-------------------------\n");
			}
		}/*
		outpStr.erase( outpStr.size() - 2 );
		outpStr = "cardNos=[" + outpStr + "];\n";
		printf("outp imgRead.txt:\n%s\n", outpStr.c_str());
		std::ofstream ofs("imgRead.txt");
		ofs << outpStr.c_str() << std::endl;*/

		std::stringstream imgdir;
		imgdir << "imgs/" << i << "/";
		putLog(imgdir.str().c_str(), "completion", "true");
	}
	putLog("", "completion", "true");
	return 0;
}


double getConcordanceRate(cv::Mat paramingImg, cv::Mat ansImg, int x, int y, double resParam, bool isTrim){
	cv::Mat paramedImg = paramingImg.clone();
	if(isTrim){
		cv::Rect trimArea(x, y, int(round(double(cvWidth)/resParam)), int(round(double(cvHeight)/resParam)));
		paramedImg = paramedImg(trimArea);
	}
	cv::resize(paramedImg, paramedImg, cv::Size(), resParam, resParam);
	if(paramedImg.rows < cvHeight){
		return 0;
	}
	if(isTrim){
		if(paramedImg.cols!=cvWidth || paramedImg.rows!=cvHeight){
			printf("!!!!!!!!!!!Size Error!!!!!!!!!!!! true=%d,%d  real=%d,%d",cvWidth, cvHeight, paramedImg.cols, paramedImg.rows);
		}
	}
	double maxVal;
	cv::Point max_pt;
	cv::Mat matchedImg;
	cv::matchTemplate(paramedImg, ansImg, matchedImg, CV_TM_CCOEFF_NORMED);
	cv::minMaxLoc(matchedImg, NULL, &maxVal, NULL, &max_pt);
	return maxVal;
}
int turningImg(){
	printf("Turning onedic.png and oneoutp.png\n");
	cv::Mat dicImg = cv::imread("onedic.png", 0);
	if (dicImg.data == NULL) {
		printf("onedic.pngが見つかりません\n");
		return 0;
	}
	cv::Mat outpImg = cv::imread("oneoutp.png", 0);
	if (outpImg.data == NULL) {
		printf("oneoutp.pngが見つかりません\n");
		return 0;
	}
	
	printf("2分法のようなアレでresParamを導出します\n");
	double resParam=0;
	double stopDiff=0.00000;
	double trpl=2/double(dicImg.rows);
	double tvl=getConcordanceRate(dicImg, outpImg, 0, 0, trpl, false);
	double trpr=1;
	double tvr=getConcordanceRate(dicImg, outpImg, 0, 0, trpr, false);
	double trpc, tvc;
	while(std::abs(tvl-tvr) > stopDiff){
		trpc=(trpl+trpr)/2;
		tvc=getConcordanceRate(dicImg, outpImg, 0, 0, trpc, false);
		if(tvl < tvr){
			tvl=tvc;
			trpl=trpc;
		}else{
			tvr=tvc;
			trpr=trpc;
		}
		// printf("size turning.. nowrate:%f\n",tvc);
	}
	resParam=trpc;
	cv::Mat toOutp;
	cv::resize(dicImg, toOutp, cv::Size(), resParam, resParam);
	cv::imwrite("resSample.png", toOutp);

	printf("総当たりで最適なTrimxyを導出します\n");
	int maxx = dicImg.cols - (cvWidth / resParam);
	int maxy = dicImg.rows - (cvHeight / resParam);
	int bestx=0;
	int besty=0;
	double bestval=0;
	double tmpval;
	for(int x=0; x<maxx; x++){
		for(int y=0; y<maxy; y++){
			tmpval=getConcordanceRate(dicImg, outpImg, x, y, resParam, true);
			if(bestval < tmpval){
				bestval=tmpval;
				bestx = x;
				besty = y;
				// printf("trim turning.. nowrate:%f\n",tmpval);
			}
		}
	}
	printf("****RESULT****\n\t//concordanceRate:%f\n\tdouble resParam = %f;\n\tint turnedx = %d;\b\n\tint turnedy = %d;\n", bestval, resParam, bestx, besty);


	cv::Rect trimArea(bestx, besty, int(round(double(cvWidth)/resParam)), int(round(double(cvHeight)/resParam)));
	toOutp = dicImg(trimArea);
	cv::resize(toOutp, toOutp, cv::Size(), resParam, resParam);
	cv::imwrite("trimSample.png", toOutp);
	
}


int makeDicBit(int n){
	double resParam = 0.816549;
	int turnedx = 15;
	int turnedy = 56;
	cv::Rect trimArea(turnedx, turnedy, int(round(double(cvWidth)/resParam)), int(round(double(cvHeight)/resParam)));
	std::string fname = "";
	std::string fname2 = "";
	cv::Mat smallImg;
	cv::Mat mini;
	fname = "tmpdic/card_" + digitString(n,5) + "_0.png";
	smallImg = cv::imread(fname.c_str(), 1);
	if (smallImg.data != NULL) {
		cv::resize(smallImg(trimArea), mini, cv::Size(), resParam*reReduceRate, resParam*reReduceRate);
		fname2 = "dic/" + digitString(n,5) + ".png";
		cv::imwrite(fname2.c_str(), mini);
	}else{
		return 1;
	}
	return 0;
}

int makeDictionaryBySmall(){
	for (int n = 0; n < maxcardNo; n++) {
		makeDicBit(n);
	}
	return 0;
}

int pullDic(){
	system("mkdir tmpdic");
	struct stat st;
	int ret;
	int AllSearchParam=30;
	int minnum;
	int forceFinishLimit;
	srand((unsigned) time(NULL));
	if(rand() % AllSearchParam == 0){
		//たまに全画像についてサーチする
		minnum=0;
		forceFinishLimit=maxcardNo;
		printf("総当たりサーチモードで実行します..\n");
	}else{
		//基本的には明らかになさそうな画像はサーチしない
		minnum=9020;
		forceFinishLimit=50;
		printf("省力サーチモードで実行します..\n");
	}
	int forceFinishVal=0;
	for(int mynum = minnum; mynum< maxcardNo; mynum++){
		std::string filename = "dic/" + digitString(mynum, 5) + ".png";
		ret=stat(filename.c_str(), &st);
		if(0!=ret){
			std::string url = "http://i.quiz.colopl.jp/img/card/small/card_" + digitString(mynum, 5) + "_0.png";
			std::string getComm = "";
			getComm = getComm + "wget -q -P tmpdic " + url.c_str();
			system(getComm.c_str());
			if(0 == makeDicBit(mynum)){
				//取得成功したときの処理
				forceFinishVal=0;
					printf("登録成功：%d\n",mynum);
			}else{
				//取得失敗したときの処理
				if(forceFinishVal++>forceFinishLimit){
					printf("処理打ち止め：%d\n",mynum);
					mynum=maxcardNo;
				}
			}
		}
	}
	system("rm -r tmpdic");
}

//引数を解釈して各処理を呼ぶ
int main(int argc, char *argv[])
{
	if (argc > 1 && !strcmp(argv[1], "/d")) {
		printf("使用前に/tの結果をソースに反映してリビルドしてください。small画像から辞書を作成します。\n");
		makeDictionaryBySmall();
	}
	else if(argc > 1 && !strcmp(argv[1], "/t")){
		printf("small画像を等倍画像に可能な限り合わせるための縮小レートと切り出し座標を計算します。\n");
		turningImg();
	}
	else if(argc > 1 && !strcmp(argv[1], "/do")){
		printf("辞書読み込みをせず、等倍画像の切り出しのみ実行します。\n");
		ModeDisassembly = true;
		mainAnalyze(argv[2]);
	}
	else if(argc > 1 && !strcmp(argv[1], "/b")){
		printf("PHPから読み込むための分散実行モードです。\n");
		mainAnalyze(argv[2]);
	}
	else if(argc > 1 && !strcmp(argv[1], "/r")){
		printf("辞書更新モードです。\n");
		pullDic();
	}
	else{
		printf("tanasin..\n");
		//mainAnalyze(argv[1]);
	}
}
