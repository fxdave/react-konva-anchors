const Main = require('./main.js')
import assert from 'assert'

it("should import the CenterAnchor", () => {
    console.log("ez van :" ,Main);
    
    assert.ok(Main.CenterAnchor !== undefined)
})