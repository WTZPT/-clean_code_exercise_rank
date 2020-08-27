const rankTest = require('ava');
const {
  rating
} = require('../src/rank/rank')
rankTest('case1', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const history = [{
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const expectRating = 'B'
  const actRating = rating(voyage, history);
  t.is(expectRating, actRating)
});

rankTest('case2', t => {
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [{
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const expectRating = 'A'
  const actRating = rating(voyage, history);
  t.is(expectRating, actRating)
});

rankTest('case3', t => {
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [{
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 8,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 8,
    },
  ];
  const expectRating = 'B'
  const actRating = rating(voyage, history);
  t.is(expectRating, actRating)
});

rankTest('case4', t => {
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const history = [{
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const expectRating = 'B'
  const actRating = rating(voyage, history);
  t.is(expectRating, actRating)
});