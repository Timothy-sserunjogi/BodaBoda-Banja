//Defining a function salesSubmit with an argument event
let salesSubmit=()=>{
//Accessing and storing DOM elements
let christianName = document.getElementById('fname');
let surName = document.getElementById('lname');
//Checking whether validation rules are true or false
if(name1(christianName)){
if(name2(surName)){

}
}
return false;
};

function name1(alphabet){
    var letters = /^[A-Za-z]+$/;
    if(alphabet.value.match(letters)){
        return true;
    }
    else{
        alert("Please check the first name field and make sure you didn't leave it blank or used numbers before submition!");
        return false;
      }
}

function name2(alphabets){
    var letter = /^[A-Za-z]+$/;
    if(alphabets.value.match(letter)){
        alert('you have submited the form successfully');
        window.location.reload()
        return true;
        
    }
    else{
        alert("Please check the last name field and make sure you didnt leave it blank or used numbers before submition!");
        return false;
    }
}
