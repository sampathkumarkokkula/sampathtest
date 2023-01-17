function getData(uId){
    x= new Promise(function (resolve){
        setTimeout(() => {
            console.log("Fetched the data");
            resolve("skc@gmail.com");
        }, 4000);
    });
    return x;
}

async function greet() {
    console.log("start");
    var email= await getData("skc");
    console.log("Email id of user is"+ email);
    console.log("End");

}

greet();