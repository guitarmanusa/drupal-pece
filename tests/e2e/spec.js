
// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc.
// It depends on the team's work agreement.
describe('PECE home page', function() {
  // This is the pre-condition step of each test.
  beforeEach(function() {
    // In the get method of the sample page you can have two behaviors:
    // If no url is set you will go to the base url defined in the conf.js file.
    // Or you can set a relative url as a string, without slash. E.g.: 'user'.
    SamplePage.get();
  });

  it('uses \'PECE Scholarly Lite\' theme', function() {
    // Set the expected theme as a string to check that the correct drupal theme is been used.
    SamplePage.checkDrupalTheme('pece_scholarly_lite');
  });
});

require('./specs/registration.spec.js');
require('./specs/artifacts/artifact.fieldnote.spec.js');
require('./specs/license.spec.js');
require('./specs/user.profile.spec.js');
require('./specs/user.access.spec.js');
require('./specs/artifacts/artifact.image.spec.js');
require('./specs/artifacts/artifact.pdf.spec.js');
require('./specs/artifacts/artifact.video.spec.js');
require('./specs/artifacts/artifact.audio.spec.js');
require('./specs/artifacts/artifact.website.spec.js');
require('./specs/artifacts/artifact.bundle.spec.js');
require('./specs/annotation.spec.js');
require('./specs/memo.spec.js');
require('./specs/group.spec.js');
