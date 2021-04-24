// Dictionary and hash table

class Dictionary {
    constructor() {
        this.dictionary = {}
    }

    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

const persons = new Dictionary();
persons.add('Tasib', 19);
persons.add('Rafi', 22);
persons.add('Rakib', 18);
console.log(persons.dictionary);

const tasib = persons.get('Tasib');
console.log(tasib); // 19