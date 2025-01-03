class bottleMaker  {
    constructor(brandName,color, price , material){
        this.brand = brandName,
        this.color = color,
        this.mrp = price,
        this.material = material
    }
}

const bottle1 = new bottleMaker("milton","black",300,"metal")
console.log(bottle1)

const bottle2 = new bottleMaker("cello","red",500,"plastic")
console.log(bottle2)