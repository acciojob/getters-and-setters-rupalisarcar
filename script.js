//complete this code
class Person {
	constructor(name:string, age:number){
		this.name=name;
		this.age=age;
	}
	get name(){
		return `${this.name}`;
	}
	set age(age:number){
		this.age=age;
	}
}

class Student extends Person {
	study():void{
		return `${this.name} is studying`;
	}
}

class Teacher extends Person {
	teach():void{
		return `${this.name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const student = new Student("John",30);
const teacher = new Teacher("John",30);
console.log(student.study)
console.log(teacher.teach)

