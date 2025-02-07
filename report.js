const studentName1 = "Manolo";
const studentName2 = "Pepito";
const studentLastName1 = "Diaz";
const studentLastName2 = "Crespo";
const studentAge1 = 24;
const studentAge2 = 27;

const courseName1 = "Jardineria";
const courseName2 = "Cuidado de mascotas";
const courseName3 = "Ajedrez";
const courseDificulty1 = "básico";
const courseDificulty2 = "intermedio";
const courseDificulty3 = "avanzado";
const courseDuration1 = 25;
const courseDuration2 = 5;
const courseDuration3 = 40;

const averageAge = (studentAge1 + studentAge2) / 2;

console.log("\nINFORME DE LA ESCUELA");

console.log(
  "\n   Cursos:\n   - " +
    courseName1 +
    " (" +
    courseDificulty1 +
    ", " +
    courseDuration1 +
    " horas)\n   - " +
    courseName2 +
    " (" +
    courseDificulty2 +
    ", " +
    courseDuration2 +
    " horas)\n   - " +
    courseName3 +
    " (" +
    courseDificulty3 +
    ", " +
    courseDuration3 +
    " horas)"
);

console.log(
  "\n   Alumnos:\n   - " +
    studentName1 +
    " " +
    studentLastName1 +
    ", " +
    studentAge1 +
    " años\n   - " +
    studentName2 +
    " " +
    studentLastName2 +
    ", " +
    studentAge2 +
    " años"
);

console.log("\n   Edad media de los alumnos: " + averageAge + " años\n");
