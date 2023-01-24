
function init() {
  // delete planes when more than 3 appear on the screen
  function deletePlanes() {
    const container = document.getElementById('svg-container')
    const planes = document.getElementsByClassName('plane')
    if (planes.length > 3) {
      console.log('going in')
      for (let i = 0; i < planes.length; i++) {
        container.removeChild(container.children[0])
      }
    }
  }

  // add new plane at mouse click location
  function addPlane(event) {
    // variable for svg that contains all other svgs
    const container = document.getElementById('svg-container')
    // create plane at mouseclick location
    const x = event.x
    const y = event.y
    const newPlane = document.createElement('img')
    newPlane.setAttribute('src', 'images/paper-plane-svgrepo-com.svg')
    newPlane.setAttribute('position', 'absolute')

    newPlane.style.position = 'absolute'
    newPlane.style.top = y.toString() + 'px'
    newPlane.style.left = x.toString() + 'px'
    newPlane.style.width = '2rem'
    newPlane.style.height = '2rem'
    newPlane.style.zIndex = '5'

    newPlane.classList.add('plane')
    container.appendChild(newPlane)
    deletePlanes()
  }

  // document.addEventListener('click', addPlane)
  
}