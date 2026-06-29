import Link from "next/link";

type CharacterCardProps = {
    character: {
        id: string;
        name: string;
    };
    projectId: string;
};

export default function CharacterCard({
    character,
    projectId,
}: CharacterCardProps) {
    const route = `projects/${projectId}/characters/${character.id}`;

    return(
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left">
            <h2 className="text-2xl font-bold text-white">
                {character.name}
            </h2>

            <p className="mt-2 text-sm text-slate-400">
                Character Profile
            </p>

            <div className="mt-6 flex justify-between text-sm">
                <span className="text-slate-500">
                    0 sections
                </span>

                <Link
                    href={route}
                    className="text-emerald-400 transition-all duration-200 hover:text-emerald-300">
                        Open →
                    </Link>
            </div>
                
        </div>
    )


}
