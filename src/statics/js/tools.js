
import { message } from 'antd';

const Message = ({ type, content, duration = 10, onClose }) => {

  switch (type) {
    case 'success':
      message.success(content, [duration], onClose);
      break;
    case 'error':
      message.error(content, [duration], onClose);
      break;
    case 'info':
      message.info(content, [duration], onClose);
      break;
    case 'warning':
      message.info(content, [duration], onClose);
      break;
    case 'warn':
      message.info(content, [duration], onClose);
      break;
    case 'loading':
      message.loading(content, [duration], onClose);
      break;
    default:
      message.info(content, [duration], onClose);

  }

}
export const $ui = {
  Message
}

 