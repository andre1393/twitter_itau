@echo off
start startMongod.bat
chcp 65001
echo salvando arquivos json
java -jar "%cd%\projeto java\TwitterReadAPI\app.jar"
echo arquivos json salvos
start startNodemon.bat

PAUSE
:start
CLS
echo SELECIONE A SUA OPCAO:
echo 1 - Lista dos 5 usuarios com mais seguidores
echo 2 - Lista com o total de tweets em portugues para cada #tag
echo 3 - Lista com o total de tweets por hora do dia
echo 9 - Encerrar

SET /P _option=
IF "%_option%"=="1" GOTO :topUsers 

IF "%_option%"=="2" GOTO :totalPT

IF "%_option%"=="3" GOTO :totalHours

IF "%_option%"=="9" GOTO :end

echo Selecione uma opcao entre 1 e 4
PAUSE
CLS
GOTO:start

:topUsers
start "" http://localhost:3000/topUsers
GOTO :start

:totalPT
start "" http://localhost:3000/totalPT
GOTO :start

:totalHours
start "" http://localhost:3000/totalHours
GOTO :start

:end
exit