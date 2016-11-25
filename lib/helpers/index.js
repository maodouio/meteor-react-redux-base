export default {
  shortText(text) {
    return text.length > 10 ? `${text.slice(0,10)}...` : text;
  },
};

