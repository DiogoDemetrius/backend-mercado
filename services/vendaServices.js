const Compra = require("../model/Compra");

const vendaServices = {
    async getVendas() {
        return await Compra.find();
    },
    async getVenda(id) {
        return await Compra.findById(id);
    },
    async getVendaByDate(data) {
        return await Compra.find({ data: data });
    },
    async getVendaByFuncionario(id_funcionario) {
        return await Compra.find({ id_funcionario: id_funcionario });
    },
    async getVendaByCliente(id_cliente) {
        return await Compra.find({ id_cliente: id_cliente });
    }
}

module.exports = vendaServices;