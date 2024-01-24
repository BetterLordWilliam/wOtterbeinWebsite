# Personal Portfolio Website

<p align="center">
<img alt="portfolio_img" src="./public/images/TitleIcon.png"/>
</p>

<hr></hr>

## Project Overview

### About the Project

The purpose of this website was to challenge my capabilities as a web developer while also serving as a place to house the projects I am most proud of.

Utilizing the Node.js framework, I wrote this website from scratch using vanilla HTML, CSS, and JavaScript. Additionally, a MySQL database, hosted on Aiven, stores the information regarding
the projects displayed on the website. I really wanted to expand upon the concepts that I learned during my time at BCIT, particularily in regard to Node.js, Express.js and SQL. 

I look forward to hosting the website soon!

### The Features so Far

- A home page that introduces myself and my skills
- A projects page that displays my web applications with links to source code and live demos
- A contact page that allows visitors to send me messages via email

### Future Plans

- Tablet and mobile phone responsive view support
- Hobbies page to showcase the less serious things that I do
  - Doom maps page
  - Dark Souls mods
- A blog page to document learnings

<hr></hr>

## Technologies Used

- JavaScript
- HTML and CSS
- Node.js (npm)
- EmailJS (used for the contact page)
- Aiven online MySQL service

<p align="center">
<img height="50" alt="html" src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/>
<img height="50" alt="css" src="https://lkotlarenko.github.io/Exercise-Tech-Gallery/images/css-logo.png"/>
<img height="50" alt="javascript" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"/>
</p>

<hr></hr>

## Contents

```
Top Level of Project:
├── githubstuff                                          # Folder containing GitHub related information
├── res                                                  # Folder containing graphics
├── src                                                  # Folder containing source code
├── 2DJavaGame SUBMISSIOn-SC.jar                         # Executable jar file
├── InstructorFeedback.pdf                               # Instructors feedback
├── KeyFinder Design Document.pdf                        # Documentation
├── NOTE.txt                                             # Note for scholarship committee
└── README.md                                            # This!

res contents:
├── UI                                                   # Folder containing UI graphics
|
└────| Text                                                    # Folder containing fonts
|    |
|    └───── ARCADECLASSIC.TTF                                        # ttf font used
|    └───── FFFFORWA.TTF                                             # ttf font
|    └───── pizzadudedotdk.txt                                       # ttf font
|    └───── read_me.txt                                              # Read me text file copntaining font license
|
└───── Key.png                                                 # Blank key image
└───── KeyFinderUI.png                                         # Key image container
└───── KeyFinderUI.psd                                         # psd for key image container
└───── ShowBoxClosed.png                                       # Controls container closed
└───── ShowBoxClosed.psd                                       # psd for controls container closed
└───── ShowBoxOpen.png                                         # Controls container opened
└───── SpeedIcon.png                                           # Sprint icon
|
├── maps                                                 # Folder containing map text data
|
└───── testMap.txt                                             # Map created for testing purposes
└───── world01.txt                                             # Map #1
└───── world02.txt                                             # Map #2
└───── world03.txt                                             # Map #3
└───── world04.txt                                             # Map #4
|
├── objects                                              # Folder containing object graphics
|
└───── Data                                                    # Folder containing photoshop psd files
└───── B_Door.png                                              # Blue door graphic
└───── B_Key.png                                               # Blue key graphic
└───── Bullet.png                                              # Unused asset
└───── ChestClosed.png                                         # Chest closed graphic
└───── ChestOpen.png                                           # Chest open graphic
└───── Door.png                                                # Door closed graphic
└───── DoorOpened.png                                          # Door opened graphic
└───── Key.png                                                 # Gray key (blank template)
└───── P_ChestClosed.png                                       # End chest closed graphic
└───── P_Key.png                                               # Purple key graphic
└───── R_Door.png                                              # Red door graphic
└───── R_Key.png                                               # Red key graphic
└───── Y_Door.png                                              # Yellow door graphic
└───── Y_Key.png                                               # Yellow key graphic
|
├── player/movement                                      # Folder containing player graphics
|
└───── Player_D1.png                                           # Player down sprite 1
└───── Player_D2.png                                           # Player down sprite 2
└───── Player_IDL.png                                          # Player idle sprite
└───── Player_L1.png                                           # Player left sprite 1
└───── Player_L2.png                                           # Player left sprite 2
└───── Player_R1.png                                           # Player right sprite 1
└───── Player_R2.png                                           # Player right sprite 2
└───── Player_U1.png                                           # Player up sprite 1
└───── Player_U2.png                                           # Player up sprite 2
|
├── sound                                                # Folder containing sound
|
└───── ORG                                                     # Origional ogg files
└───── DoorOpen.wav                                            # Door open sound
└───── EndLevel.wav                                            # End level wav sound effect
└───── Error.wav                                               # Error sound effect
└───── FoorSteps.wav                                           # Footsteps sound effect
└───── Key.wav                                                 # Key pickup sound effect
└───── MenuSong.wav                                            # Called menu wav, but it's actually the song that plays at the end of the game
└───── note.txt                                                # Contains information about the music creation
|
└── tiles                                                # Folder containing tile graphcis
|
└───── data                                                    # Folder containing psd documents for tile graphics
└───── BannerWall.png                                          # Banner wall png graphic
└───── Dirt.png                                                # Dirt png graphic
└───── Grass.png                                               # Grass png graphic
└───── KnightStatue.png                                        # Knight statue png graphic
└───── Lilypad.png                                             # Lilypad on water png graphic
└───── Tree.png                                                # Tree png graphic
└───── Wall.png                                                # Stone wall png graphic
└───── Water.png                                               # Water png graphic
└───── Wood.png                                                # Wood floor png graphic
└───── bound.png                                               # Out-of-bounds png graphic

src content:
├── 1-OXPS                                               # Folder containing build process artifacts
├── entity                                               # Folder containing java classes for entities
|
└───── Entity.java                                             # Code for an entity
└───── Player.java                                             # Code for the player entity
|
├── main                                                 # Folder containing java classes for game's core
|
└───── CollisionDetection.java                                 # Code for collision detection
└───── GamePanel.java                                          # CORE of the game
└───── KeyHandler.java                                         # Code for input handling
└───── Main.java                                               # Drives the program :)
└───── Sound.java                                              # Code for handling the playing of sound
└───── UI.java                                                 # Code for handling the state of the UI
|
├── map                                                  # Folder containing java classes for maps
|
└───── Map.java                                                # Base map code. Renders objects (based on current map).
└───── TestMap.java                                            # Code for the test map
└───── World01.java                                            # Code for map #1
└───── World02.java                                            # Code for map #2
└───── World03.java                                            # Code for map #3
└───── World04.java                                            # Code for map #4
|
├── object                                               # Folder containing java classes for objects
|
└───── Tile.java                                               # Base tile code
└───── TileManager.java                                        # Code for the awesome tile manager
|
└── tile                                                 # Folder containing java classes for tiles


```

<br/><br/>
