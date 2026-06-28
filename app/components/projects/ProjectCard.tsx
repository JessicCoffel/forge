import Link from "next/link";

type ProjectCardProps ={
    project: {
        name: string;
        genre: string;
        structure: string;
        description?: string;
    };

};

export default function ProjectCard({ project }: ProjectCardProps){
    return (
        <div
        
        className="block w-full rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left">
            <h2 className="text-2xl font-bold text-white">
                {project.name}
            </h2>

            <p className="mt-2 text-sm uppercase tracking-wide text-emerald-400">
                {project.genre} • {project.structure}
            </p>

            {project.description && (
                <p className="mt-4 italic text-slate-400">
                    {project.description}
                </p>
            )}
            <div className="mt-6 flex justify-between text-sm text-slate-500">
                <span>Status: Planning</span>
                    
                <Link
                    href="/dashboard"
                    className="text-emerald-400 trasition-all duration-200 hover:text-emerald-300">
                    Continue →
                </Link>
                
            </div>
        </div>
    );
}