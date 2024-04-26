using COCO_backend.BLL.Login;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices.JavaScript;

namespace coco.Api.Controllers
{
    /// <summary>
    /// 會員註冊
    /// </summary>
    [Route("[controller]/[action]")]
    [ApiController]
    public class RegisterController : BaseController
    {
        private readonly ISMSService _smsService;
        private readonly IEmailService _emailService;
        private readonly IRegisterService _registerService;

        public RegisterController(ISMSService smsService, IEmailService emailService, IRegisterService registerService)
        {
            _smsService = smsService;
            _emailService = emailService;
            _registerService = registerService;
        }

        /// <summary>
        /// 發送手機驗證碼
        /// </summary>
        /// <param name="model">PhoneNumber 手機門號(國外門號請+國碼)</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> SendSMSCode([FromBody] SendSmsCodeRequest model)
        {
            var result = await _registerService.SendSMSCode(model);
            return Ok(result);
        }

        /// <summary>
        /// 發送信箱驗證碼
        /// </summary>
        /// <param name="model">信箱</param>
        /// <returns></returns>
        [HttpPost]

        public async Task<IActionResult> SendEmailCode([FromBody] SendEmailCodeRequest model)
        {
            var result = await _registerService.SendEmailCode(model);
            return Ok(result);
        }

        /// <summary>
        /// 驗證手機驗證碼
        /// </summary>
        /// <param name="model">SecurityCode 驗證碼<br/>PhoneNumber 手機門號(國外門號請+國碼)</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> VerifySMSCode([FromBody] VerifySmsCodeRequest model)
        {
            var result = await _smsService.VerifySMSCode(model.PhoneNumber, model.SecurityCode, SMSType.Register);
            return Ok(result);
        }

        /// <summary>
        /// 驗證信箱驗證碼
        /// </summary>
        /// <param name="model">SecurityCode 驗證碼&lt;br/&gt;Email 信箱</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> VerifyEmailCode([FromBody] VerifyEmailCodeRequest model)
        {
            var result = await _emailService.VerifyMailCode(model.Email, model.SecurityCode, EmailType.Register);
            return Ok(result);
        }

        /// <summary>
        /// 註冊
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [CaptchaVerification] //圖形驗證碼attribute
        public async Task<IActionResult> ChkRegister([FromBody] ChkRegisterRequest model)
        {
            //新增會員
            var result = await _registerService.ChkRegister(model);
            return Ok(result);
        }
    }
}
