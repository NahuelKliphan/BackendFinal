import { Router } from 'express'
import { obtenerRevisiones,obtenerRevision,crearRevision,modificarRevision,borrarRevision } from '../../src/controllers/revisiones.controller'

const revisionesRutas = Router();

revisionesRutas.get('/:idVehiculo', obtenerRevisiones);
revisionesRutas.get('/:idRevision', obtenerRevision);
revisionesRutas.post('/', crearRevision);
revisionesRutas.put('/:idRevision', modificarRevision);
revisionesRutas.delete('/:idRevision', borrarRevision);

export default revisionesRutas