// https://www.pro-football-reference.com/teams/pit/2019_roster.htm
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
//   const result = { name, number, weight, height, birthDate }
//   return result
// })
// copy(players)

export default [
  { birthDate: "9/12/1997", name: "Olasunkanmi Adeniyi", number: 92, weight: 248, height: 73 },
  { birthDate: "5/12/1987", name: "Tyson Alualu", number: 94, weight: 304, height: 75 },
  { birthDate: "12/25/1993", name: "Zach Banner", number: 72, weight: 360, height: 80 },
  { birthDate: "10/27/1989", name: "Mark Barron", number: 26, weight: 230, height: 74 },
  { birthDate: "3/18/1991", name: "Jordan Berry", number: 4, weight: 195, height: 77 },
  { birthDate: "3/16/1991", name: "Chris Boswell", number: 9, weight: 185, height: 74 },
  { birthDate: "8/24/1996", name: "Isaiah Buggs", number: 96, weight: 295, height: 75 },
  { birthDate: "5/1/1995", name: "Artie Burns", number: 25, weight: 197, height: 72 },
  { birthDate: "7/18/1998", name: "Devin Bush", number: 55, weight: 234, height: 71 },
  { birthDate: "8/20/1992", name: "Kameron Canaday", number: 57, weight: 245, height: 76 },
  { birthDate: "12/10/1992", name: "Anthony Chickillo", number: 56, weight: 255, height: 75 },
  { birthDate: "5/5/1995", name: "James Conner", number: 30, weight: 233, height: 73 },
  { birthDate: "12/25/1990", name: "Jordan Dangerfield", number: 37, weight: 199, height: 71 },
  { birthDate: "1/11/1990", name: "David DeCastro", number: 66, weight: 316, height: 77 },
  { birthDate: "2/12/1993", name: "Bud Dupree", number: 48, weight: 269, height: 76 },
  { birthDate: "1/20/1997", name: "Terrell Edmunds", number: 34, weight: 217, height: 73 },
  { birthDate: "11/11/1991", name: "Jayrone Elliott", number: 40, weight: 240, height: 75 },
  { birthDate: "7/7/1992", name: "Matt Feiler", number: 71, weight: 330, height: 78 },
  { birthDate: "10/26/1991", name: "B.J. Finney", number: 67, weight: 318, height: 76 },
  { birthDate: "11/4/1996", name: "Minkah Fitzpatrick", number: 29, weight: 207, height: 73 },
  { birthDate: "1/7/1986", name: "Ramon Foster", number: 73, weight: 328, height: 77 },
  { birthDate: "9/10/1996", name: "Zach Gentry", number: 81, weight: 265, height: 80 },
  { birthDate: "8/9/1997", name: "Ulysees Gilbert", number: 54, weight: 230, height: 72 },
  { birthDate: "9/22/1992", name: "Xavier Grimble", number: 85, weight: 261, height: 76 },
  { birthDate: "4/14/1989", name: "Joe Haden", number: 23, weight: 195, height: 71 },
  { birthDate: "2/7/1993", name: "Javon Hargrave", number: 79, weight: 305, height: 74 },
  { birthDate: "5/6/1989", name: "Cameron Heyward", number: 97, weight: 295, height: 77 },
  { birthDate: "3/9/1994", name: "Mike Hilton", number: 28, weight: 184, height: 69 },
  { birthDate: "4/12/1996", name: "Devlin Hodges", number: 6, weight: 210, height: 73 },
  { birthDate: "8/22/1991", name: "Johnny Holton", number: 80, weight: 190, height: 75 },
  { height: null, birthDate: "BirthDate", name: "Player ", number: null, weight: null },
  { birthDate: "7/5/1996", name: "Diontae Johnson", number: 18, weight: 183, height: 70 },
  { 326, height: 79, birthDate: "", name: "Fred Johnson", number: 74, weight },
  { birthDate: "8/19/1996", name: "Kameron Kelly", number: 29, weight: 205, height: 74 },
  { birthDate: "1/12/1998", name: "Justin Layne", number: 31, weight: 192, height: 74 },
  { birthDate: "12/22/1992", name: "Tyler Matakevich", number: 44, weight: 235, height: 73 },
  { birthDate: "8/11/1992", name: "Daniel McCullers", number: 93, weight: 352, height: 79 },
  { birthDate: "6/13/1990", name: "Vance McDonald", number: 89, weight: 267, height: 76 },
  { birthDate: "8/6/1993", name: "Donte Moncrief", number: 11, weight: 216, height: 74 },
  { birthDate: "1/22/1993", name: "Steven Nelson", number: 22, weight: 194, height: 71 },
  { birthDate: "3/30/1992", name: "Roosevelt Nix", number: 45, weight: 248, height: 71 },
  { birthDate: "8/8/1997", name: "Chukwuma Okorafor", number: 76, weight: 320, height: 78 },
  { birthDate: "7/24/1989", name: "Maurkice Pouncey", number: 53, weight: 304, height: 76 },
  { birthDate: "7/17/1995", name: "Mason Rudolph", number: 2, weight: 235, height: 77 },
  { birthDate: "7/20/1996", name: "Jaylen Samuels", number: 38, weight: 225, height: 72 },
  { birthDate: "11/22/1996", name: "JuJu Smith-Schuster", number: 19, weight: 215, height: 73 },
  { birthDate: "2/27/1998", name: "Benny Snell", number: 24, weight: 224, height: 70 },
  { birthDate: "2/27/1995", name: "Cameron Sutton", number: 20, weight: 188, height: 71 },
  { birthDate: "11/4/1994", name: "Ryan Switzer", number: 10, weight: 185, height: 68 },
  { birthDate: "5/23/1993", name: "Stephon Tuitt", number: 91, weight: 303, height: 78 },
  { birthDate: "9/22/1988", name: "Alejandro Villanueva", number: 78, weight: 320, height: 81 },
  { birthDate: "4/2/1996", name: "James Washington", number: 13, weight: 213, height: 71 },
  { birthDate: "10/11/1994", name: "T.J. Watt", number: 90, weight: 252, height: 76 },
  { birthDate: "12/27/1989", name: "Vince Williams", number: 98, weight: 233, height: 73 },
]
