import Sequalize from 'sequelize';
import database from '../database/database';

const Vehiculo = database.define('vehiculos',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nroVehiculo:{
        type: Sequalize.INTEGER,
        unique:true
    },
    patente:{
        type: Sequalize.STRING,
        unique:true
    },
    marca:{
        type: Sequalize.STRING
    },
    modelo:{
        type: Sequalize.STRING
    },
    fechaCompra:{
        type: Sequalize.DATEONLY
    },
    estado:{
        type: Sequalize.STRING
    },
    foto:{
        type: Sequalize.STRING
    },
    tipo:{
        type: Sequalize.STRING
    },
    observaciones:{
        type: Sequalize.STRING
    },
    acoplado:{
        type: Sequalize.STRING
    },
    cantidadRuedas:{
        type: Sequalize.INTEGER
    },
    capacidadCarga:{
        type: Sequalize.INTEGER
    },
});

export default Vehiculo