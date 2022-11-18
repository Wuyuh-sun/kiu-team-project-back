
(function(window, undefined) {

var 
thisFileName = "mcore.extends.js",

// TODO : 자동으로 script 태그를 생성 불러와줌
importFiles = [
  'jquery-3.6.1.min.js',
  'bootstrap.min.js',
  '../jquery.plugin.js'
];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName) );

})(window);