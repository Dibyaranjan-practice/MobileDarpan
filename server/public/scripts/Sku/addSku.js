const fields = document.getElementById("sku");
const product = document.getElementById("product");
const sku = document.getElementById("sku");

let products = "<option>---select---</option>";
let categoryFields = {};
fetch("http://localhost:5000/product/all")
  .then((res) => res.json())
  .then((res) => {
    products += res.map((element) => {
      categoryFields[element.title] = element.category.fields;
      return `<option value="${element.title}">${element.title}</option>`;
    });
    console.log(categoryFields);
    product.innerHTML = products;
  });
let fieldContent = "";
product.addEventListener("change", (event) => {
  console.log("changed");
  fieldContent = "";
  newProduct = event.target.value;
  if (categoryFields.hasOwnProperty(newProduct)) {
    let temp = categoryFields[newProduct];
    console.log(temp);
    for (let [key, value] of Object.entries(temp)) {
      console.log(key, value);
      fieldContent += `<label for="${key}">${key}</label><input type="${value}" name="${key}" />`;
    }
  }
  console.log(fieldContent);
  sku.innerHTML = fieldContent;
});
