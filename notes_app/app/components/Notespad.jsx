"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const NotesClient = ({ initialNotes }) => {
    // Default to empty array if initialNotes is undefined or null to prevent "is not iterable" crashes
    const [notes, setNotes] = useState(initialNotes || []);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const saveNote = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) return;

        setLoading(true);
        try {
            if (editingId) {
                const response = await fetch(`/api/notes/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, content }),
                });
                const result = await response.json();
                if (result.success) {
                    // Update notes state by replacing the edited note with updated data
                    setNotes(notes.map((n) => (n._id === editingId ? result.data : n)));
                    toast.success("Note updated successfully!");
                    setTitle("");
                    setContent("");
                    setEditingId(null);
                } else {
                    toast.error(result.error || "Failed to update note");
                }
            } else {
                const response = await fetch("/api/notes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, content }),
                });
                const result = await response.json();
                if (result.success) {
                    setNotes([result.data, ...notes]);
                    toast.success("Note created successfully!");
                    setTitle("");
                    setContent("");
                } else {
                    toast.error(result.msg || "Failed to create note");
                }
            }
        } catch (error) {
            console.error("Error saving note:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const startEdit = (note) => {
        setEditingId(note._id);
        setTitle(note.title);
        setContent(note.content);
        // Scroll to the top where the edit form is located
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTitle("");
        setContent("");
    };

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: "DELETE",
            });

            const result = await response.json();

            if (result.success) {
                setNotes(notes.filter((note) => note._id !== id));
                toast.success("Note deleted successfully!");
                // If we delete the note currently being edited, cancel the edit mode
                if (editingId === id) {
                    cancelEdit();
                }
            }
        } catch (error) {
            console.error("Error deleting note:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="space-y-8">
            <Toaster position="top-right" reverseOrder={false} />

            <form onSubmit={saveNote} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 transition-colors">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {editingId ? "Edit Note 📝" : "Create New Note"}
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />

                    <textarea
                        placeholder="Note Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (editingId ? "Updating..." : "Creating...") : (editingId ? "Update Note" : "Create Note")}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={cancelEdit}
                                className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </form>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Your Notes {notes.length}</h2>
                {
                    (notes.length === 0) ? (
                        <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 shadow-sm">
                            <p className="text-lg">enter your first note</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2">
                            {notes.map((note) => (
                                <div key={note._id} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-850 dark:text-zinc-100 mb-2 break-words">{note.title}</h3>
                                        <p className="text-zinc-650 dark:text-zinc-300 text-sm whitespace-pre-wrap mb-4 break-words leading-relaxed">{note.content}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-400 dark:text-zinc-500 border-t border-zinc-100 dark:border-zinc-800/80 pt-3 mb-4 space-y-1">
                                            <p>created at {note.createdAt}</p>
                                            {
                                                (note.createdAt === note.updatedAt) ? (
                                                    <p>updated at {note.updatedAt}</p>
                                                ) : (<p></p>)
                                            }
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => startEdit(note)} className="bg-amber-500 hover:bg-amber-600 text-white text-xs px-3.5 py-2 rounded-md font-semibold transition-colors shadow-sm">edit</button>
                                            <button onClick={() => deleteNote(note._id)} className="bg-red-500 hover:bg-red-600 text-white text-xs px-3.5 py-2 rounded-md font-semibold transition-colors shadow-sm">delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default NotesClient;