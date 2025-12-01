
import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface sendEmailOptions{
    to: string | string[];
    subject: string;
    htmlBody:string;
    attachments?: Attachment[]; 
}

interface Attachment{
    fileName: string;
    path: string;
}


export class EmailService{
    private tranporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(){}

    async sendEmail(options: sendEmailOptions) : Promise<boolean> {
        const {to,subject,htmlBody, attachments = []} = options;
        try {
            const sentInformation = await this.tranporter.sendMail({
                to:to,
                subject: subject,
                html: htmlBody,
                attachments: attachments,
            });


            //console.log(sentInformation)

            return true;
        } catch (error) {
           
            return false;
        }

    }

    async sendEmailWithfileSystemLogs(to: string | string[]) {
        const subject = ' Logs del Sistema - NOC ';
        const htmlBody = `
        <h1> Logs del Sistema - NOC </h1>
        <p> Se adjuntan los logs generados por el sistema NOC </p>
        <p> Saludos </p>
        `;
        const attachments: Attachment[] = [
            {
                fileName: 'logs-high.log',
                path: './logs/logs-high.log'
            },
            {
                fileName: 'logs-medium.log',
                path: './logs/logs-medium.log'
            },
            {
                fileName: 'logs-all.log',
                path: './logs/logs-all.log'
            },
        ]
        return this.sendEmail({
            to, subject, htmlBody, attachments
        });
    }

    
}