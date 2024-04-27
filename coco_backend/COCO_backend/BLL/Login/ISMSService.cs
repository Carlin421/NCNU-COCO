using System.Runtime.InteropServices.JavaScript;

namespace COCO_backend.BLL.Login
{
    public interface ISMSService
    {
        /// <summary>
        /// 寄送簡訊並將資訊存入db T_VERIFY_CODE
        /// </summary>
        /// <param name="phoneNumber">手機號碼</param>
        /// <param name="smsType">簡訊驗證碼類型</param>
        /// <param name="userID">收件者T_USER.USER_ID，註冊簡訊為null</param>
        /// <returns></returns>
        Task<ResponseBase<string>> SendSMS(string phoneNumber, SMSType smsType, int? userID = null);

        /// <summary>
        /// 驗證簡訊驗證碼
        /// </summary>
        /// <param name="phoneNumber">手機號碼</param>
        /// <param name="code">驗證碼</param>
        /// <param name="smsType">簡訊驗證碼類型</param>
        /// <returns></returns>
        Task<ResponseBase<string>> VerifySMSCode(string phoneNumber, string code, SMSType smsType);

        /// <summary>
        /// 確認有無發送簡訊每日超過5次
        /// </summary>
        /// <param name="phoneNumber">手機號碼</param>
        /// <param name="smsType">簡訊驗證碼類型</param>
        /// <returns></returns>
        Task<ResponseBase<string>> CheckSendSmsCount(string phoneNumber, SMSType smsType);

        //TODO 測試用，待刪除
        Task<string?> GetSMSCode(string phoneNumber);
    }
}
