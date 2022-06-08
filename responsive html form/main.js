function addData() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var emailAddress = document.getElementById("mail").value;
  var mobileNumber = document.getElementById("mobile").value;
  var homeAddress = document.getElementById("haddress").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var newRow = document.createElement("tr");
  var newCell = document.createElement("td");

  newCell.innerHTML = firstName;
  newRow.append(newCell);

  newCell.innerHTML = lastName;
  newRow.append(newCell);

  newCell.innerHTML = emailAddress;
  newRow.append(newCell);

  newCell.innerHTML = mobileNumber;
  newRow.append(newCell);

  newCell.innerHTML = homeAddress;
  newRow.append(newCell);

  newCell.innerHTML = city;
  newRow.append(newCell);

  newCell.innerHTML = pincode;
  newRow.append(newCell);

  newCell.innerHTML = state;
  newRow.append(newCell);

  newCell.innerHTML = country;
  newRow.append(newCell);

  document.getElementById("rows").appendChild(newRow);

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("haddress").value = "";
  document.getElementById("city").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
}
