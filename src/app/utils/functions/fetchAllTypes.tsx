

export default async function fetchAllTypes() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching types:', error);
        return [];
    }
};


