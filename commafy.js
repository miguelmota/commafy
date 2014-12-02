(function(){

  function commafy(n) {
    if (!n) { return n; }
    var parts = n.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = commafy;
  } else {
    window.commafy = commafy;
  }

})();
