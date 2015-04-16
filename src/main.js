require("babel/register")({
  ignore: /node_modules/,
  stage: 0
});

require("./browser/main");
