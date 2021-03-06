# ambedo
Minimal Immutable Finite-state Machine.

## Example: 
https://jsfiddle.net/julienetienne/rqc7byLa/4/
### HTML to demo
```
<button>ON/ off</button>
<button>ON</button>
<button>off</button>
<!-- The light Switch -->
<div id="light"></div>
```
### CSS to demo
```
#light {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: white;
  border: 1px solid black;
}
```

Add a record:
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
You can have finite states, toggle is currently limited to two states, this is an extremely primitve plugin that can easliy be imporved,
can be amended for node use.
