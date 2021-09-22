const { problems } = require("./problems.js");

function search(input) {
  return problems.some((item) => item === input)
    ? `I've got ${input} problems.`
    : `I've got ${problems.length} problems but a ${input} ain't one.`;
}

search("girl")
