import Link from "next/link";

export default function Home() {
    return (
        <main className="container px-6 mx-auto">
            <h1 className="text-5xl font-bold my-7">Your donation was successful</h1>

            <Link
                href={"/"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Back to home
            </Link>
        </main>
    );
}
