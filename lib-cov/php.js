/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['php.js']) {
  _$jscoverage['php.js'] = [];
  _$jscoverage['php.js'][1] = 0;
  _$jscoverage['php.js'][2] = 0;
  _$jscoverage['php.js'][3] = 0;
  _$jscoverage['php.js'][5] = 0;
  _$jscoverage['php.js'][6] = 0;
  _$jscoverage['php.js'][7] = 0;
  _$jscoverage['php.js'][9] = 0;
  _$jscoverage['php.js'][12] = 0;
  _$jscoverage['php.js'][13] = 0;
  _$jscoverage['php.js'][15] = 0;
  _$jscoverage['php.js'][16] = 0;
  _$jscoverage['php.js'][17] = 0;
  _$jscoverage['php.js'][19] = 0;
  _$jscoverage['php.js'][22] = 0;
  _$jscoverage['php.js'][23] = 0;
  _$jscoverage['php.js'][26] = 0;
  _$jscoverage['php.js'][27] = 0;
  _$jscoverage['php.js'][29] = 0;
  _$jscoverage['php.js'][30] = 0;
  _$jscoverage['php.js'][33] = 0;
  _$jscoverage['php.js'][34] = 0;
  _$jscoverage['php.js'][36] = 0;
  _$jscoverage['php.js'][37] = 0;
  _$jscoverage['php.js'][39] = 0;
  _$jscoverage['php.js'][40] = 0;
  _$jscoverage['php.js'][42] = 0;
  _$jscoverage['php.js'][43] = 0;
  _$jscoverage['php.js'][45] = 0;
  _$jscoverage['php.js'][48] = 0;
  _$jscoverage['php.js'][49] = 0;
  _$jscoverage['php.js'][51] = 0;
  _$jscoverage['php.js'][52] = 0;
  _$jscoverage['php.js'][54] = 0;
  _$jscoverage['php.js'][55] = 0;
  _$jscoverage['php.js'][57] = 0;
  _$jscoverage['php.js'][60] = 0;
}
_$jscoverage['php.js'].source = ["\"use strict\";","var S = require('./index');","var phpUtils = {","  exportCode: function(v, ifEmptyArray) {","    var content = this._exportCode(v, true);","    if (ifEmptyArray !== undefined &amp;&amp; (content === 'false' || content === 'array()')) {","      return ifEmptyArray;","    }","    return content;","  },","  _exportCode: function(v, start) {","    if (v === null || !S.isObject(v)) {","      return phpUtils._exportCodeVar(v);","    }","    var content = 'array(';","    if (S.isArray(v)) {","      for (var i = 0,","          l = v.length; i &lt; l; i++) {","        content += this._exportCode(v[i]) + ',';","      }","    } else {","      for (var k in v) {","        content += this._exportCodeVar(k) + '=&gt;' + this._exportCode(v[k]) + ',';","      }","    }","    if (content) {","      content = content.replace(/,+$/, '');","    }","    content += start ? ')' : '),';","    return content;","  },","  _exportCodeVar: function(v) {","    if (S.isString(v)) {","      return phpUtils.exportString(v);","    }","    if (v === undefined || v === null) {","      return 'null';","    }","    if (v === true) {","      return 'true';","    }","    if (v === false) {","      return 'false';","    }","    return v;","  },","  exportString: function(str) {","    if (!str.contains(\"'\")) {","      return \"'\" + str + \"'\";","    }","    if (!str.contains('\"')) {","      return '\"' + str.replace(/\\$/g, '$') + '\"';","    }","    if (str.contains(\"\\n\") || str.contains(\"\\r\") || str.contains(\"\\t\") || str.contains(\"\\v\") || str.contains(\"\\f\")) {","      return '\"' + str.replace(/\\\\/g, '\\\\\\\\').replace(/\\n/g, '\\n').replace(/\\r/g, '\\r').replace(/\\t/g, '\\t').replace(/\\v/g, '\\v').replace(/\\f/g, '\\f').replace(/\\$/, '$') + '\"';","    }","    return \"'\".str.replace(/\\\\\\'/g, '\\'').replace(/\\\\\\\\\\'/, '\\\\\\'') + \"'\";","  }","};","module.exports = phpUtils;","","//# sourceMappingURL=php.js.map"];
_$jscoverage['php.js'][1]++;
"use strict";
_$jscoverage['php.js'][2]++;
var S = require("./index");
_$jscoverage['php.js'][3]++;
var phpUtils = {exportCode: (function (v, ifEmptyArray) {
  _$jscoverage['php.js'][5]++;
  var content = this._exportCode(v, true);
  _$jscoverage['php.js'][6]++;
  if (((ifEmptyArray !== undefined) && ((content === "false") || (content === "array()")))) {
    _$jscoverage['php.js'][7]++;
    return ifEmptyArray;
  }
  _$jscoverage['php.js'][9]++;
  return content;
}), _exportCode: (function (v, start) {
  _$jscoverage['php.js'][12]++;
  if (((v === null) || (! S.isObject(v)))) {
    _$jscoverage['php.js'][13]++;
    return phpUtils._exportCodeVar(v);
  }
  _$jscoverage['php.js'][15]++;
  var content = "array(";
  _$jscoverage['php.js'][16]++;
  if (S.isArray(v)) {
    _$jscoverage['php.js'][17]++;
    for (var i = 0, l = v.length; (i < l); (i++)) {
      _$jscoverage['php.js'][19]++;
      content += (this._exportCode(v[i]) + ",");
}
  }
  else {
    _$jscoverage['php.js'][22]++;
    for (var k in v) {
      _$jscoverage['php.js'][23]++;
      content += (this._exportCodeVar(k) + "=>" + this._exportCode(v[k]) + ",");
}
  }
  _$jscoverage['php.js'][26]++;
  if (content) {
    _$jscoverage['php.js'][27]++;
    content = content.replace(/,+$/, "");
  }
  _$jscoverage['php.js'][29]++;
  content += (start? ")": "),");
  _$jscoverage['php.js'][30]++;
  return content;
}), _exportCodeVar: (function (v) {
  _$jscoverage['php.js'][33]++;
  if (S.isString(v)) {
    _$jscoverage['php.js'][34]++;
    return phpUtils.exportString(v);
  }
  _$jscoverage['php.js'][36]++;
  if (((v === undefined) || (v === null))) {
    _$jscoverage['php.js'][37]++;
    return "null";
  }
  _$jscoverage['php.js'][39]++;
  if ((v === true)) {
    _$jscoverage['php.js'][40]++;
    return "true";
  }
  _$jscoverage['php.js'][42]++;
  if ((v === false)) {
    _$jscoverage['php.js'][43]++;
    return "false";
  }
  _$jscoverage['php.js'][45]++;
  return v;
}), exportString: (function (str) {
  _$jscoverage['php.js'][48]++;
  if ((! str.contains("'"))) {
    _$jscoverage['php.js'][49]++;
    return ("'" + str + "'");
  }
  _$jscoverage['php.js'][51]++;
  if ((! str.contains("\""))) {
    _$jscoverage['php.js'][52]++;
    return ("\"" + str.replace(/\$/g, "$") + "\"");
  }
  _$jscoverage['php.js'][54]++;
  if ((str.contains("\n") || str.contains("\r") || str.contains("\t") || str.contains("\u000b") || str.contains("\f"))) {
    _$jscoverage['php.js'][55]++;
    return ("\"" + str.replace(/\\/g, "\\\\").replace(/\n/g, "\n").replace(/\r/g, "\r").replace(/\t/g, "\t").replace(/\v/g, "\u000b").replace(/\f/g, "\f").replace(/\$/, "$") + "\"");
  }
  _$jscoverage['php.js'][57]++;
  return ("'".str.replace(/\\\'/g, "'").replace(/\\\\\'/, "\\'") + "'");
})};
_$jscoverage['php.js'][60]++;
module.exports = phpUtils;
