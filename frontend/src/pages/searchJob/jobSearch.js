import { jobTemplate } from './templates';
import { extractFormData, getCurrencySymbol } from './searchJobUtills';

export class JobSearch {
    constructor(
      searchFormSelector,
      resultsContainerSelector,
      loadingElementSelector
    ) {
      this.searchForm = document.querySelector(searchFormSelector);
      this.resultsContainer = document.querySelector(resultsContainerSelector);
      this.loadingElement = document.querySelector(loadingElementSelector);
    }
  
    setCountryCode() {
      this.countryCode = "gb";
      this.setCurrencyCode();
  
      fetch("http://ip-api.com/json")
        .then((results) => results.json())
        .then((results) => {
          this.countryCode = results.countryCode.toLowerCase();
          this.setCurrencySymbol();
        });
    }
  
    setCurrencyCode() {
      this.currencySymbol = getCurrencySymbol(this.countryCode);
    }
  
    configureFormListener() {
      if (this.searchForm) {
        this.searchForm.addEventListener("submit", (event) => {
          event.preventDefault();
          this.resultsContainer.innerHTML = "";
          const { search, location } = extractFormData(this.searchForm);
  
          fetch(
            `http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`
          )
            .then((response) => response.json())
            .then(({ results }) => {
              return results
                .map((job) => jobTemplate(job, this.currencySymbol))
                .join("");
            })
            .then((jobs) => (this.resultsContainer.innerHTML = jobs));
        });
      }
    }
  }