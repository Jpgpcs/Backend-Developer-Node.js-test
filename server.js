const app = require('./app');

const start = async ()=> {
  try {
    app.listen(3000, ()=> {
      console.log('Server on');
    })
  } catch (err) {
    console.log(err);
  }
}

start()