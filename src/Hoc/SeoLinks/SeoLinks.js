export const SeoLinks = (link) => {
  return decodeURIComponent(link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ", "-"));
}
