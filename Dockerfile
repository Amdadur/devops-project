# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port 3000 to be accessible outside the container
EXPOSE 3000

# Command to start the application
CMD ["node", "app.js"]
