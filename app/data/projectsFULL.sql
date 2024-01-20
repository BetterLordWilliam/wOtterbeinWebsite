## TABLES ##
CREATE TABLE projects (
	ID int auto_increment NOT NULL,
    ProjName varchar(15),
    ProjDesc varchar(500),
    ProjImage varchar(25),
    ProjStart varchar(15),
    ProjEnd varchar(15),
    ProjTech varchar(100),
    ProjLink varchar(200),
    ProjAddDate datetime DEFAULT(current_timestamp()),
    PRIMARY KEY (ID)
);

# ADDITIONS #

ALTER TABLE projects ADD ProjLink varchar(200);


## INFO ##
INSERT INTO projects (
	ProjName, ProjDesc, ProjImage, ProjStart, ProjEnd, ProjTech, ProjLink
) VALUES (
	'KeyFinder', 
    'In the KeyFinder game you are the key finder, a character who must collect keys to open locked doors and access the final purple chest of each level. 
	There are four levels in total each containing three to four different keys. This game was developed as a solo project
	but it eventually turned into a class project for my Programming 12 course after my instructor viewed the project during an online meeting.',
    'KeyFinder.png',
    'December 2022',
    'March 2023',
    'Java',
    'https://github.com/BetterLordWilliam/KeyFinder'
); # KeyFinder game.

INSERT INTO projects (
	ProjName, ProjDesc, ProjImage, ProjStart, ProjEnd, ProjTech, ProjLink
) VALUES (
	'HowRu',
    'HowRu is a mental health focused social media app. 
    The app provides users with a means of achieving genuine connections with people in their community with features such as localized posting and a built-in messaging feature.
    HowRu was developed by a team of BCIT students for our term one project, 
    my contributions to this project were the messaging system and the styles for The Space, Conversation, and Messaging pages.',
    'HowRu.png',
    'September 2023',
    'December 2023',
    'JavaScipt, HTML, CSS, Bootstrap, and Google Firebase.',
    'https://github.com/rraymondx/1800_202330_BBY25'
); # HowRu Webapp.

INSERT INTO projects (
	ProjName, ProjDesc, ProjImage, ProjStart, ProjEnd, ProjTech, ProjLink
) VALUES (
	'This Website',
    'Developed solo using standard web technologies and 
    designed with vanilla HTML and CSS. MySQL database created to house relevant website information.
    The website utilizes Node.js with Express.js for its backend needs while JavaScript code is responsible for the application logic.
    This website was created to house all my projects and endeavors as a computer science student, and to provide those interested with
    a clear depiction of my skills.',
    'PersonalPortfolio.png',
    'December 2023',
    'Present',
    'JavaScript, HTML, CSS, MySQL, Node.js, Express.js.',
    'https://github.com/BetterLordWilliam/wOtterbeinWebsite'
); # Personal Portfolio.

INSERT INTO projects (
	ProjName, ProjDesc, ProjImage, ProjStart, ProjEnd, ProjTech, ProjLink
) VALUES (
	'lol',
    'lol',
    'lol',
    'lol',
    'lol',
    'lol',
    'lol'
);

## UTIL ##
# DELETE FROM projects WHERE ID = 5;
# DROP TABLE projects;
SELECT * FROM projects;

USE wOtterbein;

