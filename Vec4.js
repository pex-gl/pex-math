function create() {
    return [0, 0, 0, 0];
}

function equals(a,b) {
    return a[0] == b[0] &&
           a[1] == b[1] &&
           a[2] == b[2] &&
           a[3] == b[3];
}

function equals4(a,x,y,z,w){
    return a[0] == x &&
           a[1] == y &&
           a[2] == z &&
           a[3] == w;
}

function set(a,b){
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    return a;
}

function set4(a,x,y,z,w){
    a[0] = x;
    a[1] = y;
    a[2] = z;
    a[3] = w;
    return a;
}

function fromVec3(a,b){
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a;
}

function copy(a){
    return a.slice(0);
}

var Vec4 = {
    create: create,
    set: set,
    set4: set4,
    fromVec3 : fromVec3,
    copy: copy,
    equals: equals,
    equals4: equals4
};

module.exports = Vec4;
