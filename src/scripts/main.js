var bespoke = require('bespoke'),
    bullets = require('./bespoke-bullets-patched'),
    classes = require('bespoke-classes'),
    cursor = require('bespoke-cursor'),
    ensuite = require('./ensuite-protocol-bespoke'),
    extern = require('bespoke-extern'),
    hash = require('bespoke-hash'),
    multimedia = require('bespoke-multimedia'),
    nav = require('bespoke-nav'),
    overview = require('bespoke-overview'),
    scale = require('bespoke-scale')

bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  scale('transform'),
  nav(),
  overview(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  multimedia(),
  cursor(3000),
  // QUESTION should we move activation logic into plugin?
  (/(^\?|&)ensuite(?=$|&)/.test(window.location.search) ? ensuite() : () => {}),
  extern(bespoke)
]);
