@echo off
REM ===================================================================
REM  360 Virtual Tour – Portable Local Server Launcher
REM  Starts a temporary HTTP server and opens the browser.
REM ===================================================================

echo.
echo  ========================================
echo   360 Virtual Tour – Local Server
echo  ========================================
echo.
echo  Starting portable local web server...
echo  Press Ctrl+C in this window to stop.
echo.

REM Open the browser after a short delay (to let the server start)
start "" http://localhost:8080

REM Try Node.js first (enables auto-save API)
node dev_server.js 2>nul
if %ERRORLEVEL% EQU 0 (
    exit /b
)

REM Fallback to Python 3 (read-only mode, no auto-save)
echo  Node.js not found, falling back to Python (Auto-save disabled)
python -m http.server 8080 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo  Python not found, trying py launcher...
    py -3 -m http.server 8080 2>nul
)
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo  ERROR: Neither Node.js nor Python is installed.
    echo  Install Node.js from https://nodejs.org/ to enable auto-saving,
    echo  or serve this folder with any static HTTP server.
    echo.
    pause
)
