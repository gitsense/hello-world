// This function will get called if you use this widget's data enpoint.  For example, if 
// DevBoard is running on localhost port 3357, the data end point for this widget would be
//
//     http://localhost:3357/api/v0/widgets/hello-world/backend-only/data
function getData(req) {
    return `Backend only widget says "Hello, World!" `;
}

module.exports = { getData };
