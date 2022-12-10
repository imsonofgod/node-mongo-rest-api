# node-mongo-rest-api
https://docs.google.com/document/d/1eaG8C_8sAbGcCVuR9g1PLybvjhx3f3AX3YefjlkrKyM/edit?usp=sharing

npm install 

docker images | grep mysql

docker ps -a
 
docker-compose up -d
docker-compose down

docker exec -it  bc278a3fc95f ping 172.26.0.2 


#Request
[GET] localhost:4000/api/obtenerPersonas

[POST] localhost:4000/api/crearPersona
{
    "dni": "A2003005",
    "name": "Juan Pablo",
    "lastName": "Bustos Sáez",
    "email": "juanbustossaez@gmail.com",
    "direccion": "doctor marañon 1287, maipú, Santiago de Chile"
}