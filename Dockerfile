# Usa la imagen oficial de Node.js como imagen base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el cual tu aplicación Node.js se ejecutará
EXPOSE 3000

# Inicia la aplicación
CMD ["node", "main.js"]