// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//weddy
const binSelectionForm = document.getElementById("bin-selection-form");
const addBinButton = document.getElementById("add-bin");

let nextBinId = 2; // Keeps track of the ID for the next bin

// Function to create a new bin element
function createNewBin() {
  const newBinContainer = document.createElement("div");
  newBinContainer.classList.add("row", "mb-4", "bin-item");
  newBinContainer.dataset.binId = nextBinId;

  // Bin size selection
  const sizeSelect = document.createElement("select");
  sizeSelect.classList.add("form-control", "bin-size");
  sizeSelect.id = `bin-size-${nextBinId}`;
  newBinContainer.appendChild(createBinSizeOption("small", 5, "$5"));
  newBinContainer.appendChild(createBinSizeOption("medium", 10, "$10"));
  newBinContainer.appendChild(createBinSizeOption("large", 15, "$15"));

  const sizeGroup = document.createElement("div");
  sizeGroup.classList.add("col-md-4");
  sizeGroup.appendChild(createFormGroup("Bin Size:", sizeSelect));
  newBinContainer.appendChild(sizeGroup);

  // Bin type selection checkboxes
  const typeGroup = document.createElement("div");
  typeGroup.classList.add("col-md-4");
  typeGroup.appendChild(createBinTypeCheckbox("organic", nextBinId));
  typeGroup.appendChild(createBinTypeCheckbox("plastic", nextBinId));
  typeGroup.appendChild(createBinTypeCheckbox("glass", nextBinId));
  typeGroup.appendChild(createBinTypeCheckbox("paper", nextBinId));
  newBinContainer.appendChild(typeGroup);

  // Bin price display
  const priceDisplay = document.createElement("p");
  priceDisplay.classList.add("col-md-4", "bin-price");
  priceDisplay.id = `bin-price-${nextBinId}`;
  priceDisplay.textContent = "$5"; // Default price
  newBinContainer.appendChild(priceDisplay);

  // Pick-up day selection (add this section here)
  const pickUpGroup = document.createElement("div");
  pickUpGroup.classList.add("col-md-4");
  pickUpGroup.appendChild(createPickUpDaySelect(nextBinId));
  newBinContainer.appendChild(pickUpGroup);

  binSelectionForm.querySelector(".bin-container").appendChild(newBinContainer);
  nextBinId++; // Increment ID for the next bin
}

// Function to create a bin size option element
function createBinSizeOption(size, capacity, price) {
  const option = document.createElement("option");
  option.value = size;
  option.textContent = `<span class="math-inline">\{size\} \(</span>{capacity} liters) - ${price}`;
  return option;
}

// Function to create a bin type checkbox element
function createBinTypeCheckbox(type, binId) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input", "bin-type");
  checkbox.id = `<span class="math-inline">\{type\}\-bin\-</span>{binId}`;
  checkbox.value = type;
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.textContent = `<span class="math-inline">\{type\.charAt\(0\)\.toUpperCase\(\)\}</span>{type.slice(1)} Waste`;
  label.htmlFor = checkbox.id;
  const checkboxGroup = document.createElement("div");
  checkboxGroup.classList.add("form-check", "form-check-inline");
  checkboxGroup.appendChild(checkbox);
  checkboxGroup.appendChild(label);
  return checkboxGroup;
}

// Function to create a form group element
function createFormGroup(label, element) {
  const group = document.createElement("div");
  group;
}
