# Use the Node.js 16 LTS base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for better caching of dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the React development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
