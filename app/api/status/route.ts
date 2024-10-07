export async function POST(request: Request) {
    const status = await request.json();

    window.console.log(status);

    return new Response(JSON.stringify(status));
}
