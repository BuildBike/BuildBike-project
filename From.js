function aler() {
// var emptytext=document.text.value;
// var emptytrip=document.tripstart.value;
// var emptyemail=document.email.value;
// var emptyphone=document.phone.value;
var emptyName=$('.name').val()
var emptyemail=$('.email').val()
var emptyphone=$('.number').val()
var emptytext=$('.text').val()
var emptydate=$('.date').val()
    if(emptyName==""){
        alert("Please write your  NAME ")}
        else if(emptyphone==""){
            alert("Please write your PHONE NUMBER ")
        }
        else if (emptyemail==""){
            alert("Please write yout EMAIL")}
            else if (emptytext==""){
                alert("Please write your SUGGESTION")}
                else if(emptydate==""){
                    alert("Please put your BIRTHDAY")
                }
                else{
            alert("Thank you! your suggestion has been sent .")}
        return true 
    }
   
    $("#link").click(function(){
$("form").show()       ; 
    })