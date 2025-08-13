/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */
console.log("Studenet results");

let m1=Number(prompt("enter the first mark:"));
let m2=Number(prompt("enter the second mark:"));
let m3=Number(prompt("enter the third mark:"));

let total=m1+m2+m3;
 console.log("Total Marks :",total);

 let average=total/3;
 console.log("Average Marks :",average);
 
 