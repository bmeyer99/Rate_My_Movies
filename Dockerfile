# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY . .

# Build your TypeScript app
RUN yarn build

# Specify the command to run when the container starts
CMD ["node", "dist/index.js"]
