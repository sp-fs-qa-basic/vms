import sendApiRequest from "@/libs/instance"

//비밀번호 확인
export const postCheckAuth = async (id, password) => {
  const option = {
    endpoint : `/investments/${id}/userCheck`,
    method: 'POST',
    data: {
      password : password.password
    }
  }

  const result = await sendApiRequest(option);
  return result
};
