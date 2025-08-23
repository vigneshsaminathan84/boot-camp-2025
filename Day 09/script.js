document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  

  document.getElementById("result").innerHTML = `
    <h3>Submitted Information:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Address:</strong> ${address}</p>
   
  `;
});