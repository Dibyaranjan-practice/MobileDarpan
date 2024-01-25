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
