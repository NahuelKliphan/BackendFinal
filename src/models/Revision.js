import Sequalize from 'sequelize';
import database from '../database/database';

const Revision = database.define('revisiones',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEntrada:{
        type: Sequalize.DATE
    },
    fechaSalida:{
        type: Sequalize.DATE
    },
    cantidad:{
        type: Sequalize.INTEGER
    },
    periodo:{
        type: Sequalize.INTEGER
    },
    km:{
        type: Sequalize.DOUBLE
    },
    idTaller:{
        type: Sequalize.INTEGER
    },
    idVehiculo:{
        type: Sequalize.INTEGER
    },
    tareasRealizar:{
        type: Sequalize.STRING
    },
    tareasRealizadas:{
        type: Sequalize.STRING
    },
    programado:{
        type: Sequalize.BOOLEAN
    }

});

export default Revision