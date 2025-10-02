import ClientSearch from './ClientSearch';

interface SearchPageProps {
    searchParams: { q: string }
}

const fetchSearchEvents = async (query: string) => {
    const res = await fetch(`https://api.vasespravy.sk/events/search?q=${query}`, {
        method: 'GET',
        headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.BEARER_AUTH_TOKEN}`
		},
        cache: 'no-store',
    });
    if (!res.ok) {
        console.log('no data');
        return null
    };
    return res.json();
}

const SearchPage = async (props: SearchPageProps) => {
    const queryPreload = await props.searchParams;
    const query = await queryPreload.q;
    const data = await fetchSearchEvents(query);
    if (data) return <ClientSearch events={data} searchQuery={query} />;
    else return <ClientSearch noResults={true} searchQuery={query} />;
}

export default SearchPage;