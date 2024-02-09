const fields = document.getElementById("sku");
const product = document.getElementById("product");
const sku = document.getElementById("sku");

let products = "<option>---select---</option>";
let allFields = {};
fetch("http://localhost:5000/product/all")
  .then((res) => res.json())
  .then((res) => {
    products += res.map((element) => {
      allFields[element.title] = element.fields;
      return `<option value="${element.title}">${element.title}</option>`;
    });
    product.innerHTML = products;
  });
let fieldContent = "";
product.addEventListener("change", (event) => {
  fieldContent = "";
  newProduct = event.target.value;
  if (allFields.hasOwnProperty(newProduct)) {
    let temp = allFields[newProduct];
    for (let [key, value] of Object.entries(temp)) {
      fieldContent += `<label for="${key}">${key}</label><input type="${value}" name="${key}" />`;
    }
  }
  sku.innerHTML = fieldContent;
});
