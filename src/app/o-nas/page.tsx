import ClientAbout from './ClientAbout';

const AboutPage = async () => {

    const data = await fetch(
        'https://api.vasespravy.sk/stats',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store',
        }
    ).then(async (res) => {
        if (res.status === 404) return null;
		if (!res.ok) throw new Error(`Upstream error: ${res.status}`);
		return res.json();
    });

    return <ClientAbout data={data} />;
}

export default AboutPage;