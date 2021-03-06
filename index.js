var Matomo = require('react-native').NativeModules.Matomo;
module.exports = {
  initTracker: Matomo.initTracker,
  setUserId: function(userId) {
    if (userId !== null && userId !== userId !== undefined) {
      Matomo.setUserId(userId + '');
    }
  },
  trackAppDownload: Matomo.trackAppDownload,
  trackView: function(view, url) {
    Matomo.trackView(
      view.constructor === Array ? view : [view],
      url
    );
  },
  trackGoal: function(goalId, revenue) {
    Matomo.trackGoal(goalId, {revenue});
  },
  trackEvent: function(category, action, name, value, url) {
    Matomo.trackEvent(category, action, {name, value, url});
  },
  trackCampaign: function(name, keyword) {
    Matomo.trackCampaign(name, keyword);
  },
  trackContentImpression: function(name, piece, target) {
    Matomo.trackContentImpression(name, {piece, target});
  },
  trackContentInteraction: function(name, interaction, piece, target) {
    Matomo.trackContentInteraction(name, {interaction, piece, target});
  },
  trackSearch: function(query, category, resultCount, url) {
    Matomo.trackSearch(query, {category, resultCount, url});
  }
};
