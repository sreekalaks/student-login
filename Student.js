function register(){
   username=Ur_name.value,
   email=email_id.value,
   pswrd=pswd.value,
   phno=phno.value,
   qlfn=qfcn.value

Datadetails={
    username,
    email,
    pswrd,
    phno,
    qlfn,
}
if(pswrd in localStorage){
    alert(`password is already exist`)
}
else{
    localStorage.setItem(pswrd,JSON.stringify(Datadetails))
    alert(`Student details registered succesfully`)
    window.location.href="./Login.html"
}

}

function login(){
   email=email_id.value,
   pswrd=pswd.value 

if(pswrd in localStorage){
  Datadetails=JSON.parse(localStorage.getItem(pswrd))

if(pswrd==Datadetails.pswrd){
    alert(`login successfull`)
    window.location.href="./Home.html";
}
else{
    alert(`password incorrect`)
}
}
else{
    alert(`inavalid Account`)
   
}



}