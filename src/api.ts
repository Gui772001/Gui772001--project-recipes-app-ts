export async function getCategories() {
  const urlCategories = 'https://swapi.dev/api/planets';
  const response = await fetch(urlCategories);
  const data = await response.json();
  return data;
}
