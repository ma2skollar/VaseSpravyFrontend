"use server"

const submitMail = async (action: string, inputValue: string) => {
	try {
		const res = await fetch(action, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
			},
			body: JSON.stringify({ mail: inputValue }),
			cache: "no-store",
		});

		let data: unknown = undefined;
		try {
			data = await res.json();
		} catch {
			// ignore parsing errors
		}

		return { ok: res.ok, status: res.status, data };
	} catch {
		return { ok: false, status: 0 };
	}
}

export default submitMail;