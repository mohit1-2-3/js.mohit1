//type of memory

// stack(primitive,its provide copy), heap(non primitive,its provide refrence)
 let myname= "mohit"

 let anotherName=myname

 anotherName="varma"
 console.log(myname);
 console.log(anotherName);

 let user1={

    email: "mohitvarma",
    upi: "user@ybi"
 }

 let user2= user1
 user2.email="javascript"

 console.log(user1.email);
 console.log(user2.email);
 
 