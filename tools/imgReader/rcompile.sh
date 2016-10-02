echo "









--"

cd `dirname $0`
rm -f resget.cgi
g++ -o resget.cgi resget.cpp
./resget.cgi "nametest"