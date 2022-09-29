const name = "Ahmed Saleem Shaikh";

function getDate(date = new Date()) {
    var dates = date.getDate();
    var months = date.getMonth();
    var years = date.getFullYear();
    return `${dates}/${months}/${years}`;
};

var date = getDate();

const program = "Certified Web 3.0 and Metaverse Developer.";

const vision = "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users are you Ready for Trillion Industry!";

document.write(`<h1>Hi! My Name is ${name} it's ${date} ... I'm a Student of <b>${program}</b></h1> <br/><br/>`);

document.write(`<h2>The Vision Of Course is:</h2><br/><b><i>${vision}</i><b/>`);