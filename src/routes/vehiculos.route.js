import { Router } from 'express'
import { obtenerVehiculos,obtenerVehiculo,crearVehiculo,modificarVehiculo,borrarVehiculo } from '../../src/controllers/vehiculos.controller'

const vehiculosRutas = Router();

vehiculosRutas.get('/', obtenerVehiculos);
vehiculosRutas.get('/:idVehiculo', obtenerVehiculo);
vehiculosRutas.post('/', crearVehiculo);
vehiculosRutas.put('/:idVehiculo', modificarVehiculo);
vehiculosRutas.delete('/:idVehiculo', borrarVehiculo);

export default vehiculosRutas