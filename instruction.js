console.log("loaded instruction...");

document.querySelector("#isa").addEventListener("click", isaF);

function isaF() {
  console.log("isaF er in da house");
  document.querySelector("spot_1").classList.add("spot_1");
  document.querySelector("spot_2").computedStyleMap.fill = "green";
  document.querySelector("info.text h2").textContent = "sygdommen sars";
}
