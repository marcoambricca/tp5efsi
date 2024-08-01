export default async function fetchFlags(setFlags) {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        const data = await response.json();
        setFlags(data.data);
      } catch (error) {
        console.error('Error fetching the flags:', error);
      }
}