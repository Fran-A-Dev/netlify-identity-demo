exports.handler = async () => {
  console.log("function served");

  const data = { name: "Fran", age: "43", job: "SE" };

  // return response in the browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
