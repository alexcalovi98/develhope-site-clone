// visibility keywords: public, protected, private

// Web Development, Mobile Development, AI Week
enum Course {
    Web, Mobile, AI
}

// other method to define an enum
// type CourseType = "Web" | "Mobile" | "AI"
// let courseType: CourseType = "test" -> error because test is not specified in CourseType

interface DevelhopeDescription {
    printDescription(): void
}

abstract class DevelhopePerson {
    name: string;
    surname: string;
    course: Course;

    constructor(name: string, surname: string, course: Course) {
        this.name = name;
        this.surname = surname;
        this.course = course;
    }

    fullName(): string {
        return this.name + " " + this.surname;
    }
}

class Student extends DevelhopePerson implements DevelhopeDescription{
    private avgVotes: number;

    constructor(name: string, surname: string, course: Course) {
        super(name, surname, course)
        this.avgVotes = 0;
    }

    printDescription() {
        console.log("The student " + this.fullName() + " has an avg equal to: " + this.avgVotes)
    }
}

class Teacher extends DevelhopePerson implements DevelhopeDescription {
    private lessonNotes: string;

    constructor(name: string, surname: string, course: Course) {
        super(name, surname, course)
        this.lessonNotes = "Lorem ipsum dolorem"
    }

    printDescription() {
        console.log("The teacher " + this.fullName() + " has this lesson notes: " + this.lessonNotes)
    }
}

let student = new Student("Felice", "Russo", Course.Web)
let teacher = new Teacher("Alex", "Calovi", Course.Web)

student.printDescription()
teacher.printDescription()