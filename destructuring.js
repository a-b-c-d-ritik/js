const course={
    coursename:"js",
    price:999,
    courseInstructor:"hitesh"
}

const {courseInstructor}=course
console.log(course)
console.log(courseInstructor)
const {courseInstructor:inst}=course
console.log(inst)