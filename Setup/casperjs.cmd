@ECHO OFF
CLS
SET PHANTOMJS_EXECUTABLE=%APPDATA%\npm\node_modules\phantomjs\lib\phantom\bin\phantomjs.exe
%~dp0\node_modules\casperjs\bin\casperjs %*