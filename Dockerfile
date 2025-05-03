# ---- Build stage ----
  FROM node:18-alpine AS builder

  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm ci
  
  COPY . .
  
  ARG NEXT_PUBLIC_BACKEND_URL
  ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
  
  RUN npm run build

  # ---- Run stage ----
  FROM node:18-alpine
  
  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm ci --omit=dev
  
  COPY --from=builder /app ./
  
  ENV NODE_ENV production
  ENV PORT 3000
  
  EXPOSE 3000
  CMD ["npm", "start"]
  