class HashTabel {
    constructor() {
        this.table = [];
    }

    code(key) {
        let code = '';
        for(let k of key) {
            code += k.charCodeAt();
        }
        return code % 37;
    }

    put(key, value) {
        let pos = this.code(key);
        console.log(`${pos} - ${key} - ${value}`);
        this.table[pos] = value;
    }

    get(key) {
        return this.table[this.code(key)];
    }

    remove(key) {
        this.table[this.code[key]] = undefined;
    }
}

export default HashTabel;