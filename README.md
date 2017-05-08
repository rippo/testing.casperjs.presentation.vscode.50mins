CasperJs Testing
================

 CasperJs testing 50 minute presentation

View the slides at:-

https://cdn.rawgit.com/rippo/testing.casperjs.presentation.vscode.50mins/master/Casper.Mvc/Casper.Mvc/Slides/index.html#1


Download phantomjs from http://phantomjs.org/download.html
(copy it to %APPDATA%\npm)


To install (use node npm):-
````
$ npm install casperjs -g
````
Edit the following file:-
````
$ notepad %APPDATA%\npm\casperjs.cmd
````
and paste the following code to remove the dependancy on Python and to use the latest version of Phantom
````
@ECHO OFF
CLS
SET PHANTOMJS_EXECUTABLE=%APPDATA%\npm\phantomjs.exe
%~dp0\node_modules\casperjs\bin\casperjs %*
````
