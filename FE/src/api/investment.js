import sendApiRequest from "@/libs/instance";

//특정 기업에 투자한 모든 투자자 조회
export const getInvestment = async (id, view) => {
  const option = {
    endpoint: `/investments${id ? `/${id}` : ""}`,
    method: "GET",
    params: {
      view
    }
  };

  const result = await sendApiRequest(option);
  return result;
};

//기업 투자하기
export const postInvestment = async (id, data) => {
  const option = {
    endpoint: `/investments`,
    method: "POST",
    data : {
      ...data,
      amount: parseInt(data.amount),
      companyId: id
    }
  };

  const result = await sendApiRequest(option);
  return result;
};

//투자 정보 수정
export const updateInvestment = async (id, data) => {
  const option = {
    endpoint: `/investments${id ? `/${id}` : ""}`,
    method: "PATCH",
    data,
  };

  const result = await sendApiRequest(option);
  return result;
};

//투자자 삭제
export const deleteInvestment = async (id) => {
  const option = {
    endpoint: `/investments${id ? `/${id}` : ""}`,
    method: "DELETE",
  };

  const result = await sendApiRequest(option);
  return result;
};
