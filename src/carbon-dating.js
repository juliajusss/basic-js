const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNumber = parseFloat(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== 'string' ||
    sampleActivity === undefined ||
    sampleActivity === null ||
    sampleActivity.length === 0 ||
    Number.isNaN(sampleActivityNumber) ||
    sampleActivityNumber <= 0 ||
    sampleActivityNumber >= 15) {
    return false;
  }
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);

  return t;
};
