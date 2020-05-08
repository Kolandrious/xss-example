FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json using a wildcard
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
