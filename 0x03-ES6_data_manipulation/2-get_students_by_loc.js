export default function getStudentsByLocation(students, city) {
  return Array.isArray(students) ? students.filter((student) => student.location === city) : [];
}
