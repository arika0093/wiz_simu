echo "









"

cd `dirname $0`
rm -f imgReader.out
rm -r nametest/log
export LD_LIBRARY_PATH=/usr/local/lib

g++ -o imgReader.out imgReader.cpp -I/usr/local/include -L/usr/local/lib -lopencv_core -lopencv_highgui -lopencv_imgproc

./imgReader.out
setarch `uname -m` -R statifier imgReader.out sImgReader.out
