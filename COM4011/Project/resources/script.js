/*handles nav*/
function hideNav() {
    document.getElementById("navbar").style.left = "-15vw";
    document.getElementById("navShow").style.left = "1vw";
};
function showNav() {
    document.getElementById("navbar").style.left = "0vw";
    document.getElementById("navShow").style.left = "-15vw";
};

/*handles high contrast mode*/
/*taken from w3schools*/
function getHCCookie() {
    let name = "contrastMode=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    /*removes encoding*/
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        /*removes leading spaces*/
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        /*returns string following name*/
    }
    return "";
}

function setHCCookie(value) {
    document.cookie="contrastMode="+value+";";
}

function toggleContrast() {
    if (getHCCookie()=="0"){
        setHCCookie("1")
    }
    else{
        setHCCookie("0")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navHide").addEventListener("click", hideNav);
    document.getElementById("navShow").addEventListener("click", showNav);
});

