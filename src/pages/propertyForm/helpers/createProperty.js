export const createProperty = async (object, route, token) => {
  const response = await fetch(`http://localhost:3000/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    },
    body: JSON.stringify(object),
  });
  const data = await response.json();
  return data;
};
