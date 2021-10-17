const express = require('express')
const path = require('path')
var {Client} = require('pg');
const PORT = process.env.PORT || 5000

var client = new Client({
  user: 'bxdhrqzeozmuws', // DB のユーザー名を指定
  host: 'ec2-18-207-72-235.compute-1.amazonaws.com',
  database: 'd2umj76u4q9ods',
  password: '021af8e3cc3e2d38f94982afedd7741c6214e93fbb09d0400e1d8373120b233e', // DB のパスワードを指定
  post: 5432
})

client.connect((err) => {
  if (err) {
    console.error(err);
  }else{
  console.log('success');
  }
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


