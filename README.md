## About the project ..

I'm using "yarn" and the database is SQLITE. But, you can change it and use one of your own preference.

## Dependencies used

- typescript -D
- @types/node -D
- ts-node-dev -D (equal to nodemon, but with integration to typescript)
- express (deal with routes)
- @types/express -D
- prisma -D
- @prisma/client
- nodemailer (mails sending)
- @types/nodemailer -D

## Some steps for the application works

0. BEFORE ALL:
   0.1. Install all dependencies
   0.2. Initialize project with "yarn init -y"
   0.3. Initialize project with "yarn tsc --init"
1. Go to "tsconfig.json" and search for:
   1.1. "rootDir": "./", then add "src". The command will be like this: "rootDir": "./src",
   1.2. "outDir": "./", the add "dist". The command will be like this: "outDir": "./dist",

2. In "package.json":
   2.1. create a "scripts", then write "dev": "ts-node-dev src/server.ts",

3. Config the database
   3.1. In this project, I'm using PRISMA.IO, so .. just type: "yarn prisma init"

## Useful commands

- yarn prisma migrate dev (In development enviroment)
- yarn prisma migrate deploy (In deploy enviroment)
- yarn prisma studio
