let searchIcon = document.querySelector("#searchIcon");
let input = document.getElementById("input");
let search = document.querySelector(".search");
let google = document.querySelector("#google");

searchIcon.addEventListener("click", () => {
  if (input.value.includes(".")) {
    open(`http://${input.value}`);
  } 
  else if (input.value.includes("http:") || input.value.includes("https:")) {
    open(`${input.value}`);
  } 
  else {
    if (input.value != "") {
        var url = `https://www.google.com/search?q=${input.value}`;
        open(url, "_blank");
    }
    else{
    }
  }
});
