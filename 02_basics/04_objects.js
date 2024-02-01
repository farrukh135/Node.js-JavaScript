// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Farrukh",
            lastname: "choudhary",
            password: {
                oldPassword: "123456789",
                newPassword: "987654321",
                location: {
                    firstLocation: "Karachi",
                    secondLocation: "Lahore"
                }
            }
        }
    }
}

console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "f@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in urdu",
    price: "999",
    courseInstructor: "Farrukh"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// // {
// //     "name": "Farrukh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]
