module.exports = {
  someSidebar: {
    Overview: [
      'aracred', 
      'aragon',
      'sourcecred',
      'lineage'
    ], 
    Tokeneconomics: [
      'designGoals',
      'systemOverview',
      'governanceMVP',
      {
        type: 'category',
        label: 'Token MVP',
        items: [
          'tokenOverview',
          'tokenSupply',
        ],
      },
      {
        type: 'category',
        label: 'Token (V2)',
        items: [
          'tokenSupplyV2',
          'valueMeasurement',
          'tokenMinting',
          'tokenAllocation'
        ],
      },
      'aracredModeling'
    ],
    Deployment: [
      'manualDeployment',
      'userGuide',
      'faq',
      'communityResources'
    ],
    Contributing: [
      'contributing',
      'specialThanks'
    ],
  },
};
