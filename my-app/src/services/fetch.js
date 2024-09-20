export const getFetch = async () => {
    const res = await fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => console.error('Error fetching data:', error));
    return res;
}