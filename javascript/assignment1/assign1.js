//   Question 1
function iscity() {
return 'is City';
}

function isname(cname, func)
 {
    const message = func();
    console.log(cname+" "+message);
 }

isname('Hyd', iscity);
isname('Banglore', iscity);
isname('Mumbai', iscity);

//  Question 2

const getInitials = (firstName,lastName) => { 
    return firstName.charAt(0) + lastName.charAt(0); 
}
console.log(getInitials("Roger", "Waters"));
