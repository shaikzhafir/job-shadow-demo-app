How to deploy mongoDB pod
cd into mongodb/storage and kubectl apply -f .
cd back to mongodb and kubectl apply -f .



1. kubectl exec -it <podname> bash
2. mongo -u <username> -p <password>

After running the backend folder, while still inside the mongodb pod
3. show dbs
4. show collections
5. db.books.find()
