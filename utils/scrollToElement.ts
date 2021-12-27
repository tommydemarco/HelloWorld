const scrollToElement = (cssSelector: string): void => {
  const targetElement = document.querySelector(cssSelector)
  if (!targetElement) return;
  targetElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

export default scrollToElement;