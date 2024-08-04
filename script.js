function genpassword(){
    const characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&"
    let password="";
    for(i=0;i<8;i++){
        const randomindex=Math.floor(Math.random()*characters.length)
        password=password+characters[randomindex];
    }
   
    document.getElementById("password1").innerHTML=password;
}