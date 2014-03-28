var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs/v2');

exports.getTechs = function() {

    return {
        'bemdecl.js'           : 'v2/bemdecl.js',
        'deps.js'              : 'v2/deps.js',
        'less'                 : 'v2/less',
        'js+bemhtml'           : join(BEMBL_TECHS, 'js+bemhtml.js'),
        'js'                   : 'v2/js-i',
        'bemhtml'              : join(BEMBL_TECHS, 'bemhtml.js')
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];
