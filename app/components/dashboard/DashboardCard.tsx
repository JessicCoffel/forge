import Link from "next/link";

type DashboardCardProps ={
    card: {
        id: string;
        title: string;
    };
};

export default function DashboardCard({ card }: DashboardCardProps) {
    const route = `/${card.id.toLowerCase()}`;

    return(
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left">
            <div className="mb-4 h-1 w-16 rounded-full " />

            <h2 className="text-2xl font-bold text-white">
                {card.title}
            </h2>

            <p className="mt-2 text-sm text-slate-400">
                Build and organize your {card.title.toLowerCase()}.
            </p>

            <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                    0 items
                </span>

                <Link
                    href={route}
                    className="rounded-lg px-3 py-2 text-emerald-400 transition-all duration-200 hover:bg-emerald-500/10 hover:text-emerald-300">
                        Open →
                </Link>
            </div>
        </div>
    )
}