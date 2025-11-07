interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Director extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Elie',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'Kigali',
    contract: false,
};

const director1: Director = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'kigali',
    contract: false,
    numberOfReports: 10,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Interface that describes the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface that describes the public methods of the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
// class StudentClass implements StudentClassInterface {
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
