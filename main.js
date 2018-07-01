var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/1.jpg') {
    	
      myImage.setAttribute ('src','Images/2.jpg');
    } else {
      myImage.setAttribute ('src','Images/1.jpg');
    }
}