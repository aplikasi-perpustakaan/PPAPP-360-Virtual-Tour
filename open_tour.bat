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

REM Try Python 3 first (most common on modern Windows)
python -m http.server 8080 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo  Python not found, trying py launcher...
    py -3 -m http.server 8080 2>nul
)
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo  ERROR: Python is not installed or not on PATH.
    echo  Install Python from https://www.python.org/downloads/
    echo  or serve this folder with any static HTTP server.
    echo.
    pause
)
