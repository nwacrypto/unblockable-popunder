# unblockable-popunder

The Main.js opens a pop-up window when a user clicks on a link or image on a web page. 
it can be difficult for Ad blockers to block, as it does not open the new window until after the user has clicked on a link or image. This means that the user may not be aware that the popunder is going to open, and they may not have a chance to block it.

The function works by first checking to see if a pop-up window has already been opened. If it has not, the function opens a new pop-up window and sets its properties. The pop-up window is then focused and the sessionStorage object is used to store a value that indicates that a pop-up window has been opened.

The function then defines a function called handleElementClick. This function is called whenever a user clicks on a link or image on the web page. The function first opens a pop-up window, then waits for 1 second, and finally clicks on the link or image that the user clicked on. This results in the pop-up window being opened behind the link or image, which is often used to advertise products or services.

The function finally uses the document.querySelectorAll method to get a list of all the links and images on the web page. The function then loops through the list and adds an event listener to each link and image. The event listener is set to the handleElementClick function, which means that whenever a user clicks on a link or image, the handleElementClick function will be called.
