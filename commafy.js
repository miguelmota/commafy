(function(){

  function isNumeric(val) {
    if (typeof val === 'number' && !isNaN(val)) {
      return true;
    }

    val = (val||'').toString().trim();
    return val && !isNaN(val);
  }

  function commafy(val) {
    if (!isNumeric(val) || Math.abs(val) === Infinity) {
      return val;
    }

    var parts = val.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = commafy;
  } else {
    window.commafy = commafy;
  }

})();
