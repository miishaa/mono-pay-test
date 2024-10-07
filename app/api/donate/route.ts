export async function POST(request: Request) {
    const data: {
        amount: number;
    } = await request.json();

    const donate = await fetch("https://api.monobank.ua/api/merchant/invoice/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Token": `${process.env.MONO_TOKEN}`
        },
        body: JSON.stringify({
            amount: data.amount,
            ccy: 980,
            merchantPaymInfo: {
                destination: "Test destination info",
                comment: "Test comment info"
            },
            redirectUrl: `${process.env.NEXT_URL}/success`,
            webHookUrl: `${process.env.NEXT_URL}/api/status`,
            paymentType: "debit"
        })
    });

    const response = await donate.json();

    return new Response(JSON.stringify(response));
}
