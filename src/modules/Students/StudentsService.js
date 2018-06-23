/**
 * When you work in ECMAscript you can export and import separate functions
 * from a module.
 *
 * A service does not need to be instantiated, so I choose to just make a
 * module instead.
 *
 * @example `import { getStudents } from './StudentsService';`
 *
 * This means when your build process runs, and it reaches the 'tree shaking'
 * stage, it can get rid of way more code from the bundle than if we export
 * the whole object. This is not an issue for backend code, and will not make
 * any difference to .mjs (module javascript) code.
 *
 * @see https://developers.google.com/web/fundamentals/primers/modules
 */

// Always return an object in a JSON api. You cannot extend an array and it
// encourages idiots to do crazy things like `if(array[0] is a thing)`.
const studentsFixture = {
    students: [
        {
            firstName: 'Idar',
            lastName: 'Meling',
            description: 'Loves cheese, whisky and asian women.'
        },
        {
            firstName: 'Gavin',
            lastName: 'King',
            description: 'Hates Jonas and thinks Birte is weird'
        }
    ]
    // now I can add whatever to the api later, like metadata
};

/**
 * Fetch the students, well, we'll fake a request out with a timeout
 * and return a fixture.
 */
export const getStudents = () => {
    return new Promise(resolve => {
        const delayMS = 1500;

        setTimeout(() => {
            resolve(studentsFixture);
        }, delayMS);
    });
};

export const getSomething = () => {
    return fetch(url)
         .then(res => res.json());

    // Don't .catch() in here, unless you rethrow in it
};
