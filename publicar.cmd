@echo off
chcp 65001 >nul
cd /d "%~dp0"
set LOG=%~dp0publicar-log.txt
echo ==== Publicacao do site Jocelio Lopes ==== > "%LOG%"
echo %date% %time% >> "%LOG%"
echo.
echo [1/4] Verificando Node e npm...
call node -v >> "%LOG%" 2>&1 || (echo Node.js nao encontrado. & echo ERRO: node ausente >> "%LOG%" & pause & exit /b 1)
call npm -v >> "%LOG%" 2>&1

echo [2/4] Instalando dependencias (pode levar 1-2 min)...
echo ==== npm install ==== >> "%LOG%"
call npm install --no-audit --no-fund >> "%LOG%" 2>&1 || (echo Falha no npm install. Veja publicar-log.txt & echo ERRO: npm install >> "%LOG%" & pause & exit /b 1)

echo [3/4] Testando o build de producao...
echo ==== npm run build ==== >> "%LOG%"
call npm run build >> "%LOG%" 2>&1 || (echo Falha no build. Veja publicar-log.txt & echo ERRO: build >> "%LOG%" & pause & exit /b 1)
call npx tsc -b >> "%LOG%" 2>&1 && echo TYPECHECK OK >> "%LOG%" || echo TYPECHECK COM AVISOS >> "%LOG%"

echo [4/4] Publicando na Vercel (projeto jocelio-lopes)...
echo ==== vercel ==== >> "%LOG%"
call npx --yes vercel@latest whoami >> "%LOG%" 2>&1
if errorlevel 1 (
  echo Voce precisa entrar na Vercel. Siga as instrucoes abaixo:
  call npx --yes vercel@latest login
)
call npx --yes vercel@latest link --yes --project jocelio-lopes --scope brenomarques19176-9282 >> "%LOG%" 2>&1 || (echo Falha ao vincular o projeto. Veja publicar-log.txt & echo ERRO: link >> "%LOG%" & pause & exit /b 1)
call npx --yes vercel@latest deploy --prod --yes --scope brenomarques19176-9282 >> "%LOG%" 2>&1 || (echo Falha no deploy. Veja publicar-log.txt & echo ERRO: deploy >> "%LOG%" & pause & exit /b 1)
echo ==== CONCLUIDO ==== >> "%LOG%"
echo.
echo Publicado com sucesso! Pode fechar esta janela.
pause
