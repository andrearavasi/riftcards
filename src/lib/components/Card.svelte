<script lang="ts">
   // 2. Definiamo i tipi per le nostre "props"
   export let rank: string;
   export let suit: string;
   export let imageUrl: string;

   // TypeScript inferirà automaticamente che altText è di tipo 'string'
   const altText = `${rank} di ${suit}`;
</script>

<div class="card">
   <img src={imageUrl} alt={altText} />
</div>

<style>
   .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.2s ease-in-out;
   }

   .card:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   }

   img {
      display: block;
      width: 100%;
      height: auto;
   }
</style>
