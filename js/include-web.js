/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.*/
(function () {
    var r = new RegExp("(^|(.*?\\/))(include-web\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'),
        targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");

        var jQueryInclude = false;

        if (inArray(includes, 'jquery') && !jQueryInclude) {
            inputScript("../libs/jquery/jquery.3.2.1.min.js");
        }

        if (inArray(includes, 'bootstrap')) {
            inputScript("../libs/jquery/jquery.3.2.1.min.js");
            inputCSS("../libs/bootstrap/bootstrap.min.css");
            inputScript("../libs/bootstrap/bootstrap.min.js");
        }

        if (inArray(includes, 'template')) {
            inputScript("../libs/art-template/template-web.js");
        }

        if (inArray(includes, 'jquery.scrollto')) {
            inputScript("../libs/jquery/jquery.scrollTo.min.js");
        }
        if (inArray(includes, 'ace')) {
            inputScript("../libs/ace/ace.js");
        }

        if (inArray(includes, 'admin-lte')) {
            inputCSS("../libs/admin-lte/AdminLTE.min.css");
            inputCSS("../libs/admin-lte/skin-blue.min.css");
            inputCSS("../libs/font-awesome/css/font-awesome.min.css");
            inputScript("../libs/admin-lte/app.min.js");
        }
        if (inArray(includes, 'lazyload')) {
            inputScript("../libs/jquery/jquery.lazyload.min.js");
        }
        if (inArray(includes, 'i18n')) {
            inputScript("../libs/i18next/i18next.min.js");
            inputScript("../libs/jquery/jquery-i18next.min.js");
        }
    }

    load();

    window.version = "1.0";
})();