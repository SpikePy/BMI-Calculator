// bmi = weight[kg] / size[m]²

function js_weight() {
  weight = document.getElementById("weight")
  size   = document.getElementById("size").value / 100
  bmi    = document.getElementById("bmi").value

  if (size > 0 && bmi > 0){
    weight.value = (bmi * (size**2)).toFixed(1)
  }
}

function js_bmi() {
  weight = document.getElementById("weight").value
  size   = document.getElementById("size").value / 100
  bmi    = document.getElementById("bmi")

  if (size > 0 && weight > 0) {
    bmi.value = (weight / (size**2)).toFixed(1)
  }
}
