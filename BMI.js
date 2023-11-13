window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable. 
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height)) 
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight)) 
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height) 
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML=
        `<img src="https://nanohealth-images.s3-ap-southeast-1.amazonaws.com/image_details/blog_dashboards/87/dummy2/1637648725.png" style="width:50px; height:100px;"> UNDERWEIGHT😒: <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9) 
			result.innerHTML = 
            `<img src="https://c8.alamy.com/comp/PBAJ4T/sportive-cartoon-character-boy-with-normal-weight-isolated-vector-illustration-on-white-background-PBAJ4T.jpg" style="width:50px; height:100px;"> NORMAL😍: <span>${bmi}</span>`;

		else result.innerHTML =`<img src="https://img.freepik.com/free-vector/overweight-woman-holding-fast-food-cartoon-character_1308-133620.jpg" style="width:50px; height:100px;"> OVERWEIGHT😮: <span>${bmi}</span>`;
			 
	}
}