<!-- I consider it a good practice to provide a root tag -->
<section class="student-list">
    <h2>Student list: I am a domain specific component</h2>

    <p>I am smarter than a dumb component but I do NOT run any business logic or
    requests to services.</p>

    <!-- note the following indentation is led by the HTML, and not the logic -->

    {#if loadingStudents}
    <p>I am loading the students</p>
    {/if}

    {#if Array.isArray(students)}
    <List items="{students}" />
    {:else}
    <p class="error">You done bad things</p>
    {/if}
</section>

<style>
    .error {
        color: red;
    }
</style>

<script>
    export default {
        data() {
            return {
                students: []
            };
        },

        components: {
            List: '../../components/PersonList.svelte'
        }
    }
</script>
