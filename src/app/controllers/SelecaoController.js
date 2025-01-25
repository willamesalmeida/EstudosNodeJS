const conexao = require("../database/conexao");
const SelecaoRepository = require("../repositories/SelecaoRepository");

class SelecaoController {
  async index(req, res) {
    const selecoes = await SelecaoRepository.findAll();
    res.json(selecoes);
  }

  async show(req, res) {
    const { id } = req.params;
    const selecao = await SelecaoRepository.findById(id);
    res.json(selecao);
  }

  async store(req, res) {
    const selecao = req.body;
    const create = await SelecaoRepository.create(selecao);
    res.json(create);
  }

  async delete(req, res) {
    const id = req.params.id;
    const deleteTeam = await SelecaoRepository.delete(id);
    res.json(deleteTeam);
  }

  async update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const updateTeam = await SelecaoRepository.update(id, selecao)
    res.json(updateTeam)
  }
}

module.exports = new SelecaoController();
