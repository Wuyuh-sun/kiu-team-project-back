/**
 * jQuery Custom Plugin
 */
(function () {
  
  var API_URL =  '';
  
  /**
   * @this jQueryElement
   */
  $.prototype.log = function () {
    console.log(this);
  };

  /**
   * @this jQUery
   */
  $.log = function () {
    console.log(this);
  };

  /**
   * HTTP 통신 API
   * 
   */
  $.httpSend = function (options) {
    var _options = {
      method: options.method || "POST",
      url: API_URL + options.url,
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      data: JSON.stringify(options.data || {}),
      complete: function (...args) {
        // 요청이 완료되었을떄
        if(typeof options.complete === 'function') {
          options.complete(...args);
        }
      },
      error: function (...args) {
        alert(JSON.stringify(args));
        // 요청 실패시
        if(typeof options.error === 'function') {
          options.error(...args);
        }
      },
      success: function (...args) {
        if(typeof options.success === 'function') {
          options.success(...args);
        }
      }
    }
    $.ajax(_options);
  };
})();