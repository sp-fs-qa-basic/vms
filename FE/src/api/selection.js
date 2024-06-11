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

//나의 기업 선택횟수 증가
