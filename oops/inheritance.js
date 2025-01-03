class animal {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    speak(){
        console.log(`${this.name} can make sound`)
    }
}

class lion extends animal{
    speak(){
        console.log(`${this.name} roars.`)
    }
}

const coco = new lion("coco",10)

console.log(coco)
console.log(coco.speak())