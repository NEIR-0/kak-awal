1. npm init -y
2. npm i pg express ejs
3. npm i -d nodemon
4. touch connection.js migration.js seeder.js app.js
5. mkdir controllers models views routers
6. touch controllers/controller.js models/class.js models/model.js routers/index.js
7. cek ada gitignore atau tidak kalau tidak buatkan gitignorenya
8. setting connection => https://node-postgres.com/features/connecting import diganti dengan const dan gunakan require
9. setelah setting dicek dengan function koneksinya lalu dimodule exports
10. lanjut dimigration buat query drop table setelah itu buat query table dari yang tidak ada foreign key nya.

11. seed data => ambil dengan fs.readfilesync jgn lupa dimap lalu dijoin setelah itu buat query utk insert dan buat async function
12. setting express pada app.js => https://expressjs.com/en/starter/hello-world.html copas aja

13. tambahkan app set view engine, ejs

14. pada folder routers di index js bisa copy dari => https://expressjs.com/en/guide/routing.html bagian express.routers

15. pada app.js jgn lupa diuse express url encoded extend true

16. install boostraps bisa gunakan => https://getbootstrap.com/docs/5.3/getting-started/download/
