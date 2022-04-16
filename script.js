//initail references
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//convert decimal to binary when user inputs in the decimal input field
decInp.addEventListener("input", () => {
    let decvalue = parseInt(decInp.value);
    //convert the dec to binary
    binInp.value = decvalue.toString(2);
});

//convert binary to decimal when user inputs in the binary input field
binInp.addEventListener("input", () => {
    let binvalue = binInp.value;
    //if bin is valid convert it ti decimal
    if(binValidator(binvalue)){
        decInp.value = parseInt(binvalue, 2);
        errorMsg.textContent = "";
    }
    //if bin is not valid show error message
    else{
        errorMsg.textContent = "Invalid Binary Number";
    }
    //if binary is empty remove error message
    if(binvalue === ""){
        errorMsg.textContent = "";
    }
    


    function binValidator(binvalue){
        //check if the input is a binary number
        if(/^[0-1]+$/.test(binvalue)){
            return true;
        }
        else{
            return false;
        }
    }

});