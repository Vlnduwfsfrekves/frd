class User{
    constructor(object){
        for(let i = 0;i<=Object.keys(object).length;i++){
            if(Object.keys(object)[i]==='name'){
                this.name = Object.values(object)[i]
            }else if(Object.keys(object)[i]==='age'){
                this.age = Object.values(object)[i]
            }else if(Object.keys(object)[i]==='followers'){
                this.followers = Object.values(object)[i]
            }
        }
    }
    getInfo(){
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});