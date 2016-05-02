CasperJs Testing
================

 CasperJs testing 90 minute presentation

View the slides at:-

https://cdn.rawgit.com/rippo/testing.casperjs.presentation.vscode.50mins/master/Casper.Mvc/Casper.Mvc/Slides/index.html#1

To install (use node npm):-
````
$ npm install casperjs -g
$ npm install phantomjs -g
````
Edit the following file:-
````
$ notepad %APPDATA%\npm\casperjs.cmd
````
and paste the following code to remove the dependancy on Python and to use the latest version of Phantom
````
@ECHO OFF
CLS
SET PHANTOMJS_EXECUTABLE=%APPDATA%\npm\node_modules\phantomjs\lib\phantom\bin\phantomjs.exe
%~dp0\node_modules\casperjs\bin\casperjs %*
````