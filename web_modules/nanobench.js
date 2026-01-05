import { c as commonjsGlobal, b as browser$1, r as require$$3, a as getDefaultExportFromCjs } from './_chunks/polyfills-BqvRcnxQ.js';

var __dirname$1 = '/Users/damienseguin/Projects/variable/pex-gl/pex-math/node_modules/nanobench';

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var queueMicrotask_1 = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn);

var queueTick = queueMicrotask_1;
var mutexify$1 = function() {
    var queue = [];
    var used = null;
    var call = function() {
        used(release);
    };
    var acquire = function(fn) {
        if (used) return queue.push(fn);
        used = fn;
        acquire.locked = true;
        queueTick(call);
        return 0;
    };
    acquire.locked = false;
    var release = function(fn, err, value) {
        used = null;
        acquire.locked = false;
        if (queue.length) acquire(queue.shift());
        if (fn) fn(err, value);
    };
    return acquire;
};
var mutexify_1 = mutexify$1;

var browserProcessHrtime = browser$1.hrtime || hrtime$1;
// polyfil for window.performance.now
var performance = commonjsGlobal.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
    return new Date().getTime();
};
// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime$1(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += 1e9;
        }
    }
    return [
        seconds,
        nanoseconds
    ];
}

var minimalDesc = [
    'h',
    'min',
    's',
    'ms',
    'μs',
    'ns'
];
var verboseDesc = [
    'hour',
    'minute',
    'second',
    'millisecond',
    'microsecond',
    'nanosecond'
];
var convert = [
    60 * 60,
    60,
    1,
    1e6,
    1e3,
    1
];
var prettyHrtime$1 = function(source, opts) {
    var verbose, precise, i, spot, sourceAtStep, valAtStep, decimals, strAtStep, results, totalSeconds;
    verbose = false;
    precise = false;
    if (opts) {
        verbose = opts.verbose || false;
        precise = opts.precise || false;
    }
    if (!Array.isArray(source) || source.length !== 2) {
        return '';
    }
    if (typeof source[0] !== 'number' || typeof source[1] !== 'number') {
        return '';
    }
    // normalize source array due to changes in node v5.4+
    if (source[1] < 0) {
        totalSeconds = source[0] + source[1] / 1e9;
        source[0] = parseInt(totalSeconds);
        source[1] = parseFloat((totalSeconds % 1).toPrecision(9)) * 1e9;
    }
    results = '';
    // foreach unit
    for(i = 0; i < 6; i++){
        spot = i < 3 ? 0 : 1; // grabbing first or second spot in source array
        sourceAtStep = source[spot];
        if (i !== 3 && i !== 0) {
            sourceAtStep = sourceAtStep % convert[i - 1]; // trim off previous portions
        }
        if (i === 2) {
            sourceAtStep += source[1] / 1e9; // get partial seconds from other portion of the array
        }
        valAtStep = sourceAtStep / convert[i]; // val at this unit
        if (valAtStep >= 1) {
            if (verbose) {
                valAtStep = Math.floor(valAtStep); // deal in whole units, subsequent laps will get the decimal portion
            }
            if (!precise) {
                // don't fling too many decimals
                decimals = valAtStep >= 10 ? 0 : 2;
                strAtStep = valAtStep.toFixed(decimals);
            } else {
                strAtStep = valAtStep.toString();
            }
            if (strAtStep.indexOf('.') > -1 && strAtStep[strAtStep.length - 1] === '0') {
                strAtStep = strAtStep.replace(/\.?0+$/, ''); // remove trailing zeros
            }
            if (results) {
                results += ' '; // append space if we have a previous value
            }
            results += strAtStep; // append the value
            // append units
            if (verbose) {
                results += ' ' + verboseDesc[i];
                if (strAtStep !== '1') {
                    results += 's';
                }
            } else {
                results += ' ' + minimalDesc[i];
            }
            if (!verbose) {
                break; // verbose gets as many groups as necessary, the rest get only one
            }
        }
    }
    return results;
};

var mutexify = mutexify_1;
var hrtime = browserProcessHrtime;
var prettyHrtime = prettyHrtime$1;
var path = require$$3;
var lock = mutexify();
var one = false;
var runs = 0;
var total = [
    0,
    0
];
var nanobench = commonjsGlobal.__NANOBENCH__ ? commonjsRequire(commonjsGlobal.__NANOBENCH__) : benchmark;
benchmark.only = function(name, fn) {
    if (one) throw new Error('Only a single "only" benchmark can be specified');
    one = true;
    benchmark(name, fn, true);
};
benchmark.skip = function(name, fn) {};
function rawTime(hr) {
    return '(' + hr[0] + ' s + ' + hr[1] + ' ns)';
}
function benchmark(name, fn, only) {
    browser$1.nextTick(function() {
        if (one && !only) return;
        if (runs === 0) {
            console.log('NANOBENCH version 2\n> ' + command() + '\n');
        }
        runs++;
        lock(function(release) {
            console.log('# ' + name);
            var b = {};
            var begin = hrtime();
            b.start = function() {
                begin = hrtime();
            };
            b.error = function(err) {
                console.log('fail ' + err.message + '\n');
                release();
            };
            b.log = function(msg) {
                console.log('# ' + msg);
            };
            b.end = function(msg) {
                if (msg) b.log(msg);
                var time = hrtime(begin);
                total[0] += time[0];
                total[1] += time[1];
                while(total[1] >= 1e9){
                    total[1] -= 1e9;
                    total[0]++;
                }
                console.log('ok ~' + prettyHrtime(time) + ' ' + rawTime(time) + '\n');
                release();
            };
            fn(b);
        });
    });
}
function command() {
    var argv = browser$1.argv.slice(0);
    if (argv[0] === '/usr/local/bin/node') argv[0] = 'node';
    if (argv[1] === path.join(__dirname$1, 'run.js')) {
        argv.shift();
        argv[0] = 'nanobench';
    }
    argv = argv.map(function(name) {
        var cwd = browser$1.cwd() + path.sep;
        return name.indexOf(cwd) === 0 ? name.slice(cwd.length) : name;
    });
    return argv.join(' ');
}
var index = /*@__PURE__*/ getDefaultExportFromCjs(nanobench);

export { index as default };
