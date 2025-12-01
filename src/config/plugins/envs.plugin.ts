import 'dotenv/config';
import * as env from 'env-var';
 /**
  * Environment variables 
* @description Este complemento carga y valida variables de entorno mediante el paquete 'env-var'.
* Garantiza que todas las variables requeridas estén presentes y escritas correctamente.
  */
export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),// Puerto en el que se ejecuta el servidor
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(), // Servicio de correo (por ejemplo, 'gmail')
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(), // Correo electrónico del servicio de correo
    MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(), // Clave secreta del servicio de correo
    PROD: env.get('PROD').required().asBool(), // Indicador de entorno de producción

}