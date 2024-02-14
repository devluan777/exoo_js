// Definindo a classe abstrata Animal
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Método abstrato que será implementado nas classes filhas
Animal.prototype.emitirSom = function() {
    throw new Error('O método emitirSom deve ser implementado nas classes filhas');
}

// Definindo a classe Cachorro, que herda de Animal
function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);
    this.raca = raca;
}

// Herdando os métodos de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Implementando o método emitirSom
Cachorro.prototype.emitirSom = function() {
    return `${this.nome} faz au au!`;
}

// Definindo a classe Gato, que herda de Animal
function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade);
    this.cor = cor;
}

// Herdando os métodos de Animal
Gato.prototype = Object.create(Animal.prototype);

// Implementando o método emitirSom
Gato.prototype.emitirSom = function() {
    return `${this.nome} faz miau!`;
}

// Criando instâncias de objetos
const cachorro1 = new Cachorro('Max', 3, 'Labrador');
const gato1 = new Gato('Luna', 2, 'Preto');
const cachorro2 = new Cachorro('Buddy', 5, 'Golden Retriever');

// Testando os métodos das instâncias
console.log(cachorro1.emitirSom()); 
console.log(gato1.emitirSom()); 
console.log(cachorro2.emitirSom()); 
