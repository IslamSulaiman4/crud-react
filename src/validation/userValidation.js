export default function validationUserData(values){

    let errors ={};
    if(values.name.trim()==""){
        errors.name="User name is required";
    }
    else if(values.name.trim().length<4){
        errors.name="user name must be at least 4 charachacters";
    }

    if(values.email.trim()==""){
        errors.email="User email is required";
    }
    else if(values.email.trim().length<10){
        errors.email="user email must be at least 10 charachacters";
    }

    if(values.password.trim()==""){
        errors.password="User password is required";
    }
    else if(values.password.trim().length<4){
        errors.password="user password must be at least 4 charachacters";
    }
    return errors;
}