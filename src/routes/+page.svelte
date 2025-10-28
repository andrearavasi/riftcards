<script lang="ts">
   import { deck } from "$lib/deck";
   import Card from "$lib/components/Card.svelte";
</script>

<svelte:head>
   <style>
      body {
         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
         background-color: #f4f4f4;
         color: #333;
         margin: 0;
         padding: 24px;
      }
   </style>
</svelte:head>

<main>
   <h1>Riftbound cards</h1>

   <div class="card-grid">
      {#each deck as card (card.id)}
         <Card
            rank={card.codeRank}
            suit={card.codeSuit}
            imageUrl={card.imageUrl}
         />
      {/each}
   </div>
</main>

<style>
   main {
      max-width: 1200px;
      margin: 0 auto;
   }

   h1 {
      text-align: center;
      color: #444;
   }

   p {
      text-align: center;
      margin-bottom: 2rem;
   }

   .card-grid {
      display: grid;
      /* Crea colonne flessibili: 
      - Cerca di riempire lo spazio (auto-fill)
      - Ogni colonna ha una larghezza minima (minmax) di 120px
      - e una massima di 1 frazione (1fr) dello spazio disponibile
    */
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 16px; /* Spazio tra le carte */
   }

   /* Per schermi più piccoli, riduciamo il numero di colonne */
   @media (max-width: 600px) {
      .card-grid {
         grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
         gap: 12px;
      }
   }
</style>
