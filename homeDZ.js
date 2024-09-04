//Завдання 8

function User(
  fullName,
  age,
  gender,
  email,
  country,
  salary,
  position,
  department
) {
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.country = country;
  this.salary = salary;
  this.position = position;
  this.department = department;
}
const users = [
  new User(
    "John Doe",
    28,
    "Male",
    "john.doe@ukr.net",
    "USA",
    50000,
    "Developer",
    "IT"
  ),
  new User(
    "Jane Smith",
    32,
    "Female",
    "jane.smith@ukr.net",
    "UK",
    60000,
    "Designer",
    "Creative"
  ),
  new User(
    "Alice Johnson",
    25,
    "Female",
    "alice.johnson@gmail.com",
    "Ukraine",
    55000,
    "Manager",
    "Sales"
  ),
  new User(
    "Bob Brown",
    40,
    "Male",
    "bob.brown@gmail.com",
    "Australia",
    70000,
    "Team Lead",
    "Operations"
  ),
  new User(
    "Charlie Davis",
    35,
    "Male",
    "charlie.davis@gmail.com",
    "New Zealand",
    65000,
    "Analyst",
    "Finance"
  ),
  new User(
    "Emily Wilson",
    29,
    "Female",
    "emily.wilson@ukr.net",
    "Ukraine",
    62000,
    "Engineer",
    "Tech"
  ),
  new User(
    "David Martinez",
    45,
    "Male",
    "david.martinez@gmail.com",
    "Spain",
    75000,
    "Director",
    "HR"
  ),
  new User(
    "Sophia Lee",
    30,
    "Female",
    "sophia.lee@ukr.net",
    "Ukraine",
    58000,
    "Consultant",
    "Legal"
  ),
  new User(
    "Michael Taylor",
    37,
    "Male",
    "michael.taylor@ukr.net",
    "France",
    70000,
    "Architect",
    "Design"
  ),
  new User(
    "Olivia Anderson",
    26,
    "Female",
    "olivia.anderson@gmail.com",
    "Ukraine",
    54000,
    "Marketing Specialist",
    "Marketing"
  ),
];

console.log(users);
//9.Отримати користувачів, у яких електронна пошта закінчується на "@gmail.com" (Масив користувачів).
function getGmailUsers(users) {
  return users.filter((user) => user.email.endsWith("@gmail.com"));
}
const gmailUsers = getGmailUsers(users);
console.log(gmailUsers);
//10.Отримати електронні пошти всіх повнолітніх жінок, не старших 30 років, що проживають в Україні (Масив рядків).
function getEmailWomen(users) {
  return users
    .filter(
      (user) =>
        user.age >= 18 &&
        user.age <= 30 &&
        user.gender === "Female" &&
        user.country === "Ukraine"
    )
    .map((user) => user.email);
}
const youngWomenEmails = getEmailWomen(users);
console.log(youngWomenEmails);

//11.Отримати всі вікові показники повнолітніх чоловіків (Масив чисел).
function MaleAges(users) {
  return users
    .filter((user) => user.age >= 18 && user.gender === "Male")
    .map((user) => user.age);
}

const adultMaleAges = MaleAges(users);
console.log(adultMaleAges);

//12.Знайти найстаршого користувача (Користувач).
function OldUser(users) {
  return users.reduce((oldest, user) => {
    return user.age > oldest.age ? user : oldest;
  });
}

const oldestUser = OldUser(users);
console.log(oldestUser);

//4.Створити об'єкт "Квиток у кіно" і визначити всі його властивості.
const cinemaTicket = {
  movieTitle: "Avatar",
  showTime: "19:00",
  seat: "A12",
  price: 30,
  buyerName: "Petro",
};

console.log("Movie Title:", cinemaTicket.movieTitle);
console.log("Show Time:", cinemaTicket.showTime);
console.log("Seat:", cinemaTicket.seat);
console.log("Price:", cinemaTicket.price);
console.log("Buyer Name:", cinemaTicket.buyerName);

const properties = Object.keys(cinemaTicket);
console.log("Properties:", properties);

//5.Створити об'єкт "проект". Він має назву, наприклад, FaceBook. У нього є розробник, у якого є ім'я, прізвище і адреса, а в адреси є країна та місто.
const project = {
  name: "FaceBook",
  developer: {
    firstName: "Mark",
    lastName: "Zuckerberg",
    address: {
      country: "Ukraine",
      city: "Kiev",
    },
  },
};

//7.Написати функцію, яка приймає об'єкт та назву властивості, перевіряє їх наявність у об'єкті і повертає true або false.
function hasProperty(obj, propertyName) {
  return propertyName in obj;
}

console.log(hasProperty(project, "name"));
console.log(hasProperty(project, "developer"));
console.log(hasProperty(project, "address"));
console.log(hasProperty(project.developer, "address"));
