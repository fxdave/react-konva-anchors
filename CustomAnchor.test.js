import CustomAnchor from './CustomAnchor'
import assert from 'assert'

global.window = {
  requestAnimationFrame(callback) {
    callback()
    return 0
  }
}

it("tests CustomAnchor", function (done) {
  let ca = new CustomAnchor()

  ca.props = {
    reference: () => ({
      x: () => 0,
      y: () => 0,
      getClientRect: () => ({
        x: 0,
        y: 0,
        width: 100,
        height: 100
      })
    }),
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
    result: (ref) => ({ x: ref.getClientRect().width, y: 0 }),
    isUpdateNeeded: (el, res) => el.x() !== res.x || el.y() !== res.y,
    change: (res) => {

      assert.equal(res.x, 100)
      assert.equal(res.y, 0)
      done()
    }
  }


})