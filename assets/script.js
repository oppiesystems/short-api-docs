function main() {
  setTimeout(removeRedocLink, 250);
}


main();


/**
 * Removes the Redocly link from left navigation bar.
 *
 */
function removeRedocLink() {
  var ele = document.querySelector('[href="https://github.com/Redocly/redoc"]');
  if (ele) {
    ele.style.display = 'none';
  }
}