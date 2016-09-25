(function() {

    var ambedo = {};
    ambedo.stateStore = {};
    ambedo.store = function(record) {
        function checkStateNameExist(stateName) {
            return stateName === record.name;
        }
        // check stateStore to see if new record name exist.
        var recordNameExist = !!Object.keys(ambedo.stateStore).filter(checkStateNameExist).length;
        if (recordNameExist) {
            throw new Error(record.name + ' is already in the stateStore.');
        } else {
            // Add record to the stateStore.
            ambedo.stateStore[record.name] = record.state;
        }
    };

    ambedo.toggle = function(stateName, toggleStateStr) {
        var shouldToggle = toggleStateStr.indexOf(':') >= 0;
        var toggleStates;
      
        if (shouldToggle) {
            toggleStates = toggleStateStr.split(':');
        } else {
            toggleStates = [toggleStateStr];
        }

        var recordStates = ambedo.stateStore[stateName];

        /*
          function getCurrentState(states) {
            for (var state in states) {
              if (states[state]) {
                return state;
              }
            }
          }

          var currentState = getCurrentState(recordStates);
        */

        function setState(states, newState) {
            for (var state in states) {
                if (state === newState) {
                    states[state] = true;
                } else {
                    states[state] = false;
                }
            }
        }

        function getState(states) {
            for (var state in states) {
                if (states[state]) {
                    return state;
                }
            }
        }

        // Toggle or set new state.
        if (ambedo.toggle.prototype.state && shouldToggle) {
            setState(recordStates, toggleStates[1]);
            ambedo.toggle.prototype.state = false;
        } else {
            setState(recordStates, toggleStates[0]);
            if (shouldToggle) {
                ambedo.toggle.prototype.state = true;
            }else{
                ambedo.toggle.prototype.state = false;
            }
        }
        return getState(recordStates);
    };

    // Add to window.
    window.ambedo = ambedo;
}());
