(function () {
  const profiles = {
    balanced: {
      id: 'balanced',
      stripThreshold: 60,
      topThreshold: 80,
      stripCount: 7,
      description: 'Default paper-tearing feel.'
    },
    soft: {
      id: 'soft',
      stripThreshold: 52,
      topThreshold: 72,
      stripCount: 7,
      description: 'Easier pull and lighter interactions.'
    },
    tough: {
      id: 'tough',
      stripThreshold: 74,
      topThreshold: 96,
      stripCount: 7,
      description: 'Harder pull for challenge mode.'
    }
  };

  function getDefaultProfile() {
    return profiles.balanced;
  }

  function getProfile(id) {
    return profiles[id] || profiles.balanced;
  }

  window.TearProfiles = { profiles, getDefaultProfile, getProfile };
})();
