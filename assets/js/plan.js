const choices = $("#arcade, #advanced, #pro");
const arcade = $("#arcade");
const advanced = $("#advanced");
const pro = $("#pro");
const subType = document.querySelector("#sub-type");

arcade.on("click", () => {
  choices.css({
    "border-color": "#94a3b8",
    "border-width": "1px",
    "background-color": "white",
  });
  arcade.css({
    "border-color": "hsl(243, 100%, 62%)",
    "border-width": "2px",
    "background-color": "hsl(206, 94%, 87%,0.3)",
  });
});
advanced.on("click", () => {
  choices.css({
    "border-color": "#94a3b8",
    "border-width": "1px",
    "background-color": "white",
  });
  advanced.css({
    "border-color": "hsl(243, 100%, 62%)",
    "border-width": "2px",
    "background-color": "hsl(206, 94%, 87%,0.3)",
  });
});
pro.on("click", () => {
  choices.css({
    "border-color": "#94a3b8",
    "border-width": "1px",
    "background-color": "white",
  });
  pro.css({
    "border-color": "hsl(243, 100%, 62%)",
    "border-width": "2px",
    "background-color": "hsl(206, 94%, 87%,0.3)",
  });
});
subType.addEventListener("click", () => {
  console.log(subType.checked);
  $("#yearly").toggleClass("text-lg font-semibold text-marine_blue");
  $("#monthly").toggleClass("text-lg font-semibold text-marine_blue");
  $(".year-price, .month-price").toggleClass("hidden");
});
