rem bat文件所在目录
cd %~dp0

rem 当前盘符
%~d0

rem 编译
sencha -q app build production

