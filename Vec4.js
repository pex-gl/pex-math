function create() {
    return [0, 0, 0, 1];
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

function multMat4(a,m){
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    a[0] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12] * w;
    a[1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13] * w;
    a[2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14] * w;
    a[3] = m[ 3] * x + m[ 7] * y + m[11] * z + m[15] * w;
    return a;
}

var Vec4 = {
    create: create,
    set: set,
    set4: set4,
    fromVec3 : fromVec3,
    multMat4 : multMat4,
    copy: copy,
    equals: equals,
    equals4: equals4
};

module.exports = Vec4;
