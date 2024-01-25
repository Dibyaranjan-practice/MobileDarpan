const brands = document.getElementById("brand");
const category = document.getElementById("category");

let brandContent = "";
fetch("http://localhost:5000/brand/all")
  .then((res) => res.json())
  .then((res) => {
    brandContent += res.map((element) => {
      return `<option value="${element.name}">${element.name}</option>`;
    });
    brands.innerHTML = brandContent;
  });

let categoryContent = "";
let categoryFields = {};
fetch("http://localhost:5000/category/all")
  .then((res) => res.json())
  .then((res) => {
    categoryContent += res.map((element) => {
      categoryFields[element.title] = element.fields;
      return `<option value="${element.title}">${element.title}</option>`;
    });
    category.innerHTML = categoryContent;
  });
