import sendApiRequest from "@/libs/instance"

//기업 조회
export const getCompanies = async (id, search, offset, limit, view) => {
  const option = {
    endpoint : `/companies${id ? `/${id}` : ''}`,
    method: 'GET',
    params: {
      search,
      offset,
      limit,
      view
    }
  }

  const result = await sendApiRequest(option);
  return result
};
