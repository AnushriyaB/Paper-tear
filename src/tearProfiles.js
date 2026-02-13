(function () {
  const profiles = {
    balanced: {
      id: 'balanced',
      stripThreshold: 36,
      topThreshold: 50,
      stripCount: 7,
      description: 'Default paper-tearing feel.'
    },
    soft: {
      id: 'soft',
      stripThreshold: 28,
      topThreshold: 42,
      stripCount: 7,
      description: 'Easier pull and lighter interactions.'
    },
    tough: {
      id: 'tough',
      stripThreshold: 48,
      topThreshold: 62,
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
