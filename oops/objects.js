const intern = {
    name:"rohan",
    age:23,
    technology:"reactJS",
    appliedFor:function (){
        console.log(`My name is ${this.name} and i had applied for ${this.technology}`);
    },
};

intern.appliedFor();