let service = $("#service");
let storage = $("#storage");
let customize = $("#customize");

service.on("click", () => {
  console.log(service.is(":checked"));
});
storage.on("click", () => {
  console.log(storage.is(":checked"));
});
customize.on("click", () => {
  console.log(customize.is(":checked"));
});
