const description = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
};
const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea"
};

const argv = require("yargs")
    .command('crear', 'Crea tarea por hacer', { description })
    .command('actualizar', 'Actualiza una tarea por hacer', { description, completado })
    .command('borrar', 'Elimina una tarea de la lista', { description })
    .command('listar', 'Elimina una tarea de la lista', { completado })
    .help().argv;

module.exports = {
    argv
}