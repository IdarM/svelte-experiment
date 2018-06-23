<h1>I am an application about students</h1>

<button on:click="onClickLoad(event)">Load students</button>
<button on:click="onClickFuckUp(event)">Fuck up the students</button>

<StudentList {students} loading="{loadingStudents}" />

<script>
    export default {
        data() {
            return {
                students: [],
                loadingStudents: false
            };
        },

        components: {
            StudentList: './modules/Students/StudentList.svelte'
        },

        methods: {
            onClickLoad(event) {
                // If I am in a smarter component I pass out the original event,
                // and data if needed.
                // This allows full control over the original event by the
                // developer later, such as stopping propagation or simply
                // having access to the event should I need to stop propagation
                // in a component event handler.
                const data = {
                    requestTimestamp: Date.now()
                };

                // It's a silly event name, but the point is, don't name it what
                // it should do, but what has happened. Otherwise you couple your
                // events to the business logic that follows.
                this.fire('loadStudentsDesired', {event, data})
            },

            onClickFuckUp(event) {
                this.fire('fuckThisRightUp', {event});
            }
        }
    };
</script>
