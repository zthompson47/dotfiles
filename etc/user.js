// Tune up smooth-scrolling
//user_pref("general.smoothScroll.lines.durationMaxMS", 125);
//user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.lines.durationMaxMS", 200);
user_pref("general.smoothScroll.lines.durationMinMS", 100);

user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);

// Allow Firefox to load chrome/userChrome.js
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Turn off WebRTC for secure VPN: https://mullvad.net/en/help/webrtc/
user_pref("media.peerconnection.enabled", false);
