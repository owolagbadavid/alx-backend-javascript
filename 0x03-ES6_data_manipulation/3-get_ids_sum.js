export default function getStudentIdsSum(students) {
  return students.reduce((a, b) => a.id || a + b.id, 0);
}
