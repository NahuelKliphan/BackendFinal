import { Router } from 'express'
import { obtenerTalleres,obtenerTaller,crearTaller,modificarTaller,borrarTaller } from '../../src/controllers/talleres.controller'

const talleresRutas = Router();

talleresRutas.get('/', obtenerTalleres);
talleresRutas.get('/:idTaller', obtenerTaller);
talleresRutas.post('/', crearTaller);
talleresRutas.put('/:idTaller', modificarTaller);
talleresRutas.delete('/:idTaller', borrarTaller);

export default talleresRutas