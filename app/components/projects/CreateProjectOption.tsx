type CreateProjectOptionProps = {
    title: string;
    selected: boolean;
    onClick: () => void;
};

export default function CreateProjectOption({ title, selected, onClick }: CreateProjectOptionProps) {
    return (
        <button 
            onClick={onClick}
            className={`mb-4 w-full rounded-xl border p-6 text-xl transition-all duration-200 ${
            selected
                ? "border-emerald-400 bg-emerald-500/10 text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.35)]"
                : "border-slate-700 bg-slate-900 text-white hover:border-emerald-500 hover:bg-slate-800"
             }`}
             >
        {title}
    </button>
    );
}