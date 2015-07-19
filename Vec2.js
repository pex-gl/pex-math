function create() {
    return [0, 0];
}

function set(a,b){
    a[0] = b[0];
    a[1] = b[1];
    return a;
}

function set2(a,x,y){
    a[0] = x;
    a[1] = y;
    return a;
}

function equals(a,b) {
    return a[0] == b[0] &&
           a[1] == b[1];
}

function equals2(a,x,y){
    return a[0] == x &&
           a[1] == y;
}

function copy(a,out){
    if(out !== undefined){
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    return a.slice(0);
}

function add(a,b){
    a[0] += b[0];
    a[1] += b[1];
    return a;
}

function add2(a,x,y){
    a[0] += x;
    a[1] += y;
    return a;
}

function sub(a,b){
    a[0] -= b[0];
    a[1] -= b[1];
    return a;
}

function sub2(a,x,y){
    a[0] -= x;
    a[1] -= y;
    return a;
}

function scale(a,n){
    a[0] *= n;
    a[1] *= n;
    return a;
}

function toMin(a){
    a[0] = a[1] = -Number.MAX_VALUE;
    return a;
}

function toMax(a){
    a[0] = a[1] = Number.MAX_VALUE;
    return a;
}

function toZero(a){
    a[0] = a[1] = 0;
    return a;
}

var Vec2 = {
    create  : create,
    set     : set,
    set2    : set2,
    copy    : copy,
    equals  : equals,
    equals2 : equals2,
    add   : add,
    add2  : add2,
    sub   : sub,
    sub2  : sub2,
    scale : scale,
    toMin : toMin,
    toMax : toMax,
    toZero : toZero
};

module.exports = Vec2;