import CenterAnchor from './CenterAnchor'
import assert from 'assert'

global.window = {
  requestAnimationFrame(callback) {
    callback()
    return 0
  }
}

it("tests CenterAnchor", function (done) {
  let ca = new CenterAnchor()

  ca.props = {
    element: () => ({
      x: () => 0,
      y: () => 0,
      getClientRect: () => ({
        x: 0,
        y: 0,
        width: 20,
        height: 20
      })
    }),
    change: (x,y) => {

      assert.equal(x, -10)
      assert.equal(y, -10)
      done()
    }
  }


})