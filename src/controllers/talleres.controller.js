import Taller from '../models/Taller';

export async function obtenerTalleres(req, res) {
  try {
    const talleres = await Taller.findAll();
    res.json(
        talleres
    );
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function crearTaller(req, res) {
  console.log(req)
  console.log(res)
  try {
    const taller = await Taller.create({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      encargado: req.body.encargado
    });
    if(taller) {
      res.status(201).json(
        taller
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

export async function obtenerTaller(req, res) {
  try {
    const taller = await Taller.findOne({
      where: { id: req.params.idTaller }
    });
  
    if(taller) {
      res.json(
        taller
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

export async function borrarTaller(req, res) {
  try {
    const cantidadFilasBorradas = await Taller.destroy({
      where: { id: req.params.idTaller }
    })
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadFilasBorradas} talleres`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function modificarTaller(req, res) {
  try {
    const taller = await Taller.findOne({
      where: { id: req.params.idTaller }
    })

    if(taller) {
      const tallerModificado = await taller.update({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        encargado: req.body.encargado
      })

      res.json(
        tallerModificado
      )
    } else {
      res.status(404).json({
        data: {},
        message: 'No se encontro el taller'
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}