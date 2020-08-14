/*
The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype

An example of where the Prototype pattern is useful is the initialization of objects with values that match the default values.
The prototype object holds the default values that are copied over into a newly created object.
*/

let schoolPrototype = {
  enrollNewStudent(studentName) {
    console.log(
      'Enrolling a student with name = ',
      studentName,
      ' in school ',
      this.name
    );
  },
  conductClass(subject) {
    console.log(
      'Conducting class of subject name = ',
      subject,
      ' in school ',
      this.name
    );
  },
};

let modelHighSchool = Object.create(schoolPrototype, {
  name: { value: 'Model High School' },
  numOfStudents: { value: 1000 },
});

modelHighSchool.enrollNewStudent('Harry'); // Enrolling a student with name =  Harry  in school  Model High School
modelHighSchool.conductClass('Maths'); // Conducting class of subject name =  Maths  in school  Model High School

let piousHighSchool = Object.create(schoolPrototype, {
  name: { value: 'St.pious High School' },
  numOfStudents: { value: 1200 },
});

piousHighSchool.enrollNewStudent('Potter'); // Enrolling a student with name =  Potter  in school  St.pious High School
piousHighSchool.conductClass('Science'); // Conducting class of subject name =  Science  in school  St.pious High School
