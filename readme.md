This is a redundancy checker app made by me for IITH Gymkhana elections 2016. It uses ```MongoDB``` for the database and ```nodejs``` for backend operations.

**Developer** - Chandan Sinha

## Instructions for running this app -
*  Download 'node.js' and 'mongodb' from their respective websites and install them. Windows will be preferable (because of path described below)

* Download the app and store it in C:\ drive. (or any other location of your choice)

* Open cmd and move to the place where you saved the folder.
```sh
cd /folder-path
```

* Install node-modules (make sure you've npm installed) -
```sh
npm install
```

* Go to C:\ drive and type this -
```sh   
    cd "Program Files"/MongoDB/Server/3.2/bin
```

* Then type-  
```sh 
mongod --dbpath C:\mongoapp\database 
```

* Open other cmd (keep the previous one running) and type - npm start

* Open browser and go to ```localhost:3000```