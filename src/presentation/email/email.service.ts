
import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface sendEmailOptions{
    to: string;
    subject: string;
    htmlBody:string;
    //todo:attachments
}
//todo:attachments


export class EmailService{
    private tranporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    async sendEmail(options: sendEmailOptions) : Promise<boolean> {
        const {to,subject,htmlBody} = options;
        try {
            const sentInformation = await this.tranporter.sendMail({
                to:to,
                subject: subject,
                html: htmlBody,
            });
            console.log(sentInformation)



            return true;
        } catch (error) {
            return false;
        }

    }
}