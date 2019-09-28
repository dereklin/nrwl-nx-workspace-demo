# Stage 0, based on Node.js, to build and compile Angular
#docker build -t nrwl-nx-workspace-demo:app1 .
#docker run -d -p 80:80 nrwl-nx-workspace-demo:app1
FROM node:10.16.3 as node
ARG env=prod
WORKDIR /app
COPY package.json /app/
COPY ./ /app/
RUN npm install
# RUN npm run build:app1

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=node /app/dist/apps/app1/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
