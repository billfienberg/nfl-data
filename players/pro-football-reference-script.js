const rows = [...document.querySelector("#games_played_team tbody").querySelectorAll("tr")]
const players = rows.map((x) => {
  const name = x.querySelector("[data-stat='player']").innerText
  const number = parseInt(x.querySelector("[data-stat='uniform_number']").innerHTML, 10)
  const weight = parseInt(x.querySelector("[data-stat='weight']").innerHTML, 10)
  const height = x
    .querySelector("[data-stat='height']")
    .innerHTML.split("-")
    .map((x) => parseInt(x, 10))
    .reduce((acc, cv, ci) => {
      const inches = ci === 0 ? 12 * cv : cv
      return inches + acc
    }, 0)
  const birthDate = x.querySelector("[data-stat='birth_date_mod']").innerHTML
  const splitBirthDate = birthDate.split("/")
  const [monthString, dayString, year] = splitBirthDate
  const monthInt = parseInt(monthString, 10)
  const month = monthInt > 9 ? monthInt : `0${monthInt}`
  const dayInt = parseInt(dayString, 10)
  const day = dayInt > 9 ? dayInt : `0${dayInt}`
  const iso8601BirthDate = `${year}-${month}-${day}`
  const result = { name, number, weight, height, birthDate: iso8601BirthDate }
  return result
})
copy(players)
