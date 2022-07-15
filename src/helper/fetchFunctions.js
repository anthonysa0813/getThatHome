export const getApi = async (endpoint) => {
  const response = await fetch(`http://localhost:3000/${endpoint}`);
  const data = await response.json();
  return data;
};

export const createAccount = async (object, route) => {
  const response = await fetch(`http://localhost:3000/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  const data = await response.json();
  return data;
};
