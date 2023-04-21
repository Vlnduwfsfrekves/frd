class Storage{
    constructor(array){
        this.array = array;
    }
    getItems(){
        return this.array;
    }
    addItem(item){
        this.array.push(item);
    }
    removeItem(item){
        const index=this.array.indexOf(item);
        if (index!==-1) {
            this.array.splice(index, 1);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);