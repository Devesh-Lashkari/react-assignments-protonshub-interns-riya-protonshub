function addData() {

  var table = document.getElementById("response-table");

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var emailAddress = document.getElementById("mail").value;
  var mobileNumber = document.getElementById("mobile").value;
  var homeAddress = document.getElementById("haddress").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var newRow = table.insertRow();

  var newCell0 = newRow.insertCell();
  newCell0.innerHTML = firstName;
  document.getElementById("fname").value = "";

  var newCell1 = newRow.insertCell();
  newCell1.innerHTML = lastName;
  document.getElementById("lname").value = "";

  var newCell2 = newRow.insertCell();
  newCell2.innerHTML = emailAddress;
  document.getElementById("mail").value = "";

  var newCell3 = newRow.insertCell();
  newCell3.innerHTML = mobileNumber;
  document.getElementById("mobile").value = "";

  var newCell4 = newRow.insertCell();
  newCell4.innerHTML = homeAddress;
  document.getElementById("haddress").value = "";

  var newCell5 = newRow.insertCell();
  newCell5.innerHTML = city;
  document.getElementById("city").value = "";

  var newCell6 = newRow.insertCell();
  newCell6.innerHTML = pincode;
  document.getElementById("pincode").value = "";

  var newCell7 = newRow.insertCell();
  newCell7.innerHTML = state;
  document.getElementById("state").value = "";

  var newCell8 = newRow.insertCell();
  newCell8.innerHTML = country;
  document.getElementById("country").value = "";
}
