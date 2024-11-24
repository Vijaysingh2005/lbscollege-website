 

  function sendmsg(){
    (function(){
        emailjs.init("dT9JRv5GmtR53FQri");
    })();
    let serviceid = "service_z4qyzwb";
    let templateid = "template_c8v0p2p";
    let perams ={
        sendtype :document.querySelector("#type").value,
        sendname :document.querySelector("#name").value,
        sendFathername :document.querySelector("#Fathername").value,
        sendMothername :document.querySelector("#Mothername").value,
        sendemail :document.querySelector("#email").value,
        sendphone :document.querySelector("#phone").value,
        sendopphone :document.querySelector("#Secondphone").value,
        sendbirth :document.querySelector("#birth").value,
        sendtenthpass :document.querySelector("#tenthpass").value,
        sendtwovalvepass :document.querySelector("#twovalvepass").value, 
        sendpercentage_10 :document.querySelector("#percentage_10").value,
        sendpercentage_12 :document.querySelector("#percentage_12").value,
        sendgender :document.getElementsByName("gender").value,
        sendaddress :document.querySelector("#address").value,  
        sendsubjects :document.querySelector("#subjects").value,
        sendcity :document.querySelector("#city").value, 

    };

    emailjs.send(serviceid,templateid,perams)
    .then( res=>{

        
        alert('Thank you,' + perams['sendname'] +'! Your form has been submited ' );
    })
    .catch();
 

  }
  function sendcontactmsg(){
    (function(){
        emailjs.init("dT9JRv5GmtR53FQri");
    })();
    let serviceid = "service_d0i0adj ";
    let templateid = "template_g7ggsmo";
    let perams ={ 
        sendname :document.querySelector("#name").value,
        sendemail :document.querySelector("#email").value,      
        sendsubjects :document.querySelector("#subject").value,   
        sendmessage :document.querySelector("#message").value,   

    };

    emailjs.send(serviceid,templateid,perams)
    .then( res=>{

        
        alert('Thank you,' + perams['sendname'] +'! Your form has been submited ' );
    })
    .catch();
 

  }



  