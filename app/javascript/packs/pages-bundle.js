import ReactOnRails from 'react-on-rails';

import Pages from '../bundles/HelloWorld/components/Pages';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Pages,
});
