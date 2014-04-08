Package.describe({
  summary: "A library for cross-browser media streaming, screen sharing, data/file sharing, renegotiation, and much more. An all-in-one wrapper for RTCWeb API packaged for Meteor!"
});

Package.on_use(function (api, where) {
  api.add_files('lib/RTCMultiConnection.js', 'client');
});

