function initCleanDocument(names) {
        var element = document.documentElement;
        for (var i = element.attributes.length - 1; i >= 0; i--) {
            element.removeAttribute(element.attributes[i].name);
        }
        for (var i = 0; i < names.length; i++) {
            var elements = document.getElementsByTagName(names[i]);
            if (elements.length === 0)
                document.documentElement.appendChild(document.createElement(names[i]));
        }
        window.stop();
}

var documentElements = ['html']

initCleanDocument(documentElements);

var templateurl = chrome.runtime.getURL('watchpagetemplate.html');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.querySelector("html").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", templateurl, true);
xhttp.send();