FROM node:alpine
WORKDIR /app
COPY . .
RUN brunch build -p
CMD ["node", "src/index.js"]