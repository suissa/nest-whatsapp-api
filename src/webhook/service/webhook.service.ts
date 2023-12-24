import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {

  async receiveWebhook(request: any): Promise<any> {
    try {
      // Processar os dados do webhook aqui.
      // Por exemplo, você pode registrar os dados ou executar alguma ação com base neles.

      // Retornar uma resposta apropriada
      return { message: 'Webhook recebido com sucesso' };
    } catch (error) {
      // Tratar erros que podem ocorrer durante o processamento
      throw new BadRequestException('Erro ao processar webhook', error.message);
    }
  }
}


// event: 'messages.upsert',
// instance: 'Criptou_Onboarding-5511994649923',
// data: {
  // key: {
    // remoteJid: '5515991957645@s.whatsapp.net',
    // fromMe: false,
    // id: '3A33205B05E2CC04FFC9'
  // },
  // pushName: 'Jean Suissa 🤓',
  // message: { conversation: 'alo', messageContextInfo: [Object] },
  // messageType: 'conversation',
  // messageTimestamp: 1703445782,
  // owner: 'Criptou_Onboarding-5511994649923',
  // source: 'ios'
// },
// date_time: '2023-12-24T16:23:02.277Z',
// sender: '5511994649923@s.whatsapp.net',
// server_url: 'localhost',
// apikey: 'B6D711FCDE4D4FD5936544120E713976'