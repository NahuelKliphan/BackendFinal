import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import talleresRutas from './routes/talleres.route';
import vehiculosRutas from './routes/vehiculos.route';
import revisionesRutas from './routes/revision.route';


//inicilizar express
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) { //Permite cualquier conexion al server. Quitarlo desencadenara desastres que ningun mortal esta preparado para aguantar
  res.header("Access-Control-Allow-Origin",'*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","*")
  next();
});

//rutas
app.use('/api/talleres', talleresRutas);
app.use('/api/vehiculos', vehiculosRutas);
app.use('/api/revisiones', revisionesRutas);

//sincronizacion con la db
//{force:true}
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;