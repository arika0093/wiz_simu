#include <iostream>
#include <stdio.h>
#include <string>
#include <fstream>
#include <iostream>
#include <sys/stat.h>
#include <unistd.h>
#include <limits.h>
#include <sys/types.h>
#include <sstream>
#include <stdlib.h>


std::string wd;
std::stringstream outp;

//ファイル読み込み
std::string readFile(const char *filename)
{
	std::stringstream fn;
	fn << wd << filename;
        std::ifstream ifs(fn.str().c_str());
        return std::string(std::istreambuf_iterator<char>(ifs),
                      std::istreambuf_iterator<char>());
}

void putLog(int isQuot, const char dir[], const char fn[]){
	std::stringstream path;
	path << dir << fn;
	std::string tmpval=readFile(path.str().c_str());
	std::string comma=",";
	if(fn=="errorMsg"){
		comma="";
	}
	if(tmpval.size()==0){
		outp << "\"" << fn  << "\"" << ":" << "\"undefined\"" << comma;
	}else{
		if(isQuot==1){
			outp << "\"" << fn  << "\"" << ":\"" << tmpval.c_str() << "\"" << comma;
		}else{
			outp << "\"" << fn  << "\"" << ":" << tmpval.c_str() << comma;
		}
	}
	outp << "";
}

std::string i2s(int myi){
	std::stringstream si2s;
	si2s << myi;
	return si2s.str();
}

//自身のパスを返す
std::string get_selfpath() {
    char buff[PATH_MAX];
    ssize_t len = ::readlink("/proc/self/exe", buff, sizeof(buff)-1);
    if (len != -1) {
      buff[len] = '\0';
      return std::string(buff);
    }
}

int main(int argc, char *argv[]){
	outp << "Content-Type: application/json; charset=utf-8\n\n";

	const char* raw = getenv("QUERY_STRING");
	std::string query_string = raw?raw:"";
	if(query_string.size()>0){
		wd = wd + "io/" + query_string + "/";
	}else{
		if(argc>1){
			wd = wd + "io/" + argv[1] + "/";
		}else{
			outp << "{\"isFinite\":true,\"error\":true,\"errorMsg\":\"no ID input\"}";
			std::cout << outp.str().c_str();
			return 0;
		}
	}

	struct stat stw;
	const char* filewd = wd.c_str();
	int retw = stat(filewd, &stw);
	if(retw != 0){
		outp << "{\"isFinite\":true,\"error\":true,\"errorMsg\":\"ID not found\"}";
		std::cout << outp.str().c_str();
		return 0;
	}

	std::string resJson = readFile("result.json");
	if(resJson.size() > 0){
		std::cout << resJson.c_str();
		return 0;
	}else{

		outp << "{";
		putLog(1, "log/", "completion");
		putLog(0, "log/", "getPath");
		putLog(1, "log/", "id");
		putLog(0, "log/", "imgNum");
		putLog(0, "log/", "loadDic");
		putLog(0, "log/", "loadImg");
		putLog(0, "log/", "pid");
		putLog(0, "log/", "error");
		putLog(1, "log/", "css");
		putLog(1, "log/", "errorMsg");
		outp << ",";

		bool isFinite=false;
		std::string pidStr=readFile("log/pid");
		struct stat st;
		std::stringstream pfn;
		pfn << "/proc/" << pidStr.c_str();
		const char* file = pfn.str().c_str();
		int ret = stat(file, &st);
		if(ret == 0){
			outp << "\"isFinite\":false,";
		}else{
			isFinite=true;
			outp << "\"isFinite\":true,";
		}

		std::string imgNumStr=readFile("log/imgNum");
		std::stringstream imgNumSS(imgNumStr);
		int imgNum;
		imgNumSS >> imgNum;
		outp << "\"imgs\":[";

		for(int imgsn=0; imgsn<imgNum; imgsn++){
			outp << "{";
			std::string nowDir = "log/imgs/" + i2s(imgsn) + "/";
			putLog(0, nowDir.c_str(), "completion");
			putLog(0, nowDir.c_str(), "id");
			putLog(1, nowDir.c_str(), "imgUrl");
			putLog(0, "nowDir.c_str()", "error");
			putLog(1, "nowDir.c_str()", "errorMsg");
			outp << ",";
			outp << "\"cards\":[";
			for(int cardsn=0; cardsn<15; cardsn++){
				std::string nowDir2 = "log/imgs/" + i2s(imgsn) + "/cards/" + i2s(cardsn) + "/";
				outp << "{";
				putLog(1, nowDir2.c_str(), "class");
				putLog(0, nowDir2.c_str(), "concordanceRate");
				putLog(1, nowDir2.c_str(), "html");
				putLog(0, nowDir2.c_str(), "id");
				putLog(0, nowDir2.c_str(), "imageno");
				putLog(0, nowDir2.c_str(), "error");
				putLog(1, nowDir2.c_str(), "errorMsg");
				if(cardsn==14){
					outp << "}";
				}else{
					outp << "},";
				}
			}
			outp << "]";
			if(imgsn+1==imgNum){
				outp << "}";
			}else{
				outp << "},";
			}
		}

		outp << "]";
		outp << "}\n";
		std::cout << outp.str().c_str();
		if(isFinite==true){
			std::stringstream outpfile;
			outpfile << wd.c_str() << "result.json";
			std::ofstream ofs(outpfile.str().c_str());
			ofs << outp.str().c_str();
			/*
			std::string execDir;
		  	std::string selfpath = get_selfpath();
			std::string dirTmp2;
			for(int n=0;n<selfpath.size();n++){
				dirTmp2+=selfpath[n];
				if(selfpath[n]=='/'){
					execDir=dirTmp2;
				}
			}
			printf("%s",execDir.c_str());*/
			std::stringstream syscomm1;
			std::stringstream syscomm2;
			syscomm1 << "rm -f -r " << wd << "log";
			syscomm2 << "rm -f -r " << wd << "inputImg";
			system(syscomm1.str().c_str());
			system(syscomm2.str().c_str());
		}
	}
	return 0;
}
