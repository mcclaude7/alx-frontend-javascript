interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Directors extends Teacher {
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

const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'kigali',
    contract: false,
    numberOfReports: 10,
};