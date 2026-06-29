type AddCardModalProps = {
    onClose: () => void;
    onAddCard: (card: any) => void;
};

const presetCards = [
    {
        id: "Characters",
        title: "Characters",
    },
    {
        id: "Locations",
        title: "Locations",
    },
    {
        id: "Magic",
        title: "Magic",
    },
    {
        id: "Timeline",
        title: "Timeline",
    },
    {
        id: "Books",
        title: "Books",
    },
    {
        id: "Notes",
        title: "Notes",
    },
];

export default function AddCardModal({ onClose, onAddCard }: AddCardModalProps) {
    return(
        <div className="fixed inset-0 flex items-center jusitfy-center bg-black/70 px-6">
            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 text-white">
                <h2 className="text-2xl font-bold">
                    Choose a Dashboard Card
                </h2>
                
                <div className="mt-6 grid gap-3">
                    {presetCards.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => onAddCard(card)}
                            className="rounded-xl border border-slate-700 p-4 text-left transition-all duration-200 hover:border-emerald-500 hover:text-emerald-400">
                                {card.title}
                            </button>
                    ))}
                </div>
                <button className="mt-4 w-full rounded-xl border border-slate-700 p-4 text-left text-slate-400 trasition-all duration-200 hover:border-emerald-500 hover:text-emerald-400">
                    + Custom Card
                </button>

                <button 
                    onClick={onClose}
                    className="mt-6 text-sm text-slate-500 hover:text-slate-300">
                        Cancel
                    </button>

            </div>
        </div>
    )
}