type AddCardProps ={
    onClick: () => void;
};

export default function AddCard({ onClick }: AddCardProps) {
    return(
        <button
            onClick= {onClick}
            className="mt-10 flex min-h-40 w-full max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 text-slate-400 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-400">
                <span className="text-34xl">
                    +
                </span>
                <span className="mt-3 text-lg font-semibold">
                    Add Card
                </span>
            </button>
    )
}