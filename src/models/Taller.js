import Sequalize from 'sequelize';
import database from '../database/database';

const Taller = database.define('talleres',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: Sequalize.STRING
    },
    direccion:{
        type: Sequalize.STRING
    },
    telefono:{
        type: Sequalize.STRING
    },
    encargado:{
        type: Sequalize.STRING
    }
});

export default Taller