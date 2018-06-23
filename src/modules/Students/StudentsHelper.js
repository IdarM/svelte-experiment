/**
 * Svelte also has compute functionality in it, and while that is very useful to
 * use sometimes, computing properties outside the components also means your
 * store will contain them, and you only compute when you refetch the data.
 *
 * @param {Student} student
 */
export const computeFullName = student => {
    student.name = `${student.firstName} ${student.lastName}`;

    return student;
};

/**
 * @param {Student[]} students
 */
export const computeFullNames = students => {
    return students.map(student => computeFullName(student));
};
