const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
  //   mfUser:       "http://localhost:4201/remoteEntry.js",
  //   mfDashBoard:  "http://localhost:4202/remoteEntry.js",
  //   mfCompany:    "http://localhost:4203/remoteEntry.js",
  //   mfCatalog:    "http://localhost:4204/remoteEntry.js",
  //   mfBooking:    "http://localhost:4205/remoteEntry.js",
  //   mfReport:     "http://localhost:4206/remoteEntry.js",
  // },
  remotes: {
    mfUser:       "https://canchapp.github.io/canchapp/user/remoteEntry.js",
    mfDashBoard:  "https://canchapp.github.io/canchapp/dashboard/remoteEntry.js",
    mfCompany:    "https://canchapp.github.io/canchapp/company/remoteEntry.js",
    mfCatalog:    "https://canchapp.github.io/canchapp/catalog/remoteEntry.js",
    mfBooking:    "https://canchapp.github.io/canchapp/booking/remoteEntry.js",
    mfReport:     "https://canchapp.github.io/canchapp/report/remoteEntry.js",
  },  

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }

});
