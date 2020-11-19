module.exports = (html) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>test appf</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
        <div id="shipping">${html}</div>
        <script src="/sdc-vectrex-chris-shipping-dev.js"></script>
    </body>
    </html>
`;
