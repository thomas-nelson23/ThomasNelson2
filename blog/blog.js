const blogArray = [
    {
        title: "clockwork",
        subtitle: "what time is it?",
        dateComplete: "10/10/2019",
        description: "shows you the time. pretty cool",
        technologiesUsed: "html, css, javascript, date",
        soloContributor: true,
        projectHighlights: "study time, nap time, party time",
        netlifyUrl: "https://clockaflocka.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/Clockwork"
    },
    {
        title: "student showcase",
        subtitle: "nashville autumnal group project",
        dateComplete: "11/15/2019",
        description: "we learned soooo much about pull requests and merge conflicts",
        technologiesUsed: "html, css, javascript, github",
        soloContributor: false,
        projectHighlights: "work in progress!",
        netlifyUrl: "https://thomas-nelson.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/ThomasNelson2"
    },
    {
        title: "palindromes",
        subtitle: "tacocat, racecar, dr awkward",
        dateComplete: "10/15/2019",
        description: "forwards, backwards, is there a difference?",
        technologiesUsed: "html, css, javascript, regex",
        soloContributor: true,
        projectHighlights: "one day the console will grow a tree",
        netlifyUrl: "https://palindromer.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/Palindrome"
    },
    {
        title: "to-do list",
        subtitle: "learning jquery before angular was cool",
        dateComplete: "03/01/2017",
        description: "does not look nice. uses jquery to make a to-do list",
        technologiesUsed: "html, css, javascript, jquery",
        soloContributor: true,
        projectHighlights: "it is hideous",
        netlifyUrl: "https://whatchagonnado.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/To-do"
    },
    {
        title: "dynamic dogs",
        subtitle: "barking up the right tree",
        dateComplete: "10/31/2019",
        description: "dynamically populates a page to show off prized puppers. this was a code-along with the class!",
        technologiesUsed: "html, css, javascript",
        soloContributor: true,
        projectHighlights: "template literals are literally the coolest",
        netlifyUrl: "https://dynamicdogs.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/Dynamic-Dogs"
    },
    {
        title: "tic-tac-toe",
        subtitle: "that's what it is",
        dateComplete: "04/01/2017",
        description: "keeps score and other features",
        technologiesUsed: "html, css, javascript",
        soloContributor: true,
        projectHighlights: "pretty cool",
        netlifyUrl: "https://tic-tac-toe-thomas.netlify.com/",
        githubUrl: "https://github.com/thomas-nelson23/Tic-Tac-Toe"
    }
];

var bloggy = document.getElementById("blogDiv");

for (var indexer = 0; indexer < blogArray.length; indexer++) {
    var blogTitle = blogArray[indexer].title.toUpperCase();
    var subtitle = blogArray[indexer].subtitle.to;
    var dateComplete = blogArray[indexer].dateComplete;
    var description = blogArray[indexer].description;
    var technologiesUsed = blogArray[indexer].technologiesUsed;
    var projectHighlights = blogArray[indexer].projectHighlights;
    var netlifyUrl = blogArray[indexer].netlifyUrl;
    var githubUrl = blogArray[indexer].githubUrl;

    bloggy.innerHTML += `<div class='entryDiv'><hr><h2>${blogTitle}</h2>
        <h3>${subtitle}</h3>
        <strong>finished on ${dateComplete}</strong>
        <p>${description}</p>
        <div class='entryDetails'><p>Technologies used: ${technologiesUsed}</p>
        <p>Project highlights: ${projectHighlights}</p>
        <a href='${netlifyUrl}'><i class="fas fa-child"></i>view project</a><br>
            <a href='${githubUrl}'><i class="fab fa-github-alt"></i>view code</a></div> 
        </div>`;
}