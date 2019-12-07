import Vehiculo from '../models/Vehiculo';

export async function obtenerVehiculos(req, res) {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(
            vehiculos
        );
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function crearVehiculo(req, res) {
    console.log(req)
    console.log(res)
    try {
        const vehiculo = await Vehiculo.create({
            nroVehiculo: req.body.nroVehiculo,
            patente: req.body.patente,
            marca: req.body.marca,
            modelo: req.body.modelo,
            fechaCompra: req.body.fechaCompra,
            estado: req.body.estado,
            foto: req.body.foto,
            tipo: req.body.tipo,
            acoplado: req.body.acoplado,
            observaciones: req.body.observaciones,
            cantidadRuedas: req.body.cantidadRuedas,
            capacidadCarga: req.body.capacidadCarga
        });
        if (vehiculo) {
            res.status(201).json(
                vehiculo
            );
        } else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function obtenerVehiculo(req, res) {
    try {
        const vehiculo = await Vehiculo.findOne({
            where: { id: req.params.idVehiculo }
        });

        if (vehiculo) {
            res.json(
                vehiculo
            );
        } else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function borrarVehiculo(req, res) {
    try {
        const cantidadFilasBorradas = await Vehiculo.destroy({
            where: { id: req.params.idVehiculo }
        })
        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} vehiculos`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function modificarVehiculo(req, res) {
    try {
        const vehiculo = await Vehiculo.findOne({
            where: { id: req.params.idVehiculo }
        })

        if (vehiculo) {
            const vehiculoModificado = await vehiculo.update({
                nroVehiculo: req.body.nroVehiculo,
                patente: req.body.patente,
                marca: req.body.marca,
                modelo: req.body.modelo,
                fechaCompra: req.body.fechaCompra,
                estado: req.body.estado,
                foto: req.body.foto,
                tipo: req.body.tipo,
                acoplado: req.body.acoplado,
                observaciones: req.body.observaciones,
                cantidadRuedas: req.body.cantidadRuedas,
                capacidadCarga: req.body.capacidadCarga
            })

            res.json(
                vehiculoModificado
            )
        } else {
            res.status(404).json({
                data: {},
                message: 'No se encontro el vehiculo'
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}