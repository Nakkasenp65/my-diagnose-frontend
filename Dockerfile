# ---- Build stage ----
  FROM node:18-alpine AS builder

  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm ci
  
  COPY . .
  
  RUN npm run build
  
  ARG NEXT_PUBLIC_BACKEND_URL
  ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
  # ---- Run stage ----
  FROM node:18-alpine
  
  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm ci --omit=dev
  
  # Copy built app and config
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/next.config.mjs ./next.config.mjs
  COPY --from=builder /app/package.json ./package.json
  
  ENV NODE_ENV production
  ENV PORT 3000
  
  EXPOSE 3000
  
  CMD ["npm", "start"]
  