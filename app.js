function receivedUniversalisItem(thing) {
  var where = document.getElementById("Universalis_" + thing);
  if (where)
    where.style.display = "block";
};

function setUniversalisElement(thing, text) {
  var where = document.getElementById("Universalis_" + thing);
  if (where)
    where.innerHTML = text;
};

function universalisCallback(data) {
  for (var thing in data) {
    receivedUniversalisItem(thing);
    var d = data[thing];
    if (typeof d != "object") {
      setUniversalisElement(thing, d)
    } else {
      for (var t in d) {
        var dd = d[t];
        setUniversalisElement(thing + "." + t, dd);
      }
    }
  }
}! function (d, id, region, day) {
  function yyyymmdd(day) {
    var now = new Date();
    var delta = day == 7 ? 7 - now.getDay() : 0;
    var when = new Date(now.getTime() + 86400000 * delta);
    return (1900 + when.getYear()) * 10000 + (1 + when.getMonth()) * 100 + when.getDate();
  };
  var js, fjs = d.getElementsByTagName('script')[0];
  if (!d.getElementById(id)) {
    js = d.createElement('script');
    js.id = id;
    js.src = document.location.protocol + '//universalis.com/' + (region == "" ? region : region + "/") + yyyymmdd(day) + '/jsonpmass.js?callback=universalisCallback';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'universalis-js',
  /* CUSTOMIZATION: the local calendar

    Insert the name of the local calendar: for instance, "Europe.England.Westminster". For the General Calendar, use an empty string: just "".
    */

  "Europe.Poland.Warsaw", // Leave this comma here: it really is needed!

  /* CUSTOMIZATION: which day do you want?
     Insert 1 for today's readings.
     Insert 7 for next Sunday's readings.
     */

  1
);

/* ADVANCED CUSTOMIZATION:
   If you want to have today's readings and the Sunday readings both on the same page, then you will have to call the web site twice, once for each of the two days, and have a different callback each time. This isn't rocket science but it does mean rewriting the Javascript we have given you, so the best thing is to complain to whoever asked you to do it!
   */
var images = document.querySelectorAll("img"),
    len = images.length,
    counter = 0;

[].forEach.call( images, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        console.log( 'All images loaded!' );
    }
}

var currentSlide = 0;

function slideshow() {

  for (var i = 0; i < images.length; i++) {
    if (images[i].style.display = "block"){           
      images[i].style.display = "none";
    }
  }
  images[currentSlide].style.display = "block";
  images[currentSlide].style.animationName = "changeOpacity";
  images[currentSlide].style.animationDuration = ".7s";
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  setTimeout(slideshow, 3000);
}
slideshow();
