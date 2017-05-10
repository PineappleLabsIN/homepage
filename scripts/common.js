var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "images/services.jpg";
path[1] = "images/products.png";
path[2] = "images/mobile-app.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;

function submitForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var comment = document.getElementById("comment").value;
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("form").innerHTML="<p>Thank you! Your message has been sent.</p>";
    }
  }
xmlhttp.open("POST","sendmail.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("subject="+name + "-"+email+"-"+mobile+"&message="+comment);
}
