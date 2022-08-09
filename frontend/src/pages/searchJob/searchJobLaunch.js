import { JobSearch } from './jobSearch';

const jobSearch = new JobSearch(
    "#search-form",
    ".result-container",
    ".loading-element"
  );
  jobSearch.setCountryCode();
  jobSearch.configureFormListener();