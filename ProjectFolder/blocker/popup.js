// Popup blocker function
function blockPopups() {
  // Check if the browser supports popup blocking
  if ("webkitNotification" in window) {
    // Disable popups in WebKit-based browsers
    window.webkitNotifications.requestPermission();
  } else {
    // Create a new window object with blocked popup features
    var popupBlockerWindow = window.open("", "_blank", "height=1,width=1,top=0,left=0,status=no,toolbar=no,menubar=no,location=no");
    
    // Close the new window immediately
    if (popupBlockerWindow) {
      popupBlockerWindow.close();
    }
  }
}

// Call the popup blocker function
blockPopups();
