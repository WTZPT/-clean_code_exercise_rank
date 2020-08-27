const {
  gt8,
  gt10,
  gt12,
  gt14,
  gt18
} = require('./checkLength')

function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
      'china',
      'east-indies',
    ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function isChina(zone) {
  return zone === 'china' ? true : false;
}

function isEastIndies(zone) {
  return zone === 'east-indies' ? true : false;
}

function isAndHasChina(len) {
  let result = 3;
  result += gt10(len) ? 1 : 0;
  result += gt12(len) ? 1 : 0;
  result -= gt18(len) ? 1 : 0;
  return result;
}

function notIsOrNotHasChina(historyLen, voyageLen) {
  let result = 0;
  result += gt8(historyLen) ? 1 : 0;
  result -= gt14(voyageLen) ? 1 : 0;
  return result;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  result += isChina(voyage.zone) ? 1 : 0;
  result += isEastIndies(voyage.zone) ? 1 : 0;
  result += isChina(voyage.zone) && hasChina(history) ?
    isAndHasChina(history.length) : notIsOrNotHasChina(history.length, voyage.length);
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

module.exports = {
  rating
};