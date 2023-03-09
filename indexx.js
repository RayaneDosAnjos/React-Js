class Person{
    constructor(name, age){
        this.name = name
        this.age = age

    }

    greetings(){
        console.log("Olá, tudo bem? Meu nome é", this.name, "e tenho", this.age, "anos")  
    }
}

class Aluno extends Person{
    constructor(name,age,turma){
        super(name,age)
        this.turma = turma
    }
}

let Junior = new Aluno("Junior", 25, "102")
Junior.greetings()
