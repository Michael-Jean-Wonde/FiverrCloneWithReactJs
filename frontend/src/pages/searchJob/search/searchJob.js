import React from "react";
import "./search.css";
import UserHeader from "../../../components/userHeader";
import { JobSearch } from '../jobSearch';
import loadingImg from '../../../assets/ReactJS.png';

import '../../../utills/i18next';
import { useTranslation } from "react-i18next"; 

const SearchJob = () => {
  const {t} = useTranslation();
  const handleSearch = () => {
    const jobSearch = new JobSearch(
      "#search-form",
      ".result-container",
      ".loading-element"
    );
    jobSearch.setCountryCode();
    jobSearch.configureFormListener();
  };

  return (
    <div>
      <UserHeader />
      <div class="form_container">
        <form id="search-form">
          <input
            type="text"
            className="search-input"
            autoFocus
            id="search"
            //   onChange={(e) => {
            //     handleSearch(e);
            //   }}
            //   value={search}
            placeholder={t('jbti')}
          />
          <input
            type="text"
            className="search-input"
            
            id="location"
            //   onChange={(e) => {
            //     handleSearch(e);
            //   }}
            //   value={search}
            placeholder={t('city')}
          />
          <button class="jobSearchBtn" onClick={handleSearch}>{t('search')}</button>
        </form>
      </div>
      <div class="container">
          <div class="loading-element">
            {/* <img src={loadingImg} alt="" /> */}
          </div>
          <div class="result-container"></div>        
    </div>
    </div>
  );
};

export default SearchJob;
