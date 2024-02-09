const addField = document.getElementById("add_fields");
let count = 1;

const addfields = () => {
  const typeOptions = `
<input type="text" name="field${count}" class="w-1/2" />
<select name="type${count}" class="w-1/3">
    <option value="text">Text</option>
    <option value="number">Number</option>
    <option value="image">Image</option>
</select>`;
  const newChild = document.createElement("div");
  newChild.classList.add("field");
  newChild.classList.add("flex");
  newChild.classList.add("justify-between");
  newChild.classList.add("mb-3");
  newChild.innerHTML = typeOptions;
  addField.appendChild(newChild);
  count += 1;
};
const brands = document.getElementById("brand");

let brandContent = "";
fetch("http://localhost:5000/brand/all")
  .then((res) => res.json())
  .then((res) => {
    brandContent += res.map((element) => {
      return `<option value="${element.name}">${element.name}</option>`;
    });
    brands.innerHTML = brandContent;
  });

const category = document.getElementById("category");
const extraCategories = document.getElementById("extraCategories");
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
    extraCategories.innerHTML = categoryContent;
  });
