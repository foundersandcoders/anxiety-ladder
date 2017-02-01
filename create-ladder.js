const ladder = document.getElementById('ladder');

const showLadder = () => {
  ladder.className += ' opened';
  const folds = document.getElementsByClassName('fold');
  unfoldQ(folds,0);
};

const unfoldQ = (elem,inx) =>{
  if(inx != elem.length) {
    elem[inx].className += ' unfolded';
    inx = parseInt(inx)+1;
    setTimeout(() => {
      unfoldQ(elem,inx);
    }, 500);
  }
}

const addHandlersToElements = () => {
  const challenge = document.getElementsByClassName('challenge');
  for(var i = 1; i < navItems.length; i++) {
    ((i) => {
      challenge[i].addEventListener("submit", () => {
        e.preventDefault();
      });
    })(i);
  }
}

const addStep = document.getElementById('addStep');
addStep.addEventListener('click', () => {
  let step = `
        <label>Description:</label>
        <input class='challenge__description'/>
        <label>Fear rating:</label>
        <input type="range"  min="0" max="100" value="50"/>
        <button type="submit" class="save">Save</button>
      `
  let newStep = document.createElement('FORM');
  newStep.className = 'challenge fold';
  newStep.innerHTML = step;
  ladder.appendChild(newStep);
  setTimeout(() => {
    ladder.lastChild.className += ' unfolded';
  }, 100);


})

window.onload = showLadder, addHandlersToElements;
