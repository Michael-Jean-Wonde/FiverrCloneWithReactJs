import axios from "axios";
import {
  GIG_LIST_REQUEST,
  GIG_LIST_SUCCESS,
  GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  USER_GIG_LIST_REQUEST,
  USER_GIG_LIST_SUCCESS,
  USER_GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  CREATE_GIG_LIST_REQUEST,
  CREATE_GIG_LIST_SUCCESS,
  CREATE_GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  INSERT_GIG_LIST_REQUEST,
  INSERT_GIG_LIST_SUCCESS,
  INSERT_GIG_LIST_FAIL,
} from "../constants/productConstant.js";

export const gigList = () => async (dispatch) => {
  try {
    dispatch({ type: GIG_LIST_REQUEST });
    const { data } = await axios.get("/gig/");
    dispatch({
      type: GIG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GIG_LIST_FAIL,
      payload: error,
    });
  }
};

export const gigListByUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_GIG_LIST_REQUEST });
    const userinfoStorage = localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo"))
      : null;
    const iddata = userinfoStorage._id;
    const tokenData = userinfoStorage.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${tokenData}`,
      },
    };
    const { data } = await axios.get(`/gig/${iddata}`, config);
    dispatch({
      type: USER_GIG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_GIG_LIST_FAIL,
      payload: error,
    });
  }
};

export const createGig =
  (title, category, category2, service, metadata, tag) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_GIG_LIST_REQUEST,
      });
      const data = (title, category, category2, service, metadata, tag);
      dispatch({
        type: CREATE_GIG_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_GIG_LIST_FAIL,
        payload: error,
      });
    }
  };

export const createGigBackend =
  (
    maintitle,
    category,
    category2,
    service,
    metaData,
    tag,
    title1,
    title2,
    title3,
    description1,
    description2,
    description3,
    deliverytime1,
    deliverytime2,
    deliverytime3,
    pages1,
    pages2,
    pages3,
    products1,
    products2,
    products3,
    customization1,
    customization2,
    customization3,
    responsive1,
    responsive2,
    responsive3,
    contentupload1,
    contentupload2,
    contentupload3,
    revision1,
    revision2,
    revision3,
    price1,
    price2,
    price3,
    img,
    userid
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: INSERT_GIG_LIST_REQUEST,
      });
      const title = maintitle;
      const categoryone = category;
      const categorytwo = category2;
      const servicetype = service;
      const metadata = metaData;
      const searchtag = tag;
      const pkgname = [{ name: title1 }, { name: title2 }, { name: title3 }];
      const pkgdescription = [
        { discription: description1 },
        { discription: description2 },
        { discription: description3 },
      ];
      const deliverytime = [
        { days: deliverytime1 },
        { days: deliverytime2 },
        { days: deliverytime3 },
      ];
      const numofpages = [
        { pagesnum: pages1 },
        { pagesnum: pages2 },
        { pagesnum: pages3 },
      ];
      const numofproducts = [
        { productsnum: products1 },
        { productsnum: products2 },
        { productsnum: products3 },
      ];
      const customization = [
        { name: customization1 },
        { name: customization2 },
        { name: customization3 },
      ];
      const responsivedesign = [
        { name: responsive1 },
        { name: responsive2 },
        { name: responsive3 },
      ];
      const contentupload = [
        { name: contentupload1 },
        { name: contentupload2 },
        { name: contentupload3 },
      ];
      const revision = [
        { name: revision1 },
        { name: revision2 },
        { name: revision3 },
      ];
      const price = [{ name: price1 }, { name: price2 }, { name: price3 }];
      const image = img;
      const user = userid;
      const { data } = await axios.post("/gig/insert", {
        title,
        categoryone,
        categorytwo,
        servicetype,
        metadata,
        searchtag,
        pkgname,
        pkgdescription,
        deliverytime,
        numofpages,
        numofproducts,
        customization,
        responsivedesign,
        contentupload,
        revision,
        price,
        image,
        user,
      });
      dispatch({
        type: INSERT_GIG_LIST_SUCCESS,
        payload: data,
      });
      localStorage.setItem("insertgigdata", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: INSERT_GIG_LIST_FAIL,
        payload: error.message,
      });
    }
  };
