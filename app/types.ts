export type ChatMessageType = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type ChatType = {
  id: string;
  title: string;
  messages: ChatMessageType[];
};
