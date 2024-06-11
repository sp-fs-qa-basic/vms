import sendApiRequest from "@/libs/instance"

//비밀번호 확인
export const postCheckAuth = async (id, password) => {
  const option = {
    endpoint : `/investment/${id}/userCheck`,
    method: 'POST',
    data: {
      password
    }
  }

  const result = await sendApiRequest(option);
  return result
};
