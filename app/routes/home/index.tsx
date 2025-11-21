import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The friendly dev : Welcome "  },
        { name: "description", content: "Custom website development" },
    ];
}

export default function Home() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Welcome
            </h2>
        </section>
    )
}
