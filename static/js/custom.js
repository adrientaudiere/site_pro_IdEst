/*************************************************
 *  Academic
 *  https://github.com/gcushen/hugo-academic
 *
 *  In-built Fuse based search algorithm.
 **************************************************/

/* ---------------------------------------------------------------------------
* Configuration.
* --------------------------------------------------------------------------- */

// Configure Fuse.
let fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    tokenize: true,
    threshold: 0.0,
    location: 10,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      {name:'title', weight:0.99}, /* 1.0 doesn't work o_O */
      {name:'summary', weight:0.6},
      {name:'authors', weight:0.5},
      {name:'content', weight:0.2},
      {name:'tags', weight:0.5},
      {name:'categories', weight:0.5}
    ]
  };
  
  // Configure summary.
  let summaryLength = 30;
  
