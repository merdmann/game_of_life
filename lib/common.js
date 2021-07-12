export var cell = [
    /* 0 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 1 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 2 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 3 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 4 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 5 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 6 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 7 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 8 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 9 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
/***
 * convert game coordinates to board coordinates
 *
 */
export function XtoPx(x) { return x * 50 + "px"; }

export function YToPx(y) { return y * 50 + "px"; }

/*** 
 * make the cell x,y using the class cls
 */
export function mark(x, y, cls) {
    const myclick = function(x, y) { console.log("myclick" + x + y); }
    const _root_ = document.getElementById('root');
    const name = "" + x + "," + y;

    _root_.innerHTML += `<div id="${name}" class="${cls}"></div>`;
    const elem = document.getElementById(name);
    elem.addEventListener('mousedown', evt => { console.log("********" + evt) })
    elem.style.setProperty('transform', 'translate(' + XtoPx(x) + ", " + YToPx(y) + ")");
}

function setCell(name) { console.log(name) }


function is_occupied(x,y,dx,dy) {
    console.log(x + " " + y)
    let myCell = cell[(y+dy)%10][(x+dx)%10] 

    return myCell !== ' ' ? 0:1
}

/**
 * 
 * @param {x} x 
 * @param {y} y 
 * returns the number of direct nighbors
 */
export function neighbors(x, y) {
    let result = 0;

    if( is_occupied(x,y,-1, 1)) {++result}
    if( is_occupied(x,y, 0, 1)) {++result}
    if( is_occupied(x,y, 1, 1)) {++result}
    if( is_occupied(x,y, 0, 1)) {++result}
    if( is_occupied(x,y, 1, 1)) {++result}
    if( is_occupied(x,y, 0, 1)) {++result}  
    if( is_occupied(x,y,-1,-1)) {++result}

    return result;
}

export function clear() {
    const root = document.getElementById('root')

    root.innerHTML = "";
}

export function allElements(id) {
    const elem = document.getElementById(id)
    for (let i = 0; i < elem.children.length; ++i) {
        console.log(elem.children[i].tagName);
    }
}