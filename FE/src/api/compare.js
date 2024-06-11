import sendApiRequest from "@/libs/instance"

//기업 비교하기
export const postCompare = async (id, data, view) => {
  const option = {
    endpoint : `/companies/${id}/comparison`,
    method: 'POST',
    data: {
      "bodyCompanyIds" : data
    },
    params: {
      view
    }
  }

  const result = await sendApiRequest(option);
  return result
};

//기업 순위 및 비교
export const getCompare = async (id, view) => {
  const option = {
    endpoint : `/companies/${id}/rank`,
    method: 'GET',
    params: {
      view
    }
  }

  const result = await sendApiRequest(option);
  return result
};