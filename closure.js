var student = (function(){
    var name;
    var age;

    return {
        setName: () => {
            name = 'John';
        },
        getName: () => {
            return name;
        },
        setAge: () => {
            age = '29';
        },
        getAge: () => {
            return age;
        }
    }
})();
console.log(student.getName());
student.setName();
console.log(student.getName());
student.setAge();
console.log(student.getAge());

class stud {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

var s1 = new stud('john', 30);
console.log(s1.name);
console.log(s1.getAge());

