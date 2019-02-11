import WidthAnchor from './WidthAnchor'
import assert from 'assert'

global.window = {
  requestAnimationFrame(callback) {
    callback()
    return 0
  }
}

it("tests WidthAnchor", function (done) {
  let ca = new WidthAnchor()

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
    reference: () => ({
        x: () => 0,
        y: () => 0,
        getClientRect: () => ({
            x: 0,
            y: 0,
            width: 200,
            height: 50
        })
    }),
    padding: 30,
    change: (width) => {

      assert.equal(width, 260)
      done()
    }
  }


})