下2つを実行

scl enable devtoolset-2 bash
export LD_LIBRARY_PATH=/usr/local/lib
そのあと1回目だけcompile.shでコンパイル必須

以降下でコンパイルと実行できる（パス忘れると通らなかったり動かなかったりする）
./onlyCompile
