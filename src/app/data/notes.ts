import { Note } from '../interfaces/Note';

export const NOTES: Note[] = [
    {
        id: 1,
        title: "Angular Notes",
        content: "My first notes on how to design an angular app.",
        isEditingTitle: false,
        isEditingContent: false
    },
    {
        id: 2,
        title: "HTML Notes",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        isEditingTitle: false,
        isEditingContent: false

    },
    {
        id: 3,
        title: "CSS Notes",
        content: "My first notes on how to use CSS to make a beautiful website.",
        isEditingTitle: false,
        isEditingContent: false
    }
]
