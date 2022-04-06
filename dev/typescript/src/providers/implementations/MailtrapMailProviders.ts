import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: nodemailer.Transporter<SentMessageInfo>

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp',
      port: 2525,
      auth: {
        user: 'cb94a04d1262fb',
        pass: '4603d2d96fea2f'
      }
    })
  }

  async sendMail (message: IMessage) : Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
