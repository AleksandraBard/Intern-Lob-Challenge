const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy

  if (rightCodeisEntered(lockState.wheels)) {
    lockState.locked = false
    redirect('aleksandra-bardymova')
  }
}

function rightCodeisEntered(enteredCode) {
  let i = 0
  while (i < enteredCode.length) {
    if (enteredCode[i] !== SECRET_COMBO[i]) return false
    i++
  }
  return true
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
