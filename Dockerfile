# --- FASE 1: BUILDER ---
# Usiamo un'immagine Node.js "Long Term Support" (LTS) basata su Alpine (leggera)
FROM node:25-alpine AS builder

# Impostiamo la cartella di lavoro all'interno del container
WORKDIR /app

# Copiamo i file di definizione delle dipendenze
COPY package.json package-lock.json ./

# Installiamo TUTTE le dipendenze (incluse le devDependencies per il build)
RUN npm install

# Copiamo il resto del codice sorgente dell'app
COPY . .

# Eseguiamo il comando di build di SvelteKit
RUN npm run build
# Questo crea la cartella /app/build


# --- FASE 2: RUNNER (PRODUZIONE) ---
# Ricominciamo da un'immagine Node pulita
FROM node:25-alpine AS runner

WORKDIR /app

# Impostiamo l'ambiente su "produzione"
ENV NODE_ENV=production

# Copiamo solo i package.json per installare le dipendenze di prod
COPY --from=builder /app/package.json /app/package-lock.json ./

# Installiamo SOLO le dipendenze di produzione
RUN npm ci --omit=dev

# Copiamo l'app compilata dalla fase "builder"
COPY --from=builder /app/build ./

# Esponiamo la porta 3000 (quella di default di adapter-node)
EXPOSE 3000

# Il comando per avviare il server Node.js prodotto da SvelteKit
# Il file di avvio si trova in /app/index.js (copiato da /app/build/index.js)
CMD ["node", "index.js"]
