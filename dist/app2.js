"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessonaria = /** @class */ (function () {
    function Concessonaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessonaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessonaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessonaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
// Criar carros
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
// Montar a Lista de Carros da Concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessonaria('Av Contorno', listaDeCarros);
// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())
// Comprar o carro 
var cliente = new Pessoa('Paulo', 'Veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
