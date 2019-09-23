// https://www.pro-football-reference.com/teams/cin/2019_roster.htm
// const rows = [...document.querySelector("#games_played_team tbody").querySelectorAll("tr")]
// const players = rows.map((x) => {
//   const name = x.querySelector("[data-stat='player']").innerText
//   const number = parseInt(x.querySelector("[data-stat='uniform_number']").innerHTML, 10)
//   const weight = parseInt(x.querySelector("[data-stat='weight']").innerHTML, 10)
//   const height = x
//     .querySelector("[data-stat='height']")
//     .innerHTML.split("-")
//     .map((x) => parseInt(x, 10))
//     .reduce((acc, cv, ci) => {
//       const inches = ci === 0 ? 12 * cv : cv
//       return inches + acc
//     }, 0)
//   const birthDate = x.querySelector("[data-stat='birth_date_mod']").innerHTML
//   const splitBirthDate = birthDate.split("/")
//   const [monthString, dayString, year] = splitBirthDate
//   const monthInt = parseInt(monthString, 10)
//   const month = monthInt > 9 ? monthInt : `0${monthInt}`
//   const dayInt = parseInt(dayString, 10)
//   const day = dayInt > 9 ? dayInt : `0${dayInt}`
//   const iso8601BirthDate = `${year}-${month}-${day}`
//   const result = { name, number, weight, height, birthDate: iso8601BirthDate }
//   return result
// })
// copy(players)

