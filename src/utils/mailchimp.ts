import axios from 'axios';

const API_KEY = import.meta.env.PUBLIC_MAILCHIMP_API_KEY;
const mcListId = import.meta.env.PUBLIC_LIST_ID;

export class MailChimp {
  static async subscribe(email: string) {
    try {
      const postData = {
        email_address: email,
        status: 'subscribed',
      };

      // Configure headers
      const axiosConfig = {
        headers: {
          Authorization: 'Basic ' + Buffer.from('username:' + API_KEY).toString('base64'),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      
      await axios.post('https://us21.api.mailchimp.com/3.0/lists/' + mcListId + '/members', postData, axiosConfig);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
