const pathings = {
    "sh": ["cc", null, null, null],
    "cc": ["nh", "eh", "sh", "wh"],
    "nh": [null, "nec", "cc", "nwc"],
    "nwc": ["nh", null, "wh", null],
    "nec": ["nh", null, "eh", null],
    "eh": ["nec", null, null, "cc"],
    "wh": ["nwc", "cc", null, null],
};

const nameMap = {
    "sh": "South Hall",
    "cc": "Center Chamber",
    "nh": "North Hall",
    "nwc": "North-West Chamber",
    "nec": "North-East Chamber",
    "eh": "East Hall",
    "wh": "West Hall"
};

const roomPathMap = {
    "sh": "/~22318953/COM4011/Project/travel/rooms/sh.html",
    "cc": "/~22318953/COM4011/Project/travel/rooms/cc.html",
    "nh": "/~22318953/COM4011/Project/travel/rooms/nh.html",
    "nwc": "/~22318953/COM4011/Project/travel/rooms/nwc.html",
    "nec": "/~22318953/COM4011/Project/travel/rooms/nec.html",
    "eh": "/~22318953/COM4011/Project/travel/rooms/eh.html",
    "wh": "/~22318953/COM4011/Project/travel/rooms/wh.html"
};

function changeFrame(url) {
    document.getElementById('viewbox').src = url;
    setTimeout(function () { generateButtons(); }, 100)
}

function generateButtons() {
    navBar = document.getElementById("navlist");
    console.log(document.getElementById('viewbox').contentWindow.document);
    roomID = document.getElementById('viewbox').contentWindow.document.getElementById("roomID").content;

    navBar.innerHTML = "";

    for (room in pathings[roomID]) {
        console.log(pathings[roomID], pathings[roomID][room]);
        if (pathings[roomID][room] != null) {
            let item = document.createElement("li");
            let link = document.createElement("a");
            link.appendChild(document.createTextNode(nameMap[pathings[roomID][room]]));
            item.appendChild(link);
            navBar.appendChild(item);
            let path = roomPathMap[pathings[roomID][room]];
            link.onclick = function () { changeFrame(path); }

        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        generateButtons();
    }, 100)
});