/**
 * This could be a split of different controllers, but we should always keep it
 * as simple as possible.
 */

import App from './App.svelte';
import { getStudents } from './modules/Students/StudentsService.js';
import { computeFullNames } from './modules/Students/StudentsHelper.js';

class AppController {
    constructor() {
        this.target = document.body;
        this.data = { name: '', students: [] };

        this.render(this.target, this.data);
    }

    render(target, data) {
        this.app = new App({ target, data });

        this.coupleUIEvents();
    }

    coupleUIEvents() {
        this.app.on('loadStudentsDesired', () => {
            // Setting is better done with the svelte/store, but let's keep it
            // simple for now.
            this.app.set({ loadingStudents: true });

            getStudents().then(response => {
                const students = computeFullNames(response.students);

                this.app.set({ students, loadingStudents: false });
            });
        });

        this.app.on('fuckThisRightUp', () => {
            this.app.set({ students: 'Defo should not be a string' });
        });
    }
}

export default AppController;
