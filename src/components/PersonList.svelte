<dl>
    {#each items as item}
    <dt>{item.name}</dt>
    <dd>{item.description}</dd>
    {/each}
</dl>

<style>
    dt {
        font-weight: bold;
    }
</style>
