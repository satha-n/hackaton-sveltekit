<script lang="ts">
  import { goto } from "$app/navigation";
    import { _data } from "./+page";
</script>

<div class="main">
    <div class="list">
        {#each _data as item}
        <div class="list-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h4>{item.status}</h4>
            <h4>{item.date}</h4>
            <a class="list-button" href={"/" + item.guid} aria-label="Go next"></a>
        </div>
        {/each}
    </div>
</div>

<style>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
}
.list {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    gap: 10px;
    padding: 2px;
    overflow-y: auto;
}
.list-item {
    display: flex;
    gap: 5px;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
}
.list-item:hover {
    background-color: #f0f0f0;
}
.list-button {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>