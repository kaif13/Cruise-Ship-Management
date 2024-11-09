document.addEventListener("DOMContentLoaded", function () {
    // Function to open the booking modal
    window.openBookingModal = function () {
      document.getElementById("bookingModal").style.display = "block";
    };
  
    // Function to close the booking modal
    window.closeBookingModal = function () {
      document.getElementById("bookingModal").style.display = "none";
    };
  
    // Function to add more passenger fields
    window.addPassenger = function () {
      const passengerSection = document.getElementById("passengerSection");
      const passengerCount = passengerSection.children.length;
  
      const newPassengerDiv = document.createElement("div");
      newPassengerDiv.className = "passenger";
      newPassengerDiv.id = `passenger${passengerCount + 1}`;
  
      newPassengerDiv.innerHTML = `
        <h4>Passenger ${passengerCount + 1}</h4>
        <div class="passenger-inputs">
          <div class="passenger-details">
            <label for="firstName${passengerCount + 1}">First Name:</label>
            <input type="text" id="firstName${passengerCount + 1}" name="firstName[]" required>
  
            <label for="lastName${passengerCount + 1}">Last Name:</label>
            <input type="text" id="lastName${passengerCount + 1}" name="lastName[]" required>
  
            <label for="age${passengerCount + 1}">Age:</label>
            <input type="number" id="age${passengerCount + 1}" name="age[]" min="0" required>
          </div>
          <button type="button" onclick="deletePassenger('passenger${passengerCount + 1}')">Delete</button>
        </div>
      `;
  
      passengerSection.appendChild(newPassengerDiv);
    };
  
    // Function to delete a passenger
    window.deletePassenger = function (passengerId) {
      const passengerDiv = document.getElementById(passengerId);
      if (passengerDiv) {
        passengerDiv.remove(); // Remove the passenger div from the DOM
      }
    };
  
    // Function to close the ticket summary
    window.closeTicketSummary = function () {
      document.getElementById("ticketSummary").style.display = "none";
    };
  
    // Function to handle form submission and show ticket summary
    document.getElementById("bookingForm").onsubmit = function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const passengers = [];
      const firstNames = document.getElementsByName("firstName[]");
      const lastNames = document.getElementsByName("lastName[]");
      const ages = document.getElementsByName("age[]");
  
      for (let i = 0; i < firstNames.length; i++) {
        passengers.push({
          firstName: firstNames[i].value,
          lastName: lastNames[i].value,
          age: ages[i].value
        });
      }
  
      const commonPhone = document.getElementById("commonPhone").value;
      const commonEmail = document.getElementById("commonEmail").value;
      const commonAddress = document.getElementById("commonAddress").value;
  
      // Prepare summary details
      let summaryHtml = `<h3>Passengers:</h3><ul>`;
      passengers.forEach((passenger, index) => {
        summaryHtml += `<li>Passenger ${index + 1}: ${passenger.firstName} ${passenger.lastName}, Age: ${passenger.age}</li>`;
      });
      summaryHtml += `</ul>`;
      summaryHtml += `<h3>Contact Details:</h3>
                      <p>Phone Number: ${commonPhone}</p>
                      <p>Email: ${commonEmail}</p>
                      <p>Address: ${commonAddress}</p>`;
  
      document.getElementById("summaryDetails").innerHTML = summaryHtml;
      document.getElementById("ticketSummary").style.display = "block"; // Show the ticket summary
      document.getElementById("bookingModal").style.display = "none"; // Hide the booking modal
    };
  
    // Close the modal when clicking outside of it
    window.onclick = function (event) {
      const modal = document.getElementById("bookingModal");
      const summaryModal = document.getElementById("ticketSummary");
      if (event.target === modal) {
        modal.style.display = "none";
      }
      if (event.target === summaryModal) {
        summaryModal.style.display = "none";
      }
    };
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    let passengerCount = 1;
  
    // Function to add more passengers
    window.addPassenger = function () {
      passengerCount++;
      const passengerSection = document.getElementById("passengerSection");
  
      const newPassengerDiv = document.createElement("div");
      newPassengerDiv.className = "passenger";
      newPassengerDiv.id = `passenger${passengerCount}`;
  
      newPassengerDiv.innerHTML = `
        <label>Passenger Name:</label>
        <input type="text" name="firstName[]" placeholder="First Name" required>
        <input type="text" name="lastName[]" placeholder="Last Name" required>
  
        <label>Age:</label>
        <input type="number" name="age[]" placeholder="Age" required>
  
        <label>Gender:</label>
        <select name="gender[]" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
  
       
  
        <button type="button" class="remove-button" onclick="removePassenger(this)">Remove</button>
      `;
  
      passengerSection.appendChild(newPassengerDiv);
    };
  
    // Function to remove a passenger
    window.removePassenger = function (button) {
      const passengerDiv = button.parentElement;
      passengerDiv.remove();
    };
  });
  