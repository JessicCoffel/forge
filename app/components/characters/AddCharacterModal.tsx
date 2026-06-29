type AddCharacterModalProps = {
    characterName: string;
    setCharacterName: (name: string) => void;
    onClose: () => void;
    onAddCharacter: () => void;
};

export default function AddCharacterModal({
    characterName,
    setCharacterName,
    onClose,
    onAddCharacter,
}: AddCharacterModalProps) {
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-6">
            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 text-white">
                <h2 className="text-2xl font-bold">
                    Add Character
                </h2>

                <input
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    placeholder="Character name"
                    className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={onClose}
                        className="text-sm text-slate-500 hover:text-slate-300">
                            Cancel
                    </button>

                    <button
                        onClick={onAddCharacter}
                        disabled={!characterName.trim()}
                        className={`rounded-xl px-5 py-3 font-semibold transition-all duration-200 ${
                            characterName.trim()
                                ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                                : "cursor-not-allowed border border-slate-700 text-slate-500 opacity-50"
                        }`}
                        >
                            Add Character
                    </button>
                </div>
            </div>
        </div>
    )
}

