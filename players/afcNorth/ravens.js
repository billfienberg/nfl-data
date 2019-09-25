// https://www.pro-football-reference.com/teams/rav/2019_roster.htm
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
    name: "Otaro Alaka",
    number: 50,
    weight: 239,
    height: 75,
    birthDate: "1996-05-18",
  },
  {
    name: "Mark Andrews",
    number: 89,
    weight: 256,
    height: 77,
    birthDate: "1996-09-06",
  },
  {
    name: "Anthony Averett",
    number: 34,
    weight: 178,
    height: 71,
    birthDate: "1994-11-30",
  },
  {
    name: "Justin Bethel",
    number: 28,
    weight: 200,
    height: 72,
    birthDate: "1990-06-17",
  },
  {
    name: "Chris Board",
    number: 49,
    weight: 229,
    height: 74,
    birthDate: "1995-07-23",
  },
  {
    name: "Tyus Bowser",
    number: 54,
    weight: 242,
    height: 75,
    birthDate: "1995-05-23",
  },
  {
    name: "Miles Boykin",
    number: 80,
    weight: 220,
    height: 76,
    birthDate: "1996-10-12",
  },
  {
    name: "Nick Boyle",
    number: 86,
    weight: 270,
    height: 76,
    birthDate: "1993-02-17",
  },
  {
    name: "Bradley Bozeman",
    number: 77,
    weight: 317,
    height: 77,
    birthDate: "1994-11-24",
  },
  {
    name: "Marquise Brown",
    number: 15,
    weight: 170,
    height: 69,
    birthDate: "1997-06-04",
  },
  {
    name: "Orlando Brown",
    number: 78,
    weight: 345,
    height: 80,
    birthDate: "1996-05-02",
  },
  {
    name: "Maurice Canady",
    number: 26,
    weight: 193,
    height: 73,
    birthDate: "1994-05-26",
  },
  {
    name: "Brandon Carr",
    number: 24,
    weight: 210,
    height: 72,
    birthDate: "1986-05-19",
  },
  {
    name: "Chuck Clark",
    number: 36,
    weight: 205,
    height: 72,
    birthDate: "1995-04-19",
  },
  {
    name: "Morgan Cox",
    number: 46,
    weight: 235,
    height: 76,
    birthDate: "1986-04-26",
  },
  {
    name: "Gus Edwards",
    number: 35,
    weight: 238,
    height: 73,
    birthDate: "1995-04-13",
  },
  {
    name: "DeShon Elliott",
    number: 32,
    weight: 210,
    height: 73,
    birthDate: "1997-04-21",
  },
  {
    name: "Jaylon Ferguson",
    number: 45,
    weight: 275,
    height: 77,
    birthDate: "1995-12-14",
  },
  {
    name: "Robert Griffin",
    number: 3,
    weight: 213,
    height: 74,
    birthDate: "1990-02-12",
  },
  {
    name: "Justice Hill",
    number: 43,
    weight: 200,
    height: 70,
    birthDate: "1997-11-14",
  },
  {
    name: "Marlon Humphrey",
    number: 44,
    weight: 197,
    height: 72,
    birthDate: "1996-07-08",
  },
  {
    name: "Hayden Hurst",
    number: 81,
    weight: 245,
    height: 76,
    birthDate: "1993-08-24",
  },
  {
    name: "James Hurst",
    number: 74,
    weight: 310,
    height: 77,
    birthDate: "1991-12-17",
  },
  {
    name: "Mark Ingram",
    number: 21,
    weight: 215,
    height: 69,
    birthDate: "1989-12-21",
  },
  {
    name: "Lamar Jackson",
    number: 8,
    weight: 212,
    height: 74,
    birthDate: "1997-01-07",
  },
  {
    name: "Tony Jefferson",
    number: 23,
    weight: 211,
    height: 71,
    birthDate: "1992-01-27",
  },
  {
    name: "Cyrus Jones",
    number: 27,
    weight: 195,
    height: 70,
    birthDate: "1993-11-29",
  },
  {
    name: "Matt Judon",
    number: 99,
    weight: 261,
    height: 75,
    birthDate: "1992-08-15",
  },
  {
    name: "Sam Koch",
    number: 4,
    weight: 222,
    height: 73,
    birthDate: "1982-08-13",
  },
  {
    name: "Anthony Levine",
    number: 41,
    weight: 207,
    height: 71,
    birthDate: "1987-03-27",
  },
  {
    name: "Player ",
    number: null,
    weight: null,
    height: null,
    birthDate: "undefined-0NaN-0NaN",
  },
  {
    name: "Daylon Mack",
    number: 94,
    weight: 340,
    height: 73,
    birthDate: "1997-02-23",
  },
  {
    name: "Pernell McPhee",
    number: 90,
    weight: 265,
    height: 75,
    birthDate: "1988-12-17",
  },
  {
    name: "Trace McSorley",
    number: 7,
    weight: 202,
    height: 72,
    birthDate: "1995-08-23",
  },
  {
    name: "Patrick Mekari",
    number: 65,
    weight: 308,
    height: 76,
    birthDate: "1997-08-13",
  },
  {
    name: "Chris Moore",
    number: 10,
    weight: 200,
    height: 73,
    birthDate: "1993-06-16",
  },
  {
    name: "Patrick Onwuasor",
    number: 48,
    weight: 227,
    height: 72,
    birthDate: "1992-08-22",
  },
  {
    name: "Michael Pierce",
    number: 97,
    weight: 340,
    height: 72,
    birthDate: "1992-11-06",
  },
  {
    name: "Ben Powers",
    number: 72,
    weight: 310,
    height: 76,
    birthDate: "1996-10-29",
  },
  {
    name: "Patrick Ricard",
    number: 42,
    weight: 311,
    height: 75,
    birthDate: "1994-05-27",
  },
  {
    name: "Seth Roberts",
    number: 11,
    weight: 195,
    height: 74,
    birthDate: "1991-02-22",
  },
  {
    name: "Jaleel Scott",
    number: 12,
    weight: 210,
    height: 77,
    birthDate: "1995-02-23",
  },
  {
    name: "Matt Skura",
    number: 68,
    weight: 313,
    height: 75,
    birthDate: "1993-02-17",
  },
  {
    name: "Jimmy Smith",
    number: 22,
    weight: 210,
    height: 74,
    birthDate: "1988-07-26",
  },
  {
    name: "Willie Snead",
    number: 83,
    weight: 205,
    height: 71,
    birthDate: "1992-10-17",
  },
  {
    name: "Ronnie Stanley",
    number: 79,
    weight: 315,
    height: 78,
    birthDate: "1994-03-18",
  },
  {
    name: "Earl Thomas",
    number: 29,
    weight: 202,
    height: 70,
    birthDate: "1989-05-07",
  },
  {
    name: "Brynden Trawick",
    number: 31,
    weight: 225,
    height: 74,
    birthDate: "1989-10-23",
  },
  {
    name: "Justin Tucker",
    number: 9,
    weight: 183,
    height: 73,
    birthDate: "1989-11-21",
  },
  {
    name: "Brandon Williams",
    number: 98,
    weight: 336,
    height: 73,
    birthDate: "1989-02-21",
  },
  {
    name: "Tim Williams",
    number: 56,
    weight: 252,
    height: 75,
    birthDate: "1993-11-12",
  },
  {
    name: "Chris Wormley",
    number: 93,
    weight: 300,
    height: 77,
    birthDate: "1993-10-25",
  },
  {
    name: "Marshal Yanda",
    number: 73,
    weight: 305,
    height: 75,
    birthDate: "1984-09-15",
  },
  {
    name: "Kenny Young",
    number: 40,
    weight: 234,
    height: 73,
    birthDate: "1994-11-15",
  },
]
