import { LightningElement } from 'lwc';
const BACKEND_URL = "https://expense-manager-backend-yrbd.onrender.com"
export default class Login extends LightningElement{
    get loginUrl(){
        return `${BACKEND_URL}/oauth2/login`
    }
}