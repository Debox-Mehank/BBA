export const APP_GOOGLE_LINK =
  "https://play.google.com/store/apps/details?id=com.bawarchiatlanta.bawarchiatlanta&referrer=utm_source%3Dwebsite-android-btn%26utm_medium%3Dwebsite-android-btn%26utm_content%3Dandroid-app-download-link%26utm_campaign%3Dwebsite-android-btn";
export const APP_APPLE_LINK =
  "https://apps.apple.com/us/app/bawarchi-biryanis-atlanta/id6503363878?utm_source=website-ios-btn&utm_medium=website-ios-btn&utm_campaign=website-ios-download-btn&utm_id=website-ios-btn&utm_content=ios-app-download-link";

export const getMobileOSBasedAppLink = (nv) => {
  if (nv) {
    const isMobile = {
      Android: function () {
        return /Android/i.test(nv.userAgent) | /win/i.test(nv.userAgent);
      },

      iOS: function () {
        return (
          /iPhone|iPad|iPod/i.test(nv.userAgent) | (nv.platform === "MacIntel")
        );
      },

      Windows: function () {
        return /IEMobile/i.test(nv.userAgent);
      },
    };

    if (isMobile.Android()) {
      return APP_GOOGLE_LINK;
    } else if (isMobile.iOS()) {
      return APP_APPLE_LINK;
    } else {
      return APP_GOOGLE_LINK;
    }
  } else {
    return "";
  }
};
