FROM node:20.10.0

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Run the application.
CMD npm start
