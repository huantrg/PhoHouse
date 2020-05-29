const courses = [
  "Appertizers",
  "Bánh Mì - Baguette",
  "Cơm - Rice",
  "Phở - Noodle",
  "Bún - Vermicelli",
  "Beverages",
]

function getCourseName(number) {
  return courses[number]
}


function getAllCourseNames() {
  return courses
}

export { getAllCourseNames, getCourseName }
