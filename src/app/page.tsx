import ClientHome, { ClientHomeProps } from "@/app/ClientHome";

const Page = async (amount: number, startIndex: number) => {
    const revalidate = 60;
    const processed = false;
    // TODO: Replace with amount and startIndex when pagination is implemented
    const data = await fetch(`https://api.vasespravy.sk/events/all?processed=${processed}&amount=4&startIndex=0`, 
        {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_AUTH_TOKEN}`
            },
            next: { revalidate: revalidate },
        }
    ).then(res => res.json())

    return <ClientHome eventsArray={data} />
}

export default Page;