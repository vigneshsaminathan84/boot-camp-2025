/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571
	
*/
console.log("calculates the Volume and Surface Area of a sphere ");

let radius=prompt("Enter the radius");
let pi=Math.PI;
let area=(4/3)*pi*Math.pow(radius,2);
let volume=4*pi*Math.pow(radius,3)
console.log("Area of Sphere  :",area);
console.log("Volume of Sphere:",volume);


