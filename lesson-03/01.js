

​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  let flag = colors.filter(el => el === "черный" || el === "красный" || el === "желтый");
    return flag.join('-')
}

console.log(createColorString(colors));