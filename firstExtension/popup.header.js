// Vinh: Use this script if popup.js is loaded in <header> of hello.htmml

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');

    console.log('popup.js: This is a Vinh message');

    checkPageButton.addEventListener('click', function() {

      console.log('popup.js: ' + 'button was clicked');

      // Saving data in storage
      chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is being set to "green".');
      });

      chrome.storage.sync.get(['color'], function(result) {
        // Changing button color
        checkPageButton.style.backgroundColor = result.color
        checkPageButton.setAttribute('value', result.color);

        console.log('Confirming: "color" currently is ' + result.color);
        alert('Confirming: the button color should change now...');
      });
  
      // Sending a POST request to external site
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);


  