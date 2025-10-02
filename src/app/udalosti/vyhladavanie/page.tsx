import ClientSearch from './ClientSearch';

interface SearchPageProps {
    searchParams: Promise<{ q?: string }>;
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
    const { q = '' } = await props.searchParams;
    const data = await fetchSearchEvents(q);
    if (data) return <ClientSearch events={data} searchQuery={q} />;
    else return <ClientSearch noResults searchQuery={q} />;
}

export default SearchPage;