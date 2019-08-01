let oddSum=0
let evenSum=0

let evenProd=1
let oddProd=1

for(let n=1; n<=100; n++){
	
	if(n%2 == 0){
		evenSum = evenSum + n
		evenProd = evenProd * n
	}
	else {
		oddSum = oddSum + n
		oddProd = oddProd * n
	}
			
}
console.log("Sum of even no.:"+evenSum)
console.log("Sum of odd no.:"+oddSum)
console.log("Sum of odd and even:"+(evenSum+oddSum))
console.log("Sum of all EvenProduct no.:"+ evenProd)
console.log("Sum of all OddProduct no.:"+ oddProd)

/*
let oddSum=0
let evenSum=0

for(let n=1; n<=1000; n++){
	
	if(n%2 == 0){
		evenSum = evenSum + n
	}
	else {
		oddSum = oddSum + n
	}
			
}
console.log("Sum of even no.:"+evenSum)
console.log("Sum of odd no.:"+oddSum)
console.log("Sum of all no.:"+ (evenSum+oddSum))*/
