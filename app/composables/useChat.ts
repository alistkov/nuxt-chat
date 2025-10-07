import type { ChatMessageType, ChatType } from '~/types';

import { MOCK_CHAT } from './mockData';

export default function useChat() {
  const chat = ref<ChatType>(MOCK_CHAT);
  const messages = computed<ChatMessageType[]>(() => chat.value.messages);

  function createMessage(message: string, role: ChatMessageType['role']): ChatMessageType {
    const id = messages.value.length.toString();

    return {
      id,
      role,
      content: message,
    };
  }

  function sendMessage(message: string) {
    messages.value.push(createMessage(message, 'user'));

    setTimeout(() => {
      messages.value.push(createMessage(`You said: ${message}`, 'assistant'));
    }, 200);
  }

  return {
    chat,
    messages,
    sendMessage,
  };
}
