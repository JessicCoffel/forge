"use client";

import { useState } from "react";
import AddCharacter from "../../../components/characters/AddCharacter";
import AddCharacterModal from "@/app/components/characters/AddCharacterModal";
import CharacterCard from "@/app/components/characters/CharacterCard";

export default function CharactersPage() {
    const [showAddCharacterModal, setShowAddCharacterModal] = useState(false);
    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState<any[]>([]);

    function handleAddCharacter() {
        if (!characterName.trim()) return;

        const newCharacter = {
            id: Date.now().toString(),
            name: characterName,
        };

        setCharacters((current) => [...current, newCharacter]);
        setCharacterName("");
        setShowAddCharacterModal(false);


    }

    return(
        <main className="min-h-screen bg-slate-950 px-6 text-white">
            <p className="mt-4 text-center text-sm uppercase tracking-[0.3em] text-emerald-400">
                The Forge Project
            </p>

            <section className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold tracking-tight">
                    Characters
                </h1>

                <p className="mt-4 text-xl text-slate-400">
                    Every person who shapes your story.
                </p>

                <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
                    {characters.map((character) =>(
                        <CharacterCard
                            key={character.id}
                            character={character}
                            projectId="temp"
                        />
                    ))}
                </div>

                <AddCharacter onClick={() => setShowAddCharacterModal(true)} />

                {showAddCharacterModal && (
                    <AddCharacterModal
                        characterName={characterName}
                        setCharacterName={setCharacterName}
                        onClose={() => setShowAddCharacterModal(false)}
                        onAddCharacter={handleAddCharacter}
                    />
                )}
            </section>
        </main>
    )
}