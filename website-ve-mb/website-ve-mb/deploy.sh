#!/bin/sh 
cd /Users/ACER/Desktop/CNPM NC/WebsiteVeMayBay/website-ve-mb
echo “Building React Project …” 
npm run build 
echo “Copying html file …” 
cp -r build html 
echo “Connecting to AWS VM and copying file to /var/www/html/ …” sudo scp -i [C:/Users/ACER/.ssh/serverdatabase.pem] -r html [ubuntu@ec2–xx–xxx–xxx–xx.us-east-2.compute.amazonaws.com]:/var/www 
echo “Removing html file from local directory …” 
rm -r html