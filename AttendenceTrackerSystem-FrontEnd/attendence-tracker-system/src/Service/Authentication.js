import axios from "axios";
const url = "http://localhost:8080/springdb";

class Authentication {
    createProduct(product) {
        return axios.post(url+"/"+"user"+"/"+"create", product);
    }

    createEmployee(Employees) {
        return axios.post(url+"/"+"employe"+"/"+"create", Employees);
    }

    getUsersList(){
        return axios.get(url+"/"+"user"+"/"+"all");
    }

    getEmployeList(){
        return axios.get(url+"/"+"employe"+"/"+"all");
    }

    Deletemp(employeeId){
        return axios.delete(url+"/"+"employe"+"/"+"delete"+"/"+employeeId);
    }

    SendEmail(emaildetails){
        return axios.post(url+"/"+"email"+"/"+"sendMail",emaildetails);
    }

    getEmployeById(employeeId){
        return axios.get(url+"/"+"employe"+"/"+"getbyid"+"/"+employeeId);
    }

    UpdateEmployee(employee){
        return axios.put(url+"/"+"employe"+"/"+"update",employee);
    }
}
export default new Authentication()