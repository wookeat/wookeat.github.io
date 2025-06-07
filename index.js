function highlightText(ele, hover, target) {
  const elements = document.getElementsByClassName(target);
  ele.style.cursor = hover ? 'pointer' : '';

  Array.from(elements).forEach(element => {
    element.style.color = hover ? 'crimson' : '';
    element.style.fontWeight = hover ? 'bold' : '';
  });
}