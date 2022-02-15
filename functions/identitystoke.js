exports.handler = async () => {
  console.log("function served");

  const data = { name: "Fran", age: "43", job: "SE" };

  // return response in the browser
  return {
    statuCode: 200,
    body: JSON.stringify(data),
  };
};