export default [
  {
    name: "Geno Atkins",
    number: 97,
    weight: 300,
    height: 73,
    birthDate: "1988-03-28",
  },
  {
    name: "Jessie Bates",
    number: 30,
    weight: 200,
    height: 73,
    birthDate: "1997-02-26",
  },
  {
    name: "Giovani Bernard",
    number: 25,
    weight: 205,
    height: 69,
    birthDate: "1991-11-22",
  },
  {
    name: "Andrew Billings",
    number: 99,
    weight: 328,
    height: 73,
    birthDate: "1995-03-06",
  },
  {
    name: "Tyler Boyd",
    number: 83,
    weight: 203,
    height: 74,
    birthDate: "1994-11-15",
  },
  {
    name: "Andrew Brown",
    number: 93,
    weight: 290,
    height: 75,
    birthDate: "1995-12-30",
  },
  {
    name: "Preston Brown",
    number: 52,
    weight: 251,
    height: 73,
    birthDate: "1992-10-27",
  },
  {
    name: "Randy Bullock",
    number: 4,
    weight: 210,
    height: 69,
    birthDate: "1989-12-16",
  },
  {
    name: "Cethan Carter",
    number: 82,
    weight: 248,
    height: 75,
    birthDate: "1995-09-05",
  },
  {
    name: "Andy Dalton",
    number: 14,
    weight: 220,
    height: 74,
    birthDate: "1987-10-29",
  },
  {
    name: "Jake Dolegala",
    number: 7,
    weight: 242,
    height: 79,
    birthDate: "1996-10-07",
  },
  {
    name: "Carlos Dunlap",
    number: 96,
    weight: 285,
    height: 78,
    birthDate: "1989-02-28",
  },
  {
    name: "Tyler Eifert",
    number: 85,
    weight: 255,
    height: 78,
    birthDate: "1990-09-08",
  },
  {
    name: "Alex Erickson",
    number: 12,
    weight: 195,
    height: 72,
    birthDate: "1992-11-06",
  },
  {
    name: "Jordan Evans",
    number: 50,
    weight: 242,
    height: 75,
    birthDate: "1995-01-27",
  },
  {
    name: "Player ",
    number: null,
    weight: null,
    height: null,
    birthDate: "undefined-0NaN-0NaN",
  },
  {
    name: "Clayton Fejedelem",
    number: 42,
    weight: 205,
    height: 72,
    birthDate: "1993-06-02",
  },
  {
    name: "Ryan Finley",
    number: 5,
    weight: 207,
    height: 76,
    birthDate: "1994-12-26",
  },
  {
    name: "Ryan Glasgow",
    number: 98,
    weight: 300,
    height: 75,
    birthDate: "1993-09-30",
  },
  {
    name: "Cordy Glenn",
    number: 77,
    weight: 345,
    height: 78,
    birthDate: "1989-09-18",
  },
  {
    name: "A.J. Green",
    number: 18,
    weight: 210,
    height: 76,
    birthDate: "1988-07-31",
  },
  {
    name: "Clark Harris",
    number: 46,
    weight: 250,
    height: 77,
    birthDate: "1984-07-10",
  },
  {
    name: "Bobby Hart",
    number: 68,
    weight: 310,
    height: 77,
    birthDate: "1994-08-21",
  },
  {
    name: "Trey Hopkins",
    number: 66,
    weight: 316,
    height: 75,
    birthDate: "1992-07-06",
  },
  {
    name: "Sam Hubbard",
    number: 94,
    weight: 265,
    height: 77,
    birthDate: "1995-06-29",
  },
  {
    name: "Kevin Huber",
    number: 10,
    weight: 210,
    height: 73,
    birthDate: "1985-07-16",
  },
  {
    name: "William Jackson",
    number: 22,
    weight: 196,
    height: 72,
    birthDate: "1992-10-27",
  },
  {
    name: "John Jerry",
    number: 64,
    weight: 340,
    height: 77,
    birthDate: "1986-06-14",
  },
  {
    name: "Michael Jordan",
    number: 60,
    weight: 315,
    height: 78,
    birthDate: "1998-01-25",
  },
  {
    name: "Dre Kirkpatrick",
    number: 27,
    weight: 190,
    height: 74,
    birthDate: "1989-10-26",
  },
  {
    name: "Carl Lawson",
    number: 58,
    weight: 265,
    height: 74,
    birthDate: "1995-06-29",
  },
  {
    name: "Player ",
    number: null,
    weight: null,
    height: null,
    birthDate: "undefined-0NaN-0NaN",
  },
  {
    name: "Tony McRae",
    number: 29,
    weight: 185,
    height: 70,
    birthDate: "1993-05-03",
  },
  {
    name: "John Miller",
    number: 67,
    weight: 315,
    height: 75,
    birthDate: "1993-08-12",
  },
  {
    name: "Joe Mixon",
    number: 28,
    weight: 220,
    height: 73,
    birthDate: "1996-07-24",
  },
  {
    name: "Samaje Perine",
    number: 34,
    weight: 240,
    height: 71,
    birthDate: "1995-09-16",
  },
  {
    name: "Darius Phillips",
    number: 24,
    weight: 190,
    height: 70,
    birthDate: "1995-06-26",
  },
  {
    name: "Germaine Pratt",
    number: 57,
    weight: 245,
    height: 74,
    birthDate: "1996-05-21",
  },
  {
    name: "Billy Price",
    number: 53,
    weight: 310,
    height: 76,
    birthDate: "1994-10-11",
  },
  {
    name: "LaRoy Reynolds",
    number: 50,
    weight: 240,
    height: 73,
    birthDate: "1990-11-03",
  },
  {
    name: "John Ross",
    number: 11,
    weight: 194,
    height: 71,
    birthDate: "1994-11-27",
  },
  {
    name: "Drew Sample",
    number: 89,
    weight: 258,
    height: 76,
    birthDate: "1996-04-16",
  },
  {
    name: "Andre Smith",
    number: 71,
    weight: 330,
    height: 76,
    birthDate: "1987-01-25",
  },
  {
    name: "Keaton Sutherland",
    number: 74,
    weight: 315,
    height: 77,
    birthDate: "1997-02-12",
  },
  {
    name: "Auden Tate",
    number: 19,
    weight: 228,
    height: 77,
    birthDate: "1997-02-03",
  },
  {
    name: "Josh Tupou",
    number: 91,
    weight: 345,
    height: 75,
    birthDate: "1994-05-02",
  },
  {
    name: "C.J. Uzomah",
    number: 87,
    weight: 260,
    height: 78,
    birthDate: "1993-01-14",
  },
  {
    name: "Player ",
    number: null,
    weight: null,
    height: null,
    birthDate: "undefined-0NaN-0NaN",
  },
  {
    name: "Nick Vigil",
    number: 59,
    weight: 235,
    height: 74,
    birthDate: "1993-08-20",
  },
  {
    name: "B.W. Webb",
    number: 23,
    weight: 188,
    height: 71,
    birthDate: "1990-05-03",
  },
  {
    name: "Shawn Williams",
    number: 36,
    weight: 212,
    height: 72,
    birthDate: "1991-05-13",
  },
  {
    name: "Trayveon Williams",
    number: 32,
    weight: 206,
    height: 68,
    birthDate: "1997-10-18",
  },
  {
    name: "Damion Willis",
    number: 15,
    weight: 204,
    height: 75,
    birthDate: "1997-06-20",
  },
  {
    name: "Brandon Wilson",
    number: 40,
    weight: 200,
    height: 70,
    birthDate: "1994-07-27",
  },
  {
    name: "Renell Wren",
    number: 95,
    weight: 315,
    height: 77,
    birthDate: "1995-10-23",
  },
  {
    name: "Kerry Wynn",
    number: 72,
    weight: 261,
    height: 77,
    birthDate: "1991-02-12",
  },
]
