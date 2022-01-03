export const scrollToElement = (cssSelector: string): void => {
  const targetElement = document.querySelector(cssSelector)
  if (!targetElement) return;
  targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}