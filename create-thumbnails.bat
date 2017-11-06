@echo off

REM ImageMagick is installed - https://www.imagemagick.org/

FOR %%d in (attacus) DO (
  echo directory: %%d
  FOR %%a in ("%%d\*.jpg") DO (
    echo file: %%a
    magick %%a -thumbnail 320 %%~pa\%%~na-320.png
  )
  echo ---------
)
