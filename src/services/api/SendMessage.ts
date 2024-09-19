// const TOKEN = process.env.REACT_APP_TOKEN;
// const CHAT_ID = process.env.REACT_APP_CHAT_ID;

const URI_API: string = `https://api.telegram.org/bot$111}/sendMessage`;

export const sendMessage = async (message: string) => {
  try {
    const response = await fetch(URI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: "CHAT_ID",
        parse_mode: 'html',
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}`);
    }

    return response.json();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Ошибка ${e.message}`);
    }
  }
};
