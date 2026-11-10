@echo off
chcp 65001 >nul
cd /d "%~dp0"
set LOG=%~dp0publicar-log.txt
echo ==== Publicacao do site Jocelio Lopes ==== > "%LOG%"
echo %date% %time% >> "%LOG%"
echo.
echo O build e feito nos servidores da Vercel (se falhar, o site atual continua no ar).
echo.
echo [1/2] Verificando conta da Vercel...
call npx --yes vercel@latest whoami >> "%LOG%" 2>&1
if errorlevel 1 (
  echo Voce precisa entrar na Vercel. Siga as instrucoes abaixo:
  call npx --yes vercel@latest login
)
call npx --yes vercel@latest link --yes --project jocelio-lopes --scope brenomarques19176-9282 >> "%LOG%" 2>&1 || (echo Falha ao vincular o projeto. Veja publicar-log.txt & echo ERRO: link >> "%LOG%" & pause & exit /b 1)

echo [2/2] Enviando e publicando (build na Vercel, cerca de 1 min)...
echo ==== vercel deploy ==== >> "%LOG%"
call npx --yes vercel@latest deploy --prod --yes --scope brenomarques19176-9282 >> "%LOG%" 2>&1 || (echo Falha no deploy. Veja publicar-log.txt & echo ERRO: deploy >> "%LOG%" & pause & exit /b 1)
echo ==== CONCLUIDO ==== >> "%LOG%"
echo.
echo Publicado com sucesso! Pode fechar esta janela.
pause
