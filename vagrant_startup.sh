#!/bin/bash

VAGRANT_HOME=/vagrant
APP_HOME=/app

echo "Creating app dir"
mkdir -p $APP_HOME
rm -rf $APP_HOME/*
cp -r $VAGRANT_HOME/src $APP_HOME
chown -R vagrant:vagrant $APP_HOME

echo "Installing npm modules"
cd $APP_HOME/src/api
rm -rf node_modules
npm cache clean .
npm install
npm install forever -g

echo "Starting application"
forever start index.js
