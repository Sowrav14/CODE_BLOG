1. mkdir backend
2. cd backend
3. npm init -y
4. npm i express mongodb mongoose
5. npm install nodemon --save-dev
6. npm install typescript ts-node @types/node @types/express --save-dev
7. npx tsc --init
8. mkdir src, dist in root directory
9. in src dir. mkdir Config, Controllers, Models, Routes, Servers, Services
10. in Servers dir. create index.ts
11. in root file create .env and keep db credentials.
12. add scripts in package.json
        "start": "nodemon ./src/Server/index.ts",
        "dev": "nodemon ./src/Server/index.ts",
        "build": "tsc --project tsconfig.json"
13. connect to DB create in config dir with db.config.ts
14. start the server
15. create necessary routes in Route dir.
16. create model
17. create service eg. create in db
18. create controller eg. Put for create in db
19. create route that associate the controller.