using Microsoft.AspNetCore.Mvc;

namespace coco.Api.Controllers
{
    /// <summary>
    /// Controller繼承底層
    /// </summary>
    public class BaseController : ControllerBase
    {
        /// <summary>
        /// 會員資訊
        /// </summary>
        protected JWTPayload JWTPayload => HttpContext.Items["jwtPayload"] as JWTPayload ?? new JWTPayload();
    }
}
