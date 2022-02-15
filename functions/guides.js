exports.handler = async (event, context) => {
  const guides = [
    {
      title: "How to Internationalize Sites with Country Based Redirects",
      author: "Bhavana Srinivas",
      url: "https://www.netlify.com/blog/2021/11/05/how-to-internationalize-sites-with-country-based-redirects/",
    },
    {
      title: "How to Deploy Your Netlify Site with an Elgato Sream Deck",
      author: "Salma Alam-Nayor",
      url: "https://www.netlify.com/blog/how-to-deploy-your-netlify-site-with-an-elgato-stream-deck",
    },
    {
      title: "How to Architect International Sites at Scale",
      author: "Ramin Sedighi",
      url: "https://www.youtube.com/watch?v=T_Ka6v-bY-0",
    },
    {
      title: "Building on Netlify with Next JS",
      author: "Chris Hannaby",
      url: "https://www.youtube.com/watch?v=ZGAR8RdBdok",
    },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({
      msg: "You must login to see this gated guides content",
    }),
  };
};
