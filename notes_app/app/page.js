import dbConnection from "@/lib/db";
import note from "@/model/note";
import NotesClient from "./components/Notespad";


async function getNote() {
  try {
    await dbConnection()
    // Use a different variable name to avoid shadowing the imported `note` model
    const notesDocs = await note.find({}).sort({ createdAt: -1 }).lean()
    // Since .lean() is used, the documents are already plain JavaScript objects.
    // We spread `doc` instead of `doc._doc` to preserve title and content.
    return notesDocs.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      createdAt: doc.createdAt ? doc.createdAt.toISOString() : null,
      updatedAt: doc.updatedAt ? doc.updatedAt.toISOString() : null,
    }))
  } catch (error) {
    console.error("Error fetching notes:", error.message || error)
    return []
  }
}


export default async function Home() {
  const notes = await getNote()
  console.log(notes)
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight sm:text-5xl">
            My Note Pad 📝
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            A beautiful, clean interface to manage your daily thoughts.
          </p>
        </header>

        <main>
          <NotesClient initialNotes={notes} />
        </main>
      </div>
    </div>
  );
}
