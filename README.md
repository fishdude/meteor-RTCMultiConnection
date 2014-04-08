meteor-RTCMultiConnection
=========================

**Meteor package for RTCMultiConnection- a webRTC api wrapper for all your cross-browser media streaming needs!**

* Live demo's: https://www.webrtc-experiment.com/RTCMultiConnection/
* Source: https://github.com/muaz-khan/WebRTC-Experiment/tree/master/RTCMultiConnection


<h4>example usage:</h4>

```
mrt add RTCMultiConnection
```

<h6>js</h6>

```
var connection = new RTCMultiConnection();

    connection.session = {
        audio: true,
        video: true
    };

    connection.onstream = function(e) {
        document.body.appendChild(e.mediaElement);
    };

    connection.connect()


    Template.foo.events({
      'click #init': function () {
        this.disabled = true;
        connection.open();
        console.log("connection initiated");
      }
    });
```

<h6>html</h6>

```
<template name="foo">
 	<button id="init">Open New Connection</button>
</template>
```