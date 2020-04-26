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
      'tokenOverview',
      {
        type: 'category',
        label: 'Token Supply',
        items: [
          'tokenSupply',
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
