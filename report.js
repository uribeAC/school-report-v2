const studentsName = ["Manolo", "Pepito"];
const studentsLastName = ["Diaz", "Crespo"];
const studentsAge = [24, 27];

const coursesName = ["Jardineria", "Cuidado de mascotas", "Ajedrez"];
const coursesDificulty = ["intermedio", "básico", "avanzado"];
const coursesDuration = [25, 5, 40];

const averageAge = (studentsAge[0] + studentsAge[1]) / studentsAge.length;

console.log("\nINFORME DE LA ESCUELA");

console.log(
  "\n   Cursos:\n   - " +
    coursesName[0] +
    " (" +
    coursesDificulty[0] +
    ", " +
    coursesDuration[0] +
    " horas)\n   - " +
    coursesName[1] +
    " (" +
    coursesDificulty[1] +
    ", " +
    coursesDuration[1] +
    " horas)\n   - " +
    coursesName[2] +
    " (" +
    coursesDificulty[2] +
    ", " +
    coursesDuration[2] +
    " horas)"
);

console.log(
  "\n   Alumnos:\n   - " +
    studentsName[0] +
    " " +
    studentsLastName[0] +
    ", " +
    studentsAge[0] +
    " años\n   - " +
    studentsName[1] +
    " " +
    studentsLastName[1] +
    ", " +
    studentsAge[1] +
    " años"
);

console.log("\n   Edad media de los alumnos: " + averageAge + " años\n");
