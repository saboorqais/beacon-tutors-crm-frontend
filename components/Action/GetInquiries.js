import InquiriesService from "../Services/InquiriesService";

export const GET_ALL_INQUIRIES = "GET_ALL_INQUIRIES";
export const getAllInquiries = (id) => async (dispatch) => {
  const response = InquiriesService(id);
  response.then((res) => {
    dispatch({
      type: GET_ALL_INQUIRIES,
      payload: res,
    });
  });
};
