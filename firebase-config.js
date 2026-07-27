// ===================================================================
// Firebase configuration — cross-device sync (OPTIONAL)
//
// The app works perfectly without this. Leave it as-is and sync simply
// stays switched off; everything else behaves normally.
//
// TO ENABLE SYNC:  follow DEPLOY.md, Part C. In short —
//   1. Create a Firebase project at https://console.firebase.google.com
//   2. Build → Firestore Database → Create database
//   3. Publish the security rules given in DEPLOY.md Part C  ← don't skip this
//   4. Project settings ⚙ → Your apps → Web (</>) → copy the config object
//   5. Paste it below, replacing `null`, and remove the `//` from the lines
//
// These keys are SAFE TO PUBLISH. Firebase web API keys are public by
// design — they identify the project, they don't grant access. Access is
// controlled entirely by the Firestore security rules from step 3, which
// is why publishing those rules is not optional.
// ===================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA7DjxfQwVrCOP18jrIYxrKHLu4oSrk5GE",
  authDomain: "mrcs-atlas.firebaseapp.com",
  projectId: "mrcs-atlas",
  storageBucket: "mrcs-atlas.firebasestorage.app",
  messagingSenderId: "1030729636361",
  appId: "1:1030729636361:web:16ae15fb291c96783ff6d8"
};
