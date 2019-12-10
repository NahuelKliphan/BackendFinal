import Sequalize, { HasMany } from 'sequelize';
import database from '../database/database';
import Taller from '../models/Taller';
import Vehiculo from './Vehiculo';

const Revision = database.define('revisiones',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEntrada:{
        type: Sequalize.DATEONLY
    },
    fechaSalida:{
        type: Sequalize.DATEONLY
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
        type: Sequalize.INTEGER,
        foreignKey: Taller.id
    },
    idVehiculo:{
        type: Sequalize.INTEGER,
        foreignKey: Vehiculo.id
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

Revision.belongsTo(Vehiculo,{
    foreignKey: 'idVehiculo',
    onDelete: 'CASCADE',
});

Revision.belongsTo(Taller,{

    foreignKey: 'idTaller',
    onDelete: 'CASCADE',

});


export default Revision