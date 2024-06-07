new MultiSelectTag('Pizza')
            new MultiSelectTag('Burger')
            new MultiSelectTag('Drinks')
            new MultiSelectTag('Ice Cream')
            new MultiSelectTag('Oriental food')
            new MultiSelectTag('Western food')
            function saveFormData() {
                const formData = {
                    firstName: document.getElementById('fn').value,
                    lastName: document.getElementById('ln').value,
                    phoneNumber: document.getElementById('num').value,
                    address: document.getElementById('ad').value,
                    pizza: document.getElementById('Pizza').value,
                    burger: document.getElementById('Burger').value,
                    orientalFood: document.getElementById('Oriental food').value,
                    westernFood: document.getElementById('Western food').value,
                    drinks: document.getElementById('Drinks').value,
                    iceCream: document.getElementById('Ice Cream').value
                };
                const formDataJSON = JSON.stringify(formData);
                localStorage.setItem('orderFormData', formDataJSON);
            }
            document.querySelector('form').addEventListener('submit', function(event) {
                event.preventDefault(); 
                saveFormData(); 
            });
            var orderForm = document.querySelector('form');
            var orderButton = document.querySelector('#button');
            orderButton.addEventListener('click', function(event) {
                event.preventDefault();
                var firstName = document.querySelector('#fn').value.trim();
                var lastName = document.querySelector('#ln').value.trim();
                var phoneNumber = document.querySelector('#num').value.trim();
                var address = document.querySelector('#ad').value.trim();
                if (!firstName || !lastName || !phoneNumber || !address) {
                    alert('You need to provide your information in the required fields: first name, last name, phone number, and address.');
                } else {
                    saveFormData(); 
                    orderForm.submit();
                    alert('Your request has been executed');
                }
             });