FROM node:12.16.1-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ENV API_URL=api
ENV API_PORT=5000
RUN npm install
COPY . .
RUN ./node_modules/@angular/cli/bin/ng build --prod
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/crypto-quantique/ /usr/share/nginx/html
