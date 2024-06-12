import sendApiRequest from "@/libs/instance";

//기업 선택 횟수 전체 조회
export const getSelect = async (view, offset, limit) => {
  const option = {
    endpoint : `/selections`,
    method: 'GET',
    params: {
      view,
      offset,
      limit
    }
  }

  const result = await sendApiRequest(option);
  return result
};

//나의 기업 선택
export const postMySelect = async (id) => {
  const option = {
    endpoint : `/selections/${id}/my-company/select`,
    method: 'POST',
  }

  const result = await sendApiRequest(option);
  return result
};

//나의 기업 선택 취소
export const postMySelectCancel = async (id) => {
  const option = {
    endpoint : `/selections${id ? `/${id}` : ''}/my-company/cancel`,
    method: 'POST',
  }

  const result = await sendApiRequest(option);
  return result
};

//비교 기업 선택
export const postCompareSelect = async (id) => {
  const option = {
    endpoint : `/selections${id ? `/${id}` : ''}/compared-company/cancel`,
    method: 'POST',
  }

  const result = await sendApiRequest(option);
  return result
};


//비교 기업 선택 취소
export const postCompareSelectCancel = async (id) => {
  const option = {
    endpoint : `/selections${id ? `/${id}` : ''}/compared-company/cancel`,
    method: 'POST',
  }

  const result = await sendApiRequest(option);
  return result
};