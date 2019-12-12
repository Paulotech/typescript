class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0
 
    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}


class Concessonaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome:string, carroPreferido:string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

// Criar carros
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

// Montar a Lista de Carros da Concessionária
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessonaria('Av Contorno', listaDeCarros)

// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())

// Comprar o carro 
let cliente = new Pessoa('Paulo', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
       
        // Comprar o carro
        cliente.comprarCarro(carro)
    }
})
console.log(cliente.dizerCarroQueTem())