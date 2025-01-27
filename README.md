Small TypeScript React Project to demo creating a docker image of a given project

To build the docker image, run `docker build -t calc-app:demo .` at the root of the repository

To run the created docker image, run `docker run -p 3000:3000 calc-app:demo` 
* This will run the app at localhost:3000 (NOTE: to run on another port, change the second '3000' in the run command to map to a new port)
