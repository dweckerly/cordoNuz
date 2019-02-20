var animating = false;
var cols = document.getElementsByClassName("col");

var locationArray = [
    ["", "", ""], 
    ["", "", ""],
    ["", "Home", ""],
    ["", "", ""],
    ["", "", ""]
];

window.onload = function() {
    addClickEventToMap();
}

function addClickEventToMap() {
    Array.from(cols).forEach(element => {
        element.addEventListener('click', e => {
            if(!animating) {
                mapClick(e.path[0]);
            }
        }, false);
    });
}

function mapClick(elem) {
    var pos = {row: elem.id.split('-')[1], col: elem.id.split('-')[2]};
    if(pos.row == 3) {
        animateMap('up');
    } else if(pos.row == 1) {
        animateMap('down');
    }
}

function animateMap (direction) {
    animating = true;
    var mapView = document.getElementById('map-view');
    var mapPos = getIntTopPos(mapView);
    if(direction == 'up') {
        var endPos = 0;
    } else if(direction == 'down'){
        var endPos = mapPos * 2;
    }
    var mapAnim = setInterval(() => {
        mapPos = lerp(mapPos, endPos, 0.01);
        mapView.style.top = mapPos + 'px'; 
        if(direction == 'down') {
            if(getIntTopPos(mapView) >= endPos) {
                clearInterval(mapAnim);
                resetMapView(direction);
            }
        } else if(direction == 'up') {
            if(getIntTopPos(mapView) <= endPos) {
                clearInterval(mapAnim);
                resetMapView(direction);
            }
        }
    });
}

function lerp(start, end, percent) {
     return (start + percent * (end - start));
}

function createNewRow(dir) {
    var newRow = [];
    if(dir == 'up') {
        locationArray.push(newRow)
    } else if(dir == 'down') {
        locationArray.unshift(newRow);
    }
}

function resetMapView(direction) {
    createNewRow(direction);
    animating = false;
}

function getIntTopPos(elem) {
    return parseInt(window.getComputedStyle(elem).top.slice(0, -2));
}