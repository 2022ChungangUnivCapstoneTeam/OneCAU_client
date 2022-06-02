#!/bin/bash

while true; do
    read -p "Do you wish to run the script for OneLink_CAU Frontend? [y/n]: " yn
    case $yn in
        [Yy]* ) npm install;
#               yarn start; break;;		  # Original Ubuntu
                npm run start; break;;    # this is for WSL
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no";;
    esac
done

echo "Starting OneLink_CAU Frontend"
