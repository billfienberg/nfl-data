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
