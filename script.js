

function submitForm(){
    let gender = (document.getElementById)("gender").value;
    let date = (document.getElementById)("date").value;

    let birthday = new Date(date);
    let day = birthday.getDay(); 
    tresult.innerText = day;


    let Male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let Female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];

    if(date === ""){
        tresult.innerText = "Please enter your birthday";
    }else if(gender === "Male" && day === 0){
        tresult.innerText = "Your Akan name is" + " " + Male[0] ;
    }else if(gender === "Male" && day === 1){
        tresult.innerText = "Your Akan name is" + " " + Male[1] ;
    }else if(gender === "Male" && day === 2){
        tresult.innerText = "Your Akan name is" + " " + Male[2] ;
    }else if(gender === "Male" && day === 3){
        tresult.innerText = "Your Akan name is" + " " + Male[3] ;
    }else if(gender === "Male" && day === 4){
        tresult.innerText = "Your Akan name is" + " " + Male[4] ;
    }else if(gender === "Male" && day === 5){
        tresult.innerText = "Your Akan name is" + " " + Male[5] ;
    }else if(gender === "Male" && day === 6){
        tresult.innerText = "Your Akan name is" + " " + Male[6] ;
    }
    if(date === ""){
        tresult.innerText = "Please enter your birthday";
    }else if(gender === "female" && day === 0){
        tresult.innerText = "Your Akan name is" + " " + Female[0] ;
    }else if(gender === "female" && day === 1){
        tresult.innerText = "Your Akan name is" + " " + Female[1] ;
    }else if(gender === "female" && day === 2){
        tresult.innerText = "Your Akan name is" + " " + Female[2] ;
    }else if(gender === "female" && day === 3){
        tresult.innerText = "Your Akan name is" + " " + Female[3] ;
    }else if(gender === "female" && day === 4){
        tresult.innerText = "Your Akan name is" + " " + Female[4] ;
    }else if(gender === "female" && day === 5){
        tresult.innerText = "Your Akan name is" + " " + Female[5] ;
    }else if(gender === "feale" && day === 6){
        tresult.innerText = "Your Akan name is" + " " + Female[6] ;
    }

    










}

