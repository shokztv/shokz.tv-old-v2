import { State } from '../Store';

export const availableArticlesSelector = (state: State) => state.ui.articles;
export const loadedArticlesSelector = (state: State) => state.ui.loadedArticles;