const {hash}=window.location;

const str=atob(hash.replace('#',''));
if(str){
document.querySelector('#text-card').classList.add('hide');
document.querySelector('#message-show').classList.remove('hide');
document.querySelector('h1').innerHTML=str;
}
document.addEventListener('submit',event=>{
    event.preventDefault();
    document.querySelector('#text-card').classList.add("hide");
    document.querySelector("#link-card").classList.remove("hide");
    const input=document.querySelector('#message-text');
    
    const encrypted=btoa(input.value);  //#fdhfgd

    const inputlink=document.querySelector('#encrypted-text') //selecting the dom input element
    //window.location=file:///C:/Users/saili.m/Desktop/First/SecretMessagingApp/Messaging.html
    //window.location+encrypted text
    inputlink.value=`${window.location}#${encrypted}`; 
    inputlink.select();
})
