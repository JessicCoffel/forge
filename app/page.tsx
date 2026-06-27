export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <p className="mb-4 mt-4 text-sm uppercase tracking-[0.3em] text-center text-emerald-400">
          The Forge Project
      </p>
      <section className="flex min-h-[90vh] flex-col items-center text-center justify-center px-6 ">
        
        <h1 className="text-7xl font-bold">Forge
        </h1>

        <h2 className="mt-4 text-3xl text-zinc-400">
        Where stories stay connected.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-400">
        Create characters.<br />
        Build kingdoms.<br />
        Map timelines.<br />
        Keep ever detail connected from the first idea to the final chapter.
        </p>

       <button className="mt-10 rounded-xl bg-emerald-500 px-9 py-5 text-2xl font-semibold text-slate-950 transition hover:bg-emerald-400">
        Create Project
       </button>

       <p className="mt-10 text-sm italic text-slate-500">
        Your story. One connected workspace.
       </p>
      </section>
    </main>
  );
}