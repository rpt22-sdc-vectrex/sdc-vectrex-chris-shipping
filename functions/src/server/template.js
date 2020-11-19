"use strict";

module.exports = function (html) {
  return "\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>test appf</title>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\" />\n    </head>\n    <body>\n        <div id=\"shipping\">".concat(html, "</div>\n        <script src=\"/sdc-vectrex-chris-shipping-dev.js\"></script>\n    </body>\n    </html>\n");
};