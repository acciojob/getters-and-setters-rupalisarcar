//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age=age;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name,age);
	}
	get study(){
		return `${this.name} is studying`;
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name, age);
	}
	get teach(){
		return `${this.name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person = new Person("John", 25);
console.log(person.name)
const student = new Student("John",30);
const teacher = new Teacher("John",30);
console.log(student.study)
console.log(teacher.teach)

