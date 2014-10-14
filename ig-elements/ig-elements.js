(function () {
    "use strict";
	var igControls = [
        {
            name: "ig-rating", // Web component name
            widgetName: "igRating",
            html: "", // default HTML/ Main element must have id 'igElement'. If ommitted a div is used
            defaults: {} // default options. May be ommitted
        }
    ],
        camelCaseName = function (name) {
            if (!name || typeof name !== "string") {
                return name;
            }
            var n = name.split('-');
            for (var i = 1; i < n.length; i++) {
                var c = n[i].charAt(0);
                if(c >= 'a' && c <= 'z') {
                    n[i] = String.fromCharCode(c.charCodeAt(0) - 32) + n[i].substring(1);
                }
            }
            return n.join('');
        };
    
    for (var i = 0; i < igControls.length; i++) {
        var el = document.createElement('div');
        var html = igControls[i].html ? igControls[i].html : "<div id='igElement'></div>";
        el.innerHTML = '\
            <polymer-element name="' + igControls[i].name + '">\
                <template>\
                    <link rel="stylesheet" href="igniteui/css/structure/infragistics.css">\
                    <link rel="stylesheet" href="igniteui/css/themes/infragistics/infragistics.theme.css">\
                    ' + html + '\
                </template>\
            </polymer-element>';
        document.body.appendChild(el);
        
        Polymer(igControls[i].name, {
            widgetName: igControls[i].widgetName,
            domReady: function() {
                var options = {};
                for(var i = 0; i < this.attributes.length; i++) {
                    var attr = this.attributes[i];
                    options[camelCaseName(attr.nodeName)] = attr.value;
                }
                $(this.$.igElement)[this.widgetName](options);
            }
        });
    }
})();