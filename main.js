var menuScreen = document.getElementById("menuScreen");
var galleryStartBtn = document.getElementById("galleryStartBtn");

var sceneInfo = document.getElementById("sceneInfo");
var sceneList = document.getElementById("sceneList");

var sidebar = document.getElementById("sidebar");
var sidebarHideBtn = document.getElementById("sidebarHideBtn");
var sidebarHidden = false;

var sceneMain = document.getElementById("sceneMain");
var sceneName = document.getElementById("sceneName");
var sceneDay = document.getElementById("sceneDay");
var sceneComment = document.getElementById("sceneComment");
var sceneImg = document.getElementById("sceneImg");

var ostPlayer = document.getElementById("ostPlayer");
var ostPlayBtn = document.getElementById("ostPlayBtn");
var ost;

var scenes = [
    {
        "ImagePath": "imgs/mcsnow.png",
        "SceneName": "First Few Steps",
        "SceneDay": "(First day)",
        "SceneComment": '"In that lingering moment, the world seems so... quiet."',
        "SceneOST": "ost/mainthemeloop.mp3"
    },
    {
        "ImagePath": "imgs/rofimeet.png",
        "SceneName": "The Mystery Guest",
        "SceneDay": "(First day)",
        "SceneComment": '"It had to be."',
        "SceneOST": null
    },
    {
        "ImagePath": "imgs/tworoadsdream.png",
        "SceneName": "Two Roads",
        "SceneDay": "(Second day)",
        "SceneComment": '"There was never a choice."',
        "SceneOST": "ost/conversationsofmind.mp3"
    },
    {
        "ImagePath": "imgs/rofisnow.png",
        "SceneName": "Outside with Rofi",
        "SceneDay": "(Second day)",
        "SceneComment": '"Sitting outside in the snow with you!"',
        "SceneOST": "ost/mainthemeloop.mp3"
    },
    {
        "ImagePath": "imgs/artemisbar.png",
        "SceneName": "Handsome One",
        "SceneDay": "(Second day)",
        "SceneComment": '"It’s not a party without music."',
        "SceneOST": "ost/artiebartheme.mp3"
    },
    {
        "ImagePath": "imgs/hunterbar.png",
        "SceneName": "Billiards with Hunter",
        "SceneDay": "(Second day)",
        "SceneComment": '"No worries! I can teach ya!"',
        "SceneOST": "ost/generalbartheme.mp3"
    },
    {
        "ImagePath": "imgs/olliebar.png",
        "SceneName": "Little Rambles",
        "SceneDay": "(Second day)",
        "SceneComment": '"I think you’re a good person."',
        "SceneOST": "ost/generalbartheme.mp3"
    },
    {
        "ImagePath": "imgs/rofibar.png",
        "SceneName": "Place to Stay",
        "SceneDay": "(Second day)",
        "SceneComment": '"Keep me warm, Leo. Pleaseeee?"',
        "SceneOST": "ost/generalbartheme.mp3"
    },
    {
        "ImagePath": "imgs/theobar.png",
        "SceneName": "Falling for…",
        "SceneDay": "(Second day)",
        "SceneComment": '"Hey, you. You need something?"',
        "SceneOST": "ost/theobartheme.mp3"
    },
    {
        "ImagePath": "imgs/artiesmoke.png",
        "SceneName": "The Escape",
        "SceneDay": "(Third day)",
        "SceneComment": '"Just need… a moment…"',
        "SceneOST": "ost/artiedreamclub.mp3"
    },
    {
        "ImagePath": "imgs/hunterparents.png",
        "SceneName": "Admiration",
        "SceneDay": "(Third day)",
        "SceneComment": '"Make us proud. Make them wish they were you."',
        "SceneOST": "ost/hunterdreamloop.mp3"
    },
    {
        "ImagePath": "imgs/hunterfallsmile.png",
        "SceneName": "Pain, Fall.",
        "SceneDay": "(Third day)",
        "SceneComment": '"So that’s what it feels like. How refreshing."',
        "SceneOST": "ost/hunterdreamloop.mp3"
    },
    {
        "ImagePath": "imgs/ollievoid.png",
        "SceneName": "OLIVER",
        "SceneDay": "(Third day)",
        "SceneComment": '"Hello world. My name is Oliver."',
        "SceneOST": "ost/olliedreamsong.mp3"
    },
    {
        "ImagePath": "imgs/ollieoverwhelm.png",
        "SceneName": "Last Thought",
        "SceneDay": "(Third day)",
        "SceneComment": '"I can\'t take this anymore."',
        "SceneOST": "ost/fatalfail.mp3"
    },
    {
        "ImagePath": "imgs/rofimemory.png",
        "SceneName": "Memories with Rofi",
        "SceneDay": "(Third day)",
        "SceneComment": '"C’mon, Leo, walk faster!"',
        "SceneOST": "ost/hazymemories.mp3"
    },
    {
        "ImagePath": "imgs/rofimcbranch.png",
        "SceneName": "Branch",
        "SceneDay": "(Third day)",
        "SceneComment": '"ROFI! LOOK OUT!"',
        "SceneOST": "ost/epicstorm.mp3",
    },
    {
        "ImagePath": "imgs/theodream.jpg",
        "SceneName": "The Scar",
        "SceneDay": "(Third day)",
        "SceneComment": '"One way or another, I always end up back here."',
        "SceneOST": "ost/conversationsofmind.mp3"
    },
    {
        "ImagePath": "imgs/theocar.png",
        "SceneName": "Last Thing To Say",
        "SceneDay": "(Third day)",
        "SceneComment": '"I’ll always love you."',
        "SceneOST": "ost/conversationsofmind.mp3"
    },
    {
        "ImagePath": "imgs/theodawn.png",
        "SceneName": "Sunrise",
        "SceneDay": "(Third day)",
        "SceneComment": '"Thank you, Leo, for just listening."',
        "SceneOST": null
    },
    {
        "ImagePath": "imgs/hunterhug.png",
        "SceneName": "Goodnight",
        "SceneDay": "(Third day)",
        "SceneComment": '"You’re safe here with me, Hunter."',
        "SceneOST": "ost/mainthemeloop_drums.mp3"
    },
    {
        "ImagePath": "imgs/artieporch.png",
        "SceneName": "Shadow of the Past",
        "SceneDay": "(Third day)",
        "SceneComment": '"Sometimes it just feels like I’m running away from myself."',
        "SceneOST": "ost/mainthemeloop.mp3"
    },
    {
        "ImagePath": "imgs/temporarily.png",
        "SceneName": "Floating on the Mind",
        "SceneDay": "(Third day)",
        "SceneComment": '"...Would you say you are a happy person?"',
        "SceneOST": "ost/analogfrost.mp3"
    }
];

function setActiveScene(num) {
    if (ost !== undefined) ost.pause();
    ostPlayer.style.display = "none";

    var scene = scenes[num];
    
    sceneImg.src = scene.ImagePath;
    sceneName.innerText = scene.SceneName;
    sceneDay.innerText = scene.SceneDay;
    sceneComment.innerText = scene.SceneComment;
    
    if (scene.SceneOST !== null) {
        ost = new Audio();
        ost.src = scene.SceneOST;
        ost.loop = true;
        ost.play();

        ostPlayer.style.display = "flex";
        ostPlayBtn.innerText = "Pause";
    }
}

// event handlers

ostPlayBtn.addEventListener("click", function() {
    if (ost.paused) {
        ostPlayBtn.innerText = "Pause";
        ost.play();
    }
    else {
        ostPlayBtn.innerText = "Play";
        ost.pause();
    }
})

sidebarHideBtn.addEventListener("click", function() {
    if (sidebarHidden) {
        sidebar.style.opacity = "1";
        sidebar.style.pointerEvents = "all";
        sidebarHideBtn.innerText = "Hide";
    }
    else {
        sidebar.style.opacity = "0";
        sidebar.style.pointerEvents = "none";
        sidebarHideBtn.innerText = "Show";
    }
    sidebarHidden = !sidebarHidden;
});

galleryStartBtn.addEventListener("click", function() {
    setActiveScene(0);
    menuScreen.style.opacity = "0";
    menuScreen.style.pointerEvents = "none";
    setTimeout(() => menuScreen.remove(), 2500);
});

var tabIndex = 0;

for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];

    var sceneEntry = document.createElement("div");
    var sceneEntryImg = document.createElement("img");

    var sceneEntryInfo = document.createElement("div");
    var sceneEntryName = document.createElement("h3");
    var sceneEntryDay = document.createElement("p");

    sceneEntry.className = "sceneEntry";
    sceneEntry.tabIndex = tabIndex++;

    sceneEntry.addEventListener("click", function() {
        setActiveScene(i);
    });

    sceneEntryImg.style.width = "160px";
    sceneEntryImg.style.height = "90px";
    sceneEntryImg.alt = "Unable to load scene.";
    sceneEntryImg.src = scene.ImagePath;
    
    sceneEntryName.innerText = scene.SceneName;
    sceneEntryDay.innerText = scene.SceneDay;

    sceneEntryInfo.appendChild(sceneEntryName);
    sceneEntryInfo.appendChild(sceneEntryDay);
    sceneEntry.appendChild(sceneEntryImg);
    sceneEntry.appendChild(sceneEntryInfo);
    sceneList.appendChild(sceneEntry);
}