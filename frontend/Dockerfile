# Define the base image on top of which our application will run, hence Node + version
FROM node:21 

# Working directory of the docker container at any given time
WORKDIR /app

# Copy our package.json file from our local system to the docker image
COPY package.json .

# Run npm install inside the docker image to install all our dependencies
RUN npm install

# Copy the rest of the files into the docker image
COPY . .

# Create a production build of our application
RUN npm run build

# Declaring on which port the application “should” run and not must run.
# For running the image a different port can be used
EXPOSE 5173

# Runs only when the container spins up. It is not part of the Image creation process
CMD [ "npm", "run", "dev" ]