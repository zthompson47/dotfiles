// Allow Firefox to load <profile>/chrome/userChrome.js
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Turn off WebRTC for secure VPN: https://mullvad.net/en/help/webrtc/
user_pref("media.peerconnection.enabled", false);

/* Tune up smooth-scrolling
 * https://www.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/
*/
user_pref("general.smoothScroll.mouseWheel", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
user_pref("general.smoothScroll.pixels.durationMaxMS", 400);
user_pref("general.smoothScroll.pixels.durationMinMS", 100);
user_pref("general.smoothScroll.stopDecelerationWeighting", 0.8);
user_pref("mousewheel.acceleration.factor", 8);
user_pref("mousewheel.acceleration.start", 2);
user_pref("mousewheel.min_line_scroll_amount", 2);

/* MS Edge smooth scrolling
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
*/

/* MS Edge smooth scrolling (not using msdPhysics)
user_pref("general.smoothScroll.currentVelocityWeighting", 0.05);
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 450);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 250);
user_pref("general.smoothScroll.other.durationMaxMS", 400);
user_pref("general.smoothScroll.other.durationMinMS", 400);
user_pref("general.smoothScroll.pages.durationMaxMS", 300);
user_pref("general.smoothScroll.pages.durationMinMS", 300);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 200);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 450);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
*/

/* Chrome smooth scrolling
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
*/
