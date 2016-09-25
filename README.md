# ambedo
Minimal Finite-state Machine

# Example: 
https://jsfiddle.net/julienetienne/rqc7byLa/4/
### HTML
```
<button>ON/ off</button>
<button>ON</button>
<button>off</button>
<!-- The light Switch -->
<div id="light"></div>
```
### CSS
```
#light {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: white;
  border: 1px solid black;
}
```

First create the state store where all your states live:
```
var stateStore = {};
```
Then add a state:
```
ambedo.store({
  name: 'lights',
  state: {
    on: false,
    off: true,
    faulty: false
  }
});
```
Toggle Light:
```
onOff.addEventListener('click', function() {
  var lightSwitchState = ambedo.toggle('lights', 'on:off');
  if (lightSwitchState === 'on') {
    light.style.backgroundColor = 'yellow';
  } else {
    light.style.backgroundColor = 'white';
  }
}, false);
```
Turn light off:
```
off.addEventListener('click', function() {
  var lightSwitchState = ambedo.toggle('lights', 'off');
  if (lightSwitchState === 'off') {
    light.style.backgroundColor = 'white';
  }
}, false);
```
Turn light on:
```
on.addEventListener('click', function() {
  var lightSwitchState = ambedo.toggle('lights', 'on');
  if (lightSwitchState === 'on') {
    light.style.backgroundColor = 'yellow';
  }
}, false);
```
You can have finite states, toggle is currently limited, this is an extremely primitve plugin that can be easliy be imporved.
