#!/usr/bin/bash

apt-get update
apt-get upgrade
pkg upgrade -y
pkg update -y
pkg install nodejs -y
pkg install nodejs-lts -y
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
npm install


echo "[*] O BOT ESTÁ INSTALADO E PRONTO PARA SER USADO!!! Digite node index"
