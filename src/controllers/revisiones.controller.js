import Revision from '../models/Revision';

export async function obtenerRevisiones(req, res) {
    try {
        const revisiones = await Revision.findAll({
            where: {idVehiculo: req.params.idVehiculo}
        }
        );
        res.json(
            revisiones
        );
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function crearRevision(req, res) {

    try {
        const revision = await Revision.create({
            fechaEntrada: req.body.fechaEntrada,
            fechaSalida: req.body.fechaSalida,
            cantidad: req.body.cantidad,
            periodo: req.body.periodo,
            km: req.body.km,
            idTaller: req.body.idTaller,
            idVehiculo: req.body.idVehiculo,
            tareasRealizar: req.body.tareasRealizar,
            tareasRealizadas: req.body.tareasRealizadas,
            programado: req.body.programado

        });
        if (revision) {
            res.status(201).json(
                revision
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

export async function obtenerRevision(req, res) {
    try {
        const revision = await Revision.findOne({
            where: { id: req.params.idRevision }
        });

        if (revision) {
            res.json(
                revision
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

export async function borrarRevision(req, res) {
    try {
        const cantidadFilasBorradas = await Revision.destroy({
            where: { id: req.params.idRevision }
        })
        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} revisiones`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function modificarRevision(req, res) {
    try {
        const revision = await Revision.findOne({
            where: { id: req.params.idRevision }
        })

        if (revision) {
            const revisionModificada = await revision.update({
                fechaEntrada: req.body.fechaEntrada,
                fechaSalida: req.body.fechaSalida,
                cantidad: req.body.cantidad,
                periodo: req.body.periodo,
                km: req.body.km,
                idTaller: req.body.idTaller,
                idVehiculo: req.body.idVehiculo,
                tareasRealizar: req.body.tareasRealizar,
                tareasRealizadas: req.body.tareasRealizadas,
                programado: req.body.programado
            })

            res.json(
                revisionModificada
            )
        } else {
            res.status(404).json({
                data: {},
                message: 'No se encontro la revision'
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}