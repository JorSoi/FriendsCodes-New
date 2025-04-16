import { Tables } from "@/types/database.types";
import getEnvRootURL from "@/utils/getEnvRootURL";
import { format } from "date-fns";

export const generateCodeConversionHTML = (
  convertedReferrals: {
    name: string;
    logo_url: string | null;
    conversion_at: string;
    triggered_by: string | null;
  }[],
  profile: Tables<"profiles">
) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title>Referral Code Activity Notification</title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta name="color-scheme" content="light">
    <meta content="width=device-width" name="viewport" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <style type="text/css">
      table {
        border-collapse: separate;
        table-layout: fixed;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      table td {
        border-collapse: collapse;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      body,
      a,
      li,
      p,
      h1,
      h2,
      h3 {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      html {
        -webkit-text-size-adjust: none !important;
      }
      body,
      #innerTable {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #innerTable img + div {
        display: none;
        display: none !important;
      }
      img {
        margin: 0;
        padding: 0;
        -ms-interpolation-mode: bicubic;
      }
      h1,
      h2,
      h3,
      p,
      a {
        line-height: inherit;
        overflow-wrap: normal;
        white-space: normal;
        word-break: break-word;
      }
      a {
        text-decoration: none;
      }
      h1,
      h2,
      h3,
      p {
        min-width: 100% !important;
        width: 100% !important;
        max-width: 100% !important;
        display: inline-block !important;
        border: 0;
        padding: 0;
        margin: 0;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      u + #body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      a[href^="mailto"],
      a[href^="tel"],
      a[href^="sms"] {
        color: inherit;
        text-decoration: none;
      }
    </style>
    <style type="text/css">
      @media (min-width: 481px) {
        .hd {
          display: none !important;
        }
      }
    </style>
    <style type="text/css">
      @media (max-width: 480px) {
        .hm {
          display: none !important;
        }
      }
    </style>
    <style type="text/css">
      @media (max-width: 480px) {
        .t156,
        .t157 {
          display: block !important;
        }
        .t156,
        .t9 {
          text-align: center !important;
        }
        .t109 {
          padding: 30px 25px 40px !important;
        }
        .t111,
        .t16,
        .t174 {
          width: 480px !important;
        }
        .t22 {
          padding-bottom: 20px !important;
        }
        .t101,
        .t107,
        .t24,
        .t30,
        .t56,
        .t82,
        .t97 {
          width: 428px !important;
        }
        .t21 {
          line-height: 28px !important;
          letter-spacing: -1.04px !important;
          mso-text-raise: 2px !important;
        }
        .t172 {
          padding: 40px 30px !important;
        }
        .t116,
        .t162,
        .t170 {
          width: 420px !important;
        }
        .t113 {
          font-size: 18px !important;
          letter-spacing: -0.6px !important;
          mso-text-raise: 1px !important;
        }
        .t160 {
          padding-bottom: 36px !important;
        }
        .t120,
        .t122,
        .t126,
        .t128,
        .t132,
        .t134,
        .t139,
        .t141,
        .t145,
        .t147,
        .t151,
        .t153 {
          width: 5px !important;
          display: revert !important;
        }
        .t124,
        .t130,
        .t137,
        .t143,
        .t149,
        .t155 {
          vertical-align: top !important;
          display: inline-block !important;
          width: 100% !important;
          max-width: 60px !important;
        }
        .t36,
        .t4,
        .t49,
        .t61,
        .t74,
        .t8,
        .t89 {
          vertical-align: middle !important;
        }
        .t135,
        .t142,
        .t148,
        .t154 {
          width: 60px !important;
        }
        .t136 {
          mso-line-height-alt: 10px !important;
          line-height: 10px !important;
          display: block !important;
        }
        .t133 {
          padding: 17px !important;
        }
        .t13 {
          mso-line-height-alt: 40px !important;
          line-height: 40px !important;
        }
        .t2 {
          display: revert !important;
        }
        .t4 {
          width: 45px !important;
        }
        .t8 {
          width: auto !important;
          max-width: 100% !important;
        }
        .t5 {
          font-size: 21px !important;
          mso-text-raise: 6px !important;
        }
        .t50,
        .t75,
        .t90 {
          text-align: left !important;
        }
        .t36,
        .t61 {
          width: 55px !important;
        }
        .t49,
        .t74,
        .t89 {
          width: 600px !important;
        }
        .t47,
        .t72 {
          padding-right: 0 !important;
        }
        .t40,
        .t45,
        .t65,
        .t70 {
          width: 345px !important;
        }
        .t85,
        .t88 {
          mso-line-height-alt: 5px !important;
          line-height: 5px !important;
          display: block !important;
        }
      }
    </style>
    <!--[if !mso]>-->
    <link
      href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;700;800&amp;family=Albert+Sans:wght@500;600;700&amp;display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
  </head>
  <body
    id="body"
    class="t178"
    style="
      min-width: 100%;
      margin: 0px;
      padding: 0px;
      background-color: #09071c;
    "
  >
    <div
      style="
        display: none;
        font-size: 1px;
        color: #333333;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      Your referral code was just used! See the latest activity and keep earning
      rewards.&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
      &#8199;&#847; &#8199;&#847; &#8199;&#847; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
      &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &nbsp;
    </div>
    <div class="t177" style="background-color: #09071c">
      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        align="center"
      >
        <tr>
          <td
            class="t176"
            style="
              font-size: 0;
              line-height: 0;
              mso-line-height-rule: exactly;
              background-color: #09071c;
            "
            valign="top"
            align="center"
          >
            <!--[if mso]>
              <v:background
                xmlns:v="urn:schemas-microsoft-com:vml"
                fill="true"
                stroke="false"
              >
                <v:fill color="#09071C" />
              </v:background>
            <![endif]-->
            <table
              role="presentation"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              align="center"
              id="innerTable"
            >
              <tr>
                <td>
                  <div
                    class="t13"
                    style="
                      mso-line-height-rule: exactly;
                      mso-line-height-alt: 45px;
                      line-height: 45px;
                      font-size: 1px;
                      display: block;
                    "
                  >
                    &nbsp;&nbsp;
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table
                    class="t17"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    style="margin-left: auto; margin-right: auto"
                  >
                    <tr>
                      <!--[if mso]>
<td width="600" class="t16" style="width:600px;">
<![endif]-->
                      <!--[if !mso]>-->
                      <td class="t16" style="width: 600px">
                        <!--<![endif]-->
                        <table
                          class="t15"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="width: 100%"
                        >
                          <tr>
                            <td
                              class="t14"
                              style="padding: 20px 15px 20px 15px"
                            >
                              <div
                                class="t12"
                                style="width: 100%; text-align: center"
                              >
                                <div class="t11" style="display: inline-block">
                                  <table
                                    class="t10"
                                    role="presentation"
                                    cellpadding="0"
                                    cellspacing="0"
                                    align="center"
                                    valign="middle"
                                  >
                                    <tr class="t9">
                                      <td></td>
                                      <td class="t4" width="48" valign="middle">
                                        <table
                                          role="presentation"
                                          width="100%"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="t3"
                                          style="width: 100%"
                                        >
                                          <tr>
                                            <td class="t1">
                                              <div style="font-size: 0px">
                                                <img
                                                  class="t0"
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    height: auto;
                                                    width: 100%;
                                                    margin: 0;
                                                    max-width: 100%;
                                                  "
                                                  width="38"
                                                  height="38"
                                                  alt="FriendsCodes Logo"
                                                  src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/128534ec-ab8b-4c0e-96af-7133fa20b810.png"
                                                />
                                              </div>
                                            </td>
                                            <td
                                              class="t2"
                                              style="width: 10px"
                                              width="10"
                                            ></td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td class="t8" valign="middle">
                                        <table
                                          role="presentation"
                                          width="100%"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="t7"
                                          style="width: auto"
                                        >
                                          <tr>
                                            <td class="t6">
                                              <h1
                                                class="t5"
                                                style="
                                                  margin: 0;
                                                  margin: 0;
                                                  font-family:
                                                    Albert Sans,
                                                    BlinkMacSystemFont,
                                                    Segoe UI,
                                                    Helvetica Neue,
                                                    Arial,
                                                    sans-serif;
                                                  line-height: 41px;
                                                  font-weight: 700;
                                                  font-style: normal;
                                                  font-size: 23px;
                                                  text-decoration: none;
                                                  text-transform: none;
                                                  direction: ltr;
                                                  color: #ffffff;
                                                  text-align: center;
                                                  mso-line-height-rule: exactly;
                                                  mso-text-raise: 5px;
                                                "
                                              >
                                                FriendsCodes
                                              </h1>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td></td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    class="t18"
                    style="
                      mso-line-height-rule: exactly;
                      mso-line-height-alt: 10px;
                      line-height: 10px;
                      font-size: 1px;
                      display: block;
                    "
                  >
                    &nbsp;&nbsp;
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table
                    class="t112"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    style="margin-left: auto; margin-right: auto"
                  >
                    <tr>
                      <!--[if mso]>
<td width="600" class="t111" style="background-color:#21203D;border:1px solid #4A4457;overflow:hidden;width:600px;border-radius:20px 20px 20px 20px;">
<![endif]-->
                      <!--[if !mso]>-->
                      <td
                        class="t111"
                        style="
                          background-color: #21203d;
                          border: 1px solid #4a4457;
                          overflow: hidden;
                          width: 600px;
                          border-radius: 20px 20px 20px 20px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          class="t110"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="width: 100%"
                        >
                          <tr>
                            <td
                              class="t109"
                              style="padding: 50px 50px 50px 50px"
                            >
                              <table
                                role="presentation"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                style="width: 100% !important"
                              >
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t25"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="498" class="t24" style="width:498px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t24" style="width: 498px">
                                          <!--<![endif]-->
                                          <table
                                            class="t23"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td
                                                class="t22"
                                                style="padding: 0 0 15px 0"
                                              >
                                                <h1
                                                  class="t21"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family:
                                                      Figtree,
                                                      BlinkMacSystemFont,
                                                      Segoe UI,
                                                      Helvetica Neue,
                                                      Arial,
                                                      sans-serif;
                                                    line-height: 26px;
                                                    font-weight: 700;
                                                    font-style: normal;
                                                    font-size: 23px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    direction: ltr;
                                                    color: #ffffff;
                                                    text-align: left;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 1px;
                                                  "
                                                >
                                                  Great news! ${convertedReferrals.length == 1 ? "Your" : ""} 
                                                  <span
                                                    class="t19"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      color: #e900df;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    >"${convertedReferrals[0].name}" </span
                                                  >${convertedReferrals.length > 1 
                                                    ? `+${convertedReferrals.length - 1} more referrals were` 
                                                    : ' referral was'}
                                                  <span
                                                    class="t20"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      color: #e900df;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    >used</span
                                                  >
                                                  by another user. 🎉
                                                </h1>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t31"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="498" class="t30" style="width:498px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t30" style="width: 498px">
                                          <!--<![endif]-->
                                          <table
                                            class="t29"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td class="t28">
                                                <p
                                                  class="t27"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family:
                                                      Figtree,
                                                      BlinkMacSystemFont,
                                                      Segoe UI,
                                                      Helvetica Neue,
                                                      Arial,
                                                      sans-serif;
                                                    line-height: 22px;
                                                    font-weight: 500;
                                                    font-style: normal;
                                                    font-size: 15px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    letter-spacing: -0.3px;
                                                    direction: ltr;
                                                    color: #ffffff;
                                                    text-align: left;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 2px;
                                                  "
                                                >
                                                  Check
                                                  <span
                                                    class="t26"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    >${convertedReferrals[0].name}</span
                                                  >
                                                  ${convertedReferrals.length > 1 ? "& co" : ""} to see if your referral was
                                                  actually redeemed. Visit
                                                  your profile to learn more!
                                                </p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="t32"
                                      style="
                                        mso-line-height-rule: exactly;
                                        mso-line-height-alt: 25px;
                                        line-height: 25px;
                                        font-size: 1px;
                                        display: block;
                                      "
                                    >
                                      &nbsp;&nbsp;
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t102"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="498" class="t101" style="width:498px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t101" style="width: 498px">
                                          <!--<![endif]-->
                                          <table
                                            class="t100"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td class="t99">
                                                <table
                                                  role="presentation"
                                                  width="100%"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  style="width: 100% !important"
                                                >
                                                  <!-- Card Start -->
                                                  ${
                                                    convertedReferrals.map((referral) => generateReferralCard(referral.logo_url!, referral.name, referral.conversion_at, referral.triggered_by))
                                                  }
                                              
                                                   <!-- Card End -->
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="t103"
                                      style="
                                        mso-line-height-rule: exactly;
                                        mso-line-height-alt: 30px;
                                        line-height: 30px;
                                        font-size: 1px;
                                        display: block;
                                      "
                                    >
                                      &nbsp;&nbsp;
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t108"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="498" class="t107" style="background-color:#E900DF;overflow:hidden;width:498px;border-radius:15px 15px 15px 15px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td
                                          class="t107"
                                          style="
                                            background-color: #e900df;
                                            overflow: hidden;
                                            width: 498px;
                                            border-radius: 15px 15px 15px 15px;
                                          "
                                        >
                                          <!--<![endif]-->
                                          <table
                                            class="t106"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td
                                                class="t105"
                                                style="
                                                  text-align: center;
                                                  line-height: 44px;
                                                  mso-line-height-rule: exactly;
                                                  mso-text-raise: 10px;
                                                  padding: 3px 0 3px 0;
                                                "
                                              >
                                                <a
                                                  class="t104"
                                                  href="${getEnvRootURL()}/home?utm_source=email&utm_medium=notification&utm_campaign=referral-conversion"
                                                  style="
                                                    display: block;
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family:
                                                      Figtree,
                                                      BlinkMacSystemFont,
                                                      Segoe UI,
                                                      Helvetica Neue,
                                                      Arial,
                                                      sans-serif;
                                                    line-height: 44px;
                                                    font-weight: 700;
                                                    font-style: normal;
                                                    font-size: 12px;
                                                    text-decoration: none;
                                                    text-transform: uppercase;
                                                    direction: ltr;
                                                    color: #f8f8f8;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 10px;
                                                  "
                                                  target="_blank"
                                                  >Visit My Profile</a
                                                >
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table
                    class="t175"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    style="margin-left: auto; margin-right: auto"
                  >
                    <tr>
                      <!--[if mso]>
<td width="600" class="t174" style="width:600px;">
<![endif]-->
                      <!--[if !mso]>-->
                      <td class="t174" style="width: 600px">
                        <!--<![endif]-->
                        <table
                          class="t173"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="width: 100%"
                        >
                          <tr>
                            <td
                              class="t172"
                              style="padding: 48px 50px 48px 50px"
                            >
                              <table
                                role="presentation"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                style="width: 100% !important"
                              >
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t117"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="500" class="t116" style="width:500px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t116" style="width: 500px">
                                          <!--<![endif]-->
                                          <table
                                            class="t115"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td class="t114">
                                                <p
                                                  class="t113"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family:
                                                      Figtree,
                                                      BlinkMacSystemFont,
                                                      Segoe UI,
                                                      Helvetica Neue,
                                                      Arial,
                                                      sans-serif;
                                                    line-height: 22px;
                                                    font-weight: 700;
                                                    font-style: normal;
                                                    font-size: 16px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    direction: ltr;
                                                    color: #ffffff;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 2px;
                                                  "
                                                >
                                                  Boost your referrals &amp;
                                                  share your profile-link with others! 👇👇
                                                </p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="t118"
                                      style="
                                        mso-line-height-rule: exactly;
                                        mso-line-height-alt: 10px;
                                        line-height: 10px;
                                        font-size: 1px;
                                        display: block;
                                      "
                                    >
                                      &nbsp;&nbsp;
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t163"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="500" class="t162" style="width:500px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t162" style="width: 500px">
                                          <!--<![endif]-->
                                          <table
                                            class="t161"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td
                                                class="t160"
                                                style="padding: 10px 0 44px 0"
                                              >
                                                <div
                                                  class="t159"
                                                  style="
                                                    width: 100%;
                                                    text-align: center;
                                                  "
                                                >
                                                  <div
                                                    class="t158"
                                                    style="
                                                      display: inline-block;
                                                    "
                                                  >
                                                    <table
                                                      class="t157"
                                                      role="presentation"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      align="center"
                                                      valign="top"
                                                    >
                                                      <tr class="t156">
                                                        <td></td>
                                                        <td
                                                          class="t124"
                                                          width="60"
                                                          valign="top"
                                                        >
                                                          <table
                                                            role="presentation"
                                                            width="100%"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="t123"
                                                            style="width: 60px"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="t120"
                                                                style="
                                                                  display: none;
                                                                "
                                                                width="0"
                                                              ></td>
                                                              <td
                                                                class="t121"
                                                                style="
                                                                  overflow: hidden;
                                                                  background-color: #2c3147;
                                                                  padding: 15px
                                                                    15px 15px
                                                                    15px;
                                                                  border-radius: 100px
                                                                    100px 100px
                                                                    100px;
                                                                "
                                                              >
                                                                <a
                                                                  href="whatsapp://send?text=Join me on FriendsCodes! Lets swap referral codes and unlock rewards together!:${getEnvRootURL()}/invitation?friend=${profile.user_name}"
                                                                  style="
                                                                    font-size: 0px;
                                                                  "
                                                                  target="_blank"
                                                                  ><img
                                                                    class="t119"
                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      height: auto;
                                                                      width: 100%;
                                                                      margin: 0;
                                                                      max-width: 100%;
                                                                    "
                                                                    width="20"
                                                                    height="20"
                                                                    alt="WhatsApp"
                                                                    src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/d5d9e1b2-db4a-4625-9959-c56d48708983.png"
                                                                /></a>
                                                              </td>
                                                              <td
                                                                class="t122"
                                                                style="
                                                                  width: 10px;
                                                                "
                                                                width="10"
                                                              ></td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                        <td
                                                          class="t130"
                                                          width="60"
                                                          valign="top"
                                                        >
                                                          <table
                                                            role="presentation"
                                                            width="100%"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="t129"
                                                            style="width: 60px"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="t126"
                                                                style="
                                                                  display: none;
                                                                "
                                                                width="0"
                                                              ></td>
                                                              <td
                                                                class="t127"
                                                                style="
                                                                  overflow: hidden;
                                                                  background-color: #2c3147;
                                                                  padding: 15px
                                                                    15px 15px
                                                                    15px;
                                                                  border-radius: 100px
                                                                    100px 100px
                                                                    100px;
                                                                "
                                                              >
                                                                <a
                                                                  href="https://reddit.com/submit?url=${getEnvRootURL()}/invitation?friend=${profile.user_name}&title=Join me on FriendsCodes! Lets swap referral codes and unlock rewards"
                                                                  style="
                                                                    font-size: 0px;
                                                                  "
                                                                  target="_blank"
                                                                  ><img
                                                                    class="t125"
                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      height: auto;
                                                                      width: 100%;
                                                                      margin: 0;
                                                                      max-width: 100%;
                                                                    "
                                                                    width="20"
                                                                    height="20"
                                                                    alt="Reddit"
                                                                    src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/6333dda6-52c5-4a5d-b630-51c4735a6c03.png"
                                                                /></a>
                                                              </td>
                                                              <td
                                                                class="t128"
                                                                style="
                                                                  width: 10px;
                                                                "
                                                                width="10"
                                                              ></td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                        <td
                                                          class="t137"
                                                          width="60"
                                                          valign="top"
                                                        >
                                                          <table
                                                            role="presentation"
                                                            width="100%"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="t135"
                                                            style="width: 100%"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="t132"
                                                                style="
                                                                  display: none;
                                                                "
                                                                width="0"
                                                              ></td>
                                                              <td
                                                                class="t133"
                                                                style="
                                                                  overflow: hidden;
                                                                  background-color: #2c3147;
                                                                  padding: 15px
                                                                    15px 15px
                                                                    15px;
                                                                  border-radius: 100px
                                                                    100px 100px
                                                                    100px;
                                                                "
                                                              >
                                                                <a
                                                                  href="http://twitter.com/share?text=Join me on FriendsCodes! Lets swap referral codes and unlock rewards&url=${getEnvRootURL()}/invitation?friend=${profile.user_name}&hashtags=referralCodes,referral,redeem"
                                                                  style="
                                                                    font-size: 0px;
                                                                  "
                                                                  target="_blank"
                                                                  ><img
                                                                    class="t131"
                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      height: auto;
                                                                      width: 100%;
                                                                      margin: 0;
                                                                      max-width: 100%;
                                                                    "
                                                                    width="20"
                                                                    height="20"
                                                                    alt="Twitter"
                                                                    src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/a5e485bb-fd1d-4a4a-afb7-f4cc2ea38423.png"
                                                                /></a>
                                                              </td>
                                                              <td
                                                                class="t134"
                                                                style="
                                                                  width: 10px;
                                                                "
                                                                width="10"
                                                              ></td>
                                                            </tr>
                                                          </table>
                                                          <!--[if !mso]>-->
                                                          <div
                                                            class="t136"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              font-size: 1px;
                                                              display: none;
                                                            "
                                                          >
                                                            &nbsp;&nbsp;
                                                          </div>
                                                          <!--<![endif]-->
                                                        </td>
                                                        <td
                                                          class="t143"
                                                          width="60"
                                                          valign="top"
                                                        >
                                                          <table
                                                            role="presentation"
                                                            width="100%"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="t142"
                                                            style="width: 100%"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="t139"
                                                                style="
                                                                  display: none;
                                                                "
                                                                width="0"
                                                              ></td>
                                                              <td
                                                                class="t140"
                                                                style="
                                                                  overflow: hidden;
                                                                  background-color: #2c3147;
                                                                  padding: 15px
                                                                    15px 15px
                                                                    15px;
                                                                  border-radius: 100px
                                                                    100px 100px
                                                                    100px;
                                                                "
                                                              >
                                                                <a
                                                                  href="https://www.facebook.com/sharer/sharer.php?u&quote=Join me on FriendsCodes! Lets swap referral codes and unlock rewards: ${getEnvRootURL()}/invitation?friend=${profile.user_name}"
                                                                  style="
                                                                    font-size: 0px;
                                                                  "
                                                                  target="_blank"
                                                                  ><img
                                                                    class="t138"
                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      height: auto;
                                                                      width: 100%;
                                                                      margin: 0;
                                                                      max-width: 100%;
                                                                    "
                                                                    width="20"
                                                                    height="20"
                                                                    alt="Facebook"
                                                                    src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/b0a07710-e971-46ab-a7bf-49cedadc93b5.png"
                                                                /></a>
                                                              </td>
                                                              <td
                                                                class="t141"
                                                                style="
                                                                  width: 10px;
                                                                "
                                                                width="10"
                                                              ></td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                        <td
                                                          class="t149"
                                                          width="60"
                                                          valign="top"
                                                        >
                                                          <table
                                                            role="presentation"
                                                            width="100%"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="t148"
                                                            style="width: 100%"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="t145"
                                                                style="
                                                                  display: none;
                                                                "
                                                                width="0"
                                                              ></td>
                                                              <td
                                                                class="t146"
                                                                style="
                                                                  overflow: hidden;
                                                                  background-color: #2c3147;
                                                                  padding: 15px
                                                                    15px 15px
                                                                    15px;
                                                                  border-radius: 100px
                                                                    100px 100px
                                                                    100px;
                                                                "
                                                              >
                                                                <a
                                                                  href="https://telegram.me/share/url?url=${getEnvRootURL()}/invitation?friend=${profile.user_name}&text=Join me on FriendsCodes! Lets swap referral codes and unlock rewards."
                                                                  style="
                                                                    font-size: 0px;
                                                                  "
                                                                  target="_blank"
                                                                  ><img
                                                                    class="t144"
                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      height: auto;
                                                                      width: 100%;
                                                                      margin: 0;
                                                                      max-width: 100%;
                                                                    "
                                                                    width="20"
                                                                    height="20"
                                                                    alt="Telegram"
                                                                    src="https://03be62f9-5f5b-4494-8fc7-f55637796692.b-cdn.net/e/15277603-e0fd-4770-a82d-50e544dfbb93/2a52a1c6-0d29-42ad-86c1-65ce4b79d113.png"
                                                                /></a>
                                                              </td>
                                                              <td
                                                                class="t147"
                                                                style="
                                                                  width: 10px;
                                                                "
                                                                width="10"
                                                              ></td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <table
                                      class="t171"
                                      role="presentation"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tr>
                                        <!--[if mso]>
<td width="500" class="t170" style="width:500px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t170" style="width: 500px">
                                          <!--<![endif]-->
                                          <table
                                            class="t169"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="width: 100%"
                                          >
                                            <tr>
                                              <td class="t168">
                                                <p
                                                  class="t167"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family:
                                                      Figtree,
                                                      BlinkMacSystemFont,
                                                      Segoe UI,
                                                      Helvetica Neue,
                                                      Arial,
                                                      sans-serif;
                                                    line-height: 22px;
                                                    font-weight: 500;
                                                    font-style: normal;
                                                    font-size: 12px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    direction: ltr;
                                                    color: #777b8c;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 3px;
                                                  "
                                                >
                                                  <a
                                                    class="t164"
                                                    href="${getEnvRootURL()}/email-preferences?uid=${profile.id}"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      font-family:
                                                        Figtree,
                                                        BlinkMacSystemFont,
                                                        Segoe UI,
                                                        Helvetica Neue,
                                                        Arial,
                                                        sans-serif;
                                                      font-weight: 500;
                                                      font-style: normal;
                                                      text-decoration: none;
                                                      direction: ltr;
                                                      color: #777b8c;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    target="_blank"
                                                    >Manage Notifications</a
                                                  >&nbsp; •&nbsp;
                                                  <a
                                                    class="t165"
                                                    href="${getEnvRootURL()}/privacy-policy"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      font-family:
                                                        Figtree,
                                                        BlinkMacSystemFont,
                                                        Segoe UI,
                                                        Helvetica Neue,
                                                        Arial,
                                                        sans-serif;
                                                      font-weight: 500;
                                                      font-style: normal;
                                                      text-decoration: none;
                                                      direction: ltr;
                                                      color: #777b8c;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    target="_blank"
                                                    >Privacy policy</a
                                                  >&nbsp; •&nbsp;
                                                  <a
                                                    class="t166"
                                                    href="mailto:hello@friendscodes.app"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      font-family:
                                                        Figtree,
                                                        BlinkMacSystemFont,
                                                        Segoe UI,
                                                        Helvetica Neue,
                                                        Arial,
                                                        sans-serif;
                                                      font-weight: 500;
                                                      font-style: normal;
                                                      text-decoration: none;
                                                      direction: ltr;
                                                      color: #777b8c;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    >Contact us</a
                                                  >
                                                </p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <!--[if !mso]>-->
    <div itemscope itemtype="http://schema.org/EmailMessage">
      <meta itemprop="subjectLine" content="Your Referral Was Just Used! 🎟️" />
    </div>
    <!--<![endif]-->
    <div
      class="gmail-fix"
      style="
        display: none;
        white-space: nowrap;
        font: 15px courier;
        line-height: 0;
      "
    >
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  </body>
</html>`;

















const generateReferralCard = (logo_url: string, companyName: string, conversion_at: string, triggered_by: string | null) => `
<tr>
    <td align="center">
      <table
        class="t83"
        role="presentation"
        cellpadding="0"
        cellspacing="0"
        style="
          margin-left: auto;
          margin-right: auto;
        "
      >
        <tr>
          <!--[if mso]>
<td width="498" class="t82" style="background-color:#2F304A;border:1px solid #3C3D55;overflow:hidden;width:498px;border-radius:20px 20px 20px 20px;">
<![endif]-->
          <!--[if !mso]>-->
          <td
            class="t82"
            style="
              background-color: #2f304a;
              border: 1px solid
                #3c3d55;
              overflow: hidden;
              width: 498px;
              border-radius: 20px
                20px 20px 20px;
            "
          >
            <!--<![endif]-->
            <table
              class="t81"
              role="presentation"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="
                width: 100%;
              "
            >
              <tr>
                <td
                  class="t80"
                  style="
                    padding: 5px
                      8px 5px
                      8px;
                  "
                >
                  <div
                    class="t78"
                    style="
                      width: 100%;
                      text-align: left;
                    "
                  >
                    <div
                      class="t77"
                      style="
                        display: inline-block;
                      "
                    >
                      <table
                        class="t76"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        align="left"
                        valign="middle"
                      >
                        <tr
                          class="t75"
                        >
                          <td></td>
                          <td
                            class="t61"
                            width="55"
                            valign="middle"
                          >
                            <table
                              role="presentation"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              class="t60"
                              style="
                                width: 55px;
                              "
                            >
                              <tr>
                                <td
                                  class="t59"
                                  style="
                                    overflow: hidden;
                                    border-radius: 15px
                                      15px
                                      15px
                                      15px;
                                  "
                                >
                                  <div
                                    style="
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      class="t58"
                                      style="
                                        display: block;
                                        border: 0;
                                        height: auto;
                                        width: 100%;
                                        margin: 0;
                                        max-width: 100%;
                                      "
                                      width="55"
                                      height="55"
                                      alt=${companyName} Logo
                                      src=${logo_url}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="t74"
                            width="425"
                            valign="middle"
                          >
                            <table
                              role="presentation"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              class="t73"
                              style="
                                width: 100%;
                              "
                            >
                              <tr>
                                <td
                                  class="t72"
                                  style="
                                    padding: 8px
                                      20px
                                      8px
                                      10px;
                                  "
                                >
                                  <table
                                    role="presentation"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      width: 100% !important;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                      >
                                        <table
                                          class="t66"
                                          role="presentation"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                          "
                                        >
                                          <tr>
                                            <!--[if mso]>
<td width="394.99999999999994" class="t65" style="width:395px;">
<![endif]-->
                                            <!--[if !mso]>-->
                                            <td
                                              class="t65"
                                              style="
                                                width: 395px;
                                              "
                                            >
                                              <!--<![endif]-->
                                              <table
                                                class="t64"
                                                role="presentation"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="
                                                  width: 100%;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    class="t63"
                                                  >
                                                    <h1
                                                      class="t62"
                                                      style="
                                                        margin: 0;
                                                        margin: 0;
                                                        font-family:
                                                          Figtree,
                                                          BlinkMacSystemFont,
                                                          Segoe
                                                            UI,
                                                          Helvetica
                                                            Neue,
                                                          Arial,
                                                          sans-serif;
                                                        line-height: 23px;
                                                        font-weight: 700;
                                                        font-style: normal;
                                                        font-size: 18px;
                                                        text-decoration: none;
                                                        text-transform: none;
                                                        direction: ltr;
                                                        color: #ffffff;
                                                        text-align: left;
                                                        mso-line-height-rule: exactly;
                                                        mso-text-raise: 2px;
                                                      "
                                                    >
                                                      ${companyName}
                                                    </h1>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                      >
                                        <table
                                          class="t71"
                                          role="presentation"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                          "
                                        >
                                          <tr>
                                            <!--[if mso]>
<td width="394.99999999999994" class="t70" style="width:395px;">
<![endif]-->
                                            <!--[if !mso]>-->
                                            <td
                                              class="t70"
                                              style="
                                                width: 395px;
                                              "
                                            >
                                              <!--<![endif]-->
                                              <table
                                                class="t69"
                                                role="presentation"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="
                                                  width: 100%;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    class="t68"
                                                  >
                                                    <p
                                                      class="t67"
                                                      style="
                                                        margin: 0;
                                                        margin: 0;
                                                        font-family:
                                                          Albert
                                                            Sans,
                                                          BlinkMacSystemFont,
                                                          Segoe
                                                            UI,
                                                          Helvetica
                                                            Neue,
                                                          Arial,
                                                          sans-serif;
                                                        line-height: 22px;
                                                        font-weight: 500;
                                                        font-style: normal;
                                                        font-size: 14px;
                                                        text-decoration: none;
                                                        text-transform: none;
                                                        letter-spacing: -0.56px;
                                                        direction: ltr;
                                                        color: #adadad;
                                                        text-align: left;
                                                        mso-line-height-rule: exactly;
                                                        mso-text-raise: 2px;
                                                      "
                                                    >
                                                      Opened
                                                      by
                                                       ${triggered_by ?? "someone"}:
                                                      ${format(new Date(conversion_at), "MMMM do yyyy")}
                                                    </p>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <div
        class="t94"
        style="
          mso-line-height-rule: exactly;
          mso-line-height-alt: 10px;
          line-height: 10px;
          font-size: 1px;
          display: block;
        "
      >
        &nbsp;&nbsp;
      </div>
    </td>
  </tr>
`;
