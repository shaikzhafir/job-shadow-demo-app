ExpressJS backend connected to mongodb running in a Pod 

1) Create a .env file in the root folder of backend (backend/.env)
2) Copy paste the contents of .sample.env into .env
3) Run npm install 
4) Make sure the MongoDB pod is running (Refer to README in yamls/mongodb)
5) Run npm start. The database will clear the existing books collection and seed with a sample array of books (fow now)

Using Postman to test API
1) Right now, only two API is running 

GET localhost:3000/books
POST localhost:3000/books

2) Import the postman collection to do your testing 
