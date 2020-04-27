export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random() + "ek" + Math.random(),
          title: action.article.title,
          body: action.article.body,
        },
      ];
    default:
      return state;
  }
};
