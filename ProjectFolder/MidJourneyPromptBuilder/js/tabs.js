function changeTab(event, tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";
}

// Select the first tab and display its content when the page loads
document.getElementById('tab1').style.display = "block";