// დავალება 1
let  user = {
    firstname:'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
    };
    console.log(user.studentstatus);

// დავალება 2

    let numbers = ['giorgi, levani, nodari', 2, 200,489];

for (let item = 0; item < numbers.length; item++) {
 console.log(numbers[item]);
}

//დავალება 3
let mas=[12,2,34,5,6,2,34,56,9,5,1,2,54];
for(let i = 0; i < mas.length; i++) {
    if(mas[i]>5)
    console.log(mas[i]);
}
// დავალება 4
let user = {
    name: 'giorgi',
    age:  28,
    studentstatus: 'active'
}
if (user.studentstatus=='active') {
    console.log('hello');
}
else if (user.name=='levan') {
    console.log('hello giorgi');
}
else if ((user.studentstatus=='active' )|| (user2.age<25)) {
    console.log('hello world');
}
 else {
     console.log('error');
 }            
 
 // დავალება 5
 let array = [ '‘watermelon’', '‘pear’', 10, 45, 50, '‘apple’', '‘ananas’' ] ;
 //  გამოიტანეთ მარტო სრტინგები;
      for(let x of array){
          if(typeof x=='string'){
              console.log(x);
          }
      }
      // დავალება 6
 let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
 for(let y of array2){
     for(let z of y){
         if(z>0){
             console.log(z);
         }
     }

 }

// დავალება 7
let array3 = [32, 10, '‘hello’', null,'hello2', 50 ]
  for(let i=0; i<array3.length;i++){
      if(array3[i]!='string'&&array3[i]%5==0&&array3[i]!=null){
          console.log(array3[i]);
      }
  }