import Link from "next/link";

type DashboardCardProps ={
    card: {
        id: string;
        title: string;
    };
    projectId: string;
    onDelete: (id: string) => void;
};

export default function DashboardCard({ card, projectId, onDelete }: DashboardCardProps) {
    const route = `/projects/${projectId}/${card.id.toLowerCase()}`;

    return(
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left">
            <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-white">
                    {card.title}
                </h2>

                <button
                    onClick={() => onDelete(card.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-800 hover:text-red-400">
                        ×
                </button>
            </div>
            

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