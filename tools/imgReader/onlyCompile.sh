echo "









"

cd `dirname $0`
rm -f imgReader.out
mv io/nametest/cvImg io/nametest/inputImg
cp io/nametest/imgList.info io/nametest/inputImg/imgList.info
rm -f io/nametest/result.json
export LD_LIBRARY_PATH=/usr/local/lib

g++ -o imgReader.out imgReader.cpp -I/usr/local/include -L/usr/local/lib -lopencv_core -lopencv_highgui -lopencv_imgproc

setarch `uname -m` -R statifier imgReader.out sImgReader.out
