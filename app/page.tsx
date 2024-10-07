'use client';

import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    async function donate(amount: number) {
        try {
            const response = await fetch("/api/donate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount
                })
            });

            const data: {
                invoiceId: string,
                pageUrl: string
            } = await response.json();

            router.push(data.pageUrl);

            window.console.log(data);
        } catch (error) {
            window.console.log(error);
        }

    }

    return (
        <main className="container px-6 mx-auto">
            <h1 className="text-5xl font-bold my-7">MONO ACQUIRING</h1>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => donate(1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Donate 1uah
                </button>
            </div>
        </main>
    );
}
