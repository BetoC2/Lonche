# Etapa 1: Compilar la aplicación con Node
FROM node:20 AS build

WORKDIR /app

# Copiar el archivo de configuración y las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Ejecutar el build de producción, asegurándote que la salida se genere en /dist/lonche/browser
RUN npm run build -- --configuration production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Elimina el contenido predeterminado de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos compilados desde la etapa de build (la carpeta browser es la que contiene index.html)
COPY --from=build /app/dist/lonche/browser /usr/share/nginx/html

# Copia el archivo de configuración personalizado para Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
