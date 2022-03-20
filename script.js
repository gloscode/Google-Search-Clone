var searchIcon = document.querySelector("#searchIcon");
var input = document.getElementById("input");
var search = document.querySelector(".search");
var google = document.querySelector("#google");

searchIcon.addEventListener("click", () => {
  if (
    input.value.includes("www.") ||
    input.value.includes(".com") ||
    input.value.includes(".in")
  ) {
    open(`http://${input.value}`);
  } else if (input.value.includes("https:")) {
    open(`${input.value}`);
  } else {
    if (input.value != "") {
      var url = `https://www.google.com/search?q=${input.value}`;
      open(url, "_self");
    } else {
    }
  }
});
