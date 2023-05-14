function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function () {
    if (document.readyState == 'complete') callback();
  });
}

ready(function () {
  // do something



  var cursor = document.querySelector('.cursor');
  var cursorinner = document.querySelector('.cursor2');
  var a = document.querySelectorAll('a');

  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });

  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
  });

  document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
  });

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  function cookieName (){
    // Define cookie name
    var cookieName = 'hide_donate';
  
    // Configure fancyBox
    $('.helpfulwindow').fancybox({
        autoDimensions: false,
        autoSize: false,
        height: 'auto',
        padding: 0,
        width: 650,
        beforeLoad: function() {
          // Returning false will stop fancybox from opening
          return ! $.cookie(cookieName);
        },
        afterClose: function() {
          // Set cookie to hide fancybox for 1 day
          $.cookie(cookieName, true, { expires: 1 });
        }
    });
  
    // Handle donate click event
    $('btnokay').on('click', function (event) {
        event.preventDefault(); 
  
        // Hide fancybox and set cookie to hide fancy box for 7 days
        $.fancybox.close();
        $.cookie(cookieName, true, { expires: 7 });
    });
  
    // Launch fancyBox on first element
    setTimeout(function () {
        $(".btnokay").trigger('click');
    }, 2000);
  };
});