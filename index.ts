import cdk = require("aws-cdk-lib");
import * as dotenv from "dotenv";
dotenv.config();

import { CfnApp, CfnBranch } from "aws-cdk-lib/aws-amplify";
import { Construct } from "constructs";


export class AmplifyConsoleAppCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const APP_NAME = process.env.APP_NAME;
    if (!APP_NAME) {
      throw new Error("APP_NAME is not defined");
    }
    
    const DEV_CS_API_ACCESS_TOKEN = process.env.DEV_CS_API_ACCESS_TOKEN;
    if (!DEV_CS_API_ACCESS_TOKEN) {
      throw new Error("DEV_CS_API_ACCESS_TOKEN is not defined");
    }

    const MASTER_CS_API_ACCESS_TOKEN = process.env.MASTER_CS_API_ACCESS_TOKEN;
    if (!MASTER_CS_API_ACCESS_TOKEN) {
      throw new Error("MASTER_CS_API_ACCESS_TOKEN is not defined");
    }

    const DEV_FB_ACCESS_TOKEN = process.env.DEV_FB_ACCESS_TOKEN;
    if (!DEV_FB_ACCESS_TOKEN) {
      throw new Error("DEV_FB_ACCESS_TOKEN is not defined");
    }

    const MASTER_FB_ACCESS_TOKEN = process.env.MASTER_FB_ACCESS_TOKEN;
    if (!MASTER_FB_ACCESS_TOKEN) {
      throw new Error("MASTER_FB_ACCESS_TOKEN is not defined");
    }

    const DEV_GENERATE_WL_BUILD = process.env.DEV_GENERATE_WL_BUILD;
    if (!DEV_GENERATE_WL_BUILD) {
      throw new Error("DEV_GENERATE_WL_BUILD is not defined");
    }

    const MASTER_GENERATE_WL_BUILD = process.env.MASTER_GENERATE_WL_BUILD;
    if (!MASTER_GENERATE_WL_BUILD) {
      throw new Error("MASTER_GENERATE_WL_BUILD is not defined");
    }

    const DEV_GENERATE_SOURCEMAP = process.env.DEV_GENERATE_SOURCEMAP;
    if (!DEV_GENERATE_SOURCEMAP) {
      throw new Error("DEV_GENERATE_SOURCEMAP is not defined");
    }

    const MASTER_GENERATE_SOURCEMAP = process.env.MASTER_GENERATE_SOURCEMAP;
    if (!MASTER_GENERATE_SOURCEMAP) {
      throw new Error("MASTER_GENERATE_SOURCEMAP is not defined");
    }

    const DEV_MAX_FILE_SIZE_MB = process.env.DEV_MAX_FILE_SIZE_MB;
    if (!DEV_MAX_FILE_SIZE_MB) {
      throw new Error("DEV_MAX_FILE_SIZE_MB is not defined");
    }

    const MASTER_MAX_FILE_SIZE_MB = process.env.MASTER_MAX_FILE_SIZE_MB;
    if (!MASTER_MAX_FILE_SIZE_MB) {
      throw new Error("MASTER_MAX_FILE_SIZE_MB is not defined");
    }

    const DEV_NEXT_PUBLIC_APP_ENV = process.env.DEV_NEXT_PUBLIC_APP_ENV;
    if (!DEV_NEXT_PUBLIC_APP_ENV) {
      throw new Error("DEV_NEXT_PUBLIC_APP_ENV is not defined");
    }

    const MASTER_NEXT_PUBLIC_APP_ENV = process.env.MASTER_NEXT_PUBLIC_APP_ENV;
    if (!MASTER_NEXT_PUBLIC_APP_ENV) {
      throw new Error("MASTER_NEXT_PUBLIC_APP_ENV is not defined");
    }

    const DEV_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED = process.env.DEV_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED;
    if (!DEV_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED) {
      throw new Error("DEV_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED is not defined");
    }

    const MASTER_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED = process.env.MASTER_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED;
    if (!MASTER_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED) {
      throw new Error("MASTER_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED is not defined");
    }

    const DEV_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL = process.env.DEV_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL;
    if (!DEV_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL) {
      throw new Error("DEV_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL = process.env.MASTER_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL;
    if (!MASTER_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_COOKIE_DOMAIN = process.env.DEV_NEXT_PUBLIC_COOKIE_DOMAIN;
    if (!DEV_NEXT_PUBLIC_COOKIE_DOMAIN) {
      throw new Error("DEV_NEXT_PUBLIC_COOKIE_DOMAIN is not defined");
    }

    const MASTER_NEXT_PUBLIC_COOKIE_DOMAIN = process.env.MASTER_NEXT_PUBLIC_COOKIE_DOMAIN;
    if (!MASTER_NEXT_PUBLIC_COOKIE_DOMAIN) {
      throw new Error("MASTER_NEXT_PUBLIC_COOKIE_DOMAIN is not defined");
    }

    const DEV_NEXT_PUBLIC_DEFAULT_PRODUCT_URL = process.env.DEV_NEXT_PUBLIC_DEFAULT_PRODUCT_URL;
    if (!DEV_NEXT_PUBLIC_DEFAULT_PRODUCT_URL) {
      throw new Error("DEV_NEXT_PUBLIC_DEFAULT_PRODUCT_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_DEFAULT_PRODUCT_URL = process.env.MASTER_NEXT_PUBLIC_DEFAULT_PRODUCT_URL;
    if (!MASTER_NEXT_PUBLIC_DEFAULT_PRODUCT_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_DEFAULT_PRODUCT_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_DESIGNER_TOOL_URL = process.env.DEV_NEXT_PUBLIC_DESIGNER_TOOL_URL;
    if (!DEV_NEXT_PUBLIC_DESIGNER_TOOL_URL) {
      throw new Error("DEV_NEXT_PUBLIC_DESIGNER_TOOL_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_DESIGNER_TOOL_URL = process.env.MASTER_NEXT_PUBLIC_DESIGNER_TOOL_URL;
    if (!MASTER_NEXT_PUBLIC_DESIGNER_TOOL_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_DESIGNER_TOOL_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_FB_DEBUG = process.env.DEV_NEXT_PUBLIC_FB_DEBUG;
    if (!DEV_NEXT_PUBLIC_FB_DEBUG) {
      throw new Error("DEV_NEXT_PUBLIC_FB_DEBUG is not defined");
    }

    const MASTER_NEXT_PUBLIC_FB_DEBUG = process.env.MASTER_NEXT_PUBLIC_FB_DEBUG;
    if (!MASTER_NEXT_PUBLIC_FB_DEBUG) {
      throw new Error("MASTER_NEXT_PUBLIC_FB_DEBUG is not defined");
    }

    const DEV_NEXT_PUBLIC_FB_PIXEL_ID = process.env.DEV_NEXT_PUBLIC_FB_PIXEL_ID;
    if (!DEV_NEXT_PUBLIC_FB_PIXEL_ID) {
      throw new Error("DEV_NEXT_PUBLIC_FB_PIXEL_ID is not defined");
    }

    const MASTER_NEXT_PUBLIC_FB_PIXEL_ID = process.env.MASTER_NEXT_PUBLIC_FB_PIXEL_ID;
    if (!MASTER_NEXT_PUBLIC_FB_PIXEL_ID) {
      throw new Error("MASTER_NEXT_PUBLIC_FB_PIXEL_ID is not defined");
    }

    const DEV_NEXT_PUBLIC_GOOGLE_API = process.env.DEV_NEXT_PUBLIC_GOOGLE_API;
    if (!DEV_NEXT_PUBLIC_GOOGLE_API) {
      throw new Error("DEV_NEXT_PUBLIC_GOOGLE_API is not defined");
    }

    const MASTER_NEXT_PUBLIC_GOOGLE_API = process.env.MASTER_NEXT_PUBLIC_GOOGLE_API;
    if (!MASTER_NEXT_PUBLIC_GOOGLE_API) {
      throw new Error("MASTER_NEXT_PUBLIC_GOOGLE_API is not defined");
    }

    const DEV_NEXT_PUBLIC_GOOGLE_API_SERVER = process.env.DEV_NEXT_PUBLIC_GOOGLE_API_SERVER;
    if (!DEV_NEXT_PUBLIC_GOOGLE_API_SERVER) {
      throw new Error("DEV_NEXT_PUBLIC_GOOGLE_API_SERVER is not defined");
    }

    const MASTER_NEXT_PUBLIC_GOOGLE_API_SERVER = process.env.MASTER_NEXT_PUBLIC_GOOGLE_API_SERVER;
    if (!MASTER_NEXT_PUBLIC_GOOGLE_API_SERVER) {
      throw new Error("MASTER_NEXT_PUBLIC_GOOGLE_API_SERVER is not defined");
    }

    const DEV_NEXT_PUBLIC_GOOGLE_PLACE_KEY = process.env.DEV_NEXT_PUBLIC_GOOGLE_PLACE_KEY;
    if (!DEV_NEXT_PUBLIC_GOOGLE_PLACE_KEY) {
      throw new Error("DEV_NEXT_PUBLIC_GOOGLE_PLACE_KEY is not defined");
    }

    const MASTER_NEXT_PUBLIC_GOOGLE_PLACE_KEY = process.env.MASTER_NEXT_PUBLIC_GOOGLE_PLACE_KEY;
    if (!MASTER_NEXT_PUBLIC_GOOGLE_PLACE_KEY) {
      throw new Error("MASTER_NEXT_PUBLIC_GOOGLE_PLACE_KEY is not defined");
    }

    const DEV_NEXT_PUBLIC_GOOGLE_SHEET_URL = process.env.DEV_NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (!DEV_NEXT_PUBLIC_GOOGLE_SHEET_URL) {
      throw new Error("DEV_NEXT_PUBLIC_GOOGLE_SHEET_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_GOOGLE_SHEET_URL = process.env.MASTER_NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (!MASTER_NEXT_PUBLIC_GOOGLE_SHEET_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_GOOGLE_SHEET_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_HOME_SLUG = process.env.DEV_NEXT_PUBLIC_HOME_SLUG;
    if (!DEV_NEXT_PUBLIC_HOME_SLUG) {
      throw new Error("DEV_NEXT_PUBLIC_HOME_SLUG is not defined");
    }

    const MASTER_NEXT_PUBLIC_HOME_SLUG = process.env.MASTER_NEXT_PUBLIC_HOME_SLUG;
    if (!MASTER_NEXT_PUBLIC_HOME_SLUG) {
      throw new Error("MASTER_NEXT_PUBLIC_HOME_SLUG is not defined");
    }

    const DEV_NEXT_PUBLIC_KLAVIYO_TOKEN = process.env.DEV_NEXT_PUBLIC_KLAVIYO_TOKEN;
    if (!DEV_NEXT_PUBLIC_KLAVIYO_TOKEN) {
      throw new Error("DEV_NEXT_PUBLIC_KLAVIYO_TOKEN is not defined");
    }

    const MASTER_NEXT_PUBLIC_KLAVIYO_TOKEN = process.env.MASTER_NEXT_PUBLIC_KLAVIYO_TOKEN;
    if (!MASTER_NEXT_PUBLIC_KLAVIYO_TOKEN) {
      throw new Error("MASTER_NEXT_PUBLIC_KLAVIYO_TOKEN is not defined");
    }

    const DEV_NEXT_PUBLIC_KLAVIYO_URL = process.env.DEV_NEXT_PUBLIC_KLAVIYO_URL;
    if (!DEV_NEXT_PUBLIC_KLAVIYO_URL) {
      throw new Error("DEV_NEXT_PUBLIC_KLAVIYO_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_KLAVIYO_URL = process.env.MASTER_NEXT_PUBLIC_KLAVIYO_URL;
    if (!MASTER_NEXT_PUBLIC_KLAVIYO_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_KLAVIYO_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID = process.env.DEV_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID;
    if (!DEV_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID) {
      throw new Error("DEV_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID is not defined");
    }

    const MASTER_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID = process.env.MASTER_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID;
    if (!MASTER_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID) {
      throw new Error("MASTER_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID is not defined");
    }

    const DEV_NEXT_PUBLIC_MY_ACCOUNT_URL = process.env.DEV_NEXT_PUBLIC_MY_ACCOUNT_URL;
    if (!DEV_NEXT_PUBLIC_MY_ACCOUNT_URL) {
      throw new Error("DEV_NEXT_PUBLIC_MY_ACCOUNT_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_MY_ACCOUNT_URL = process.env.MASTER_NEXT_PUBLIC_MY_ACCOUNT_URL;
    if (!MASTER_NEXT_PUBLIC_MY_ACCOUNT_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_MY_ACCOUNT_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL = process.env.DEV_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL;
    if (!DEV_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL) {
      throw new Error("DEV_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL = process.env.MASTER_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL;
    if (!MASTER_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_ORDER_SERVICE_URL = process.env.DEV_NEXT_PUBLIC_ORDER_SERVICE_URL;
    if (!DEV_NEXT_PUBLIC_ORDER_SERVICE_URL) {
      throw new Error("DEV_NEXT_PUBLIC_ORDER_SERVICE_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_ORDER_SERVICE_URL = process.env.MASTER_NEXT_PUBLIC_ORDER_SERVICE_URL;
    if (!MASTER_NEXT_PUBLIC_ORDER_SERVICE_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_ORDER_SERVICE_URL is not defined");
    }

    const DEV_NEXT_PUBLIC_STORE_NAME = process.env.DEV_NEXT_PUBLIC_STORE_NAME;
    if (!DEV_NEXT_PUBLIC_STORE_NAME) {
      throw new Error("DEV_NEXT_PUBLIC_STORE_NAME is not defined");
    }

    const MASTER_NEXT_PUBLIC_STORE_NAME = process.env.MASTER_NEXT_PUBLIC_STORE_NAME;
    if (!MASTER_NEXT_PUBLIC_STORE_NAME) {
      throw new Error("MASTER_NEXT_PUBLIC_STORE_NAME is not defined");
    }

    const DEV_NEXT_PUBLIC_STORE_ORIGIN = process.env.DEV_NEXT_PUBLIC_STORE_ORIGIN;
    if (!DEV_NEXT_PUBLIC_STORE_ORIGIN) {
      throw new Error("DEV_NEXT_PUBLIC_STORE_ORIGIN is not defined");
    }

    const MASTER_NEXT_PUBLIC_STORE_ORIGIN = process.env.MASTER_NEXT_PUBLIC_STORE_ORIGIN;
    if (!MASTER_NEXT_PUBLIC_STORE_ORIGIN) {
      throw new Error("MASTER_NEXT_PUBLIC_STORE_ORIGIN is not defined");
    }

    const DEV_NEXT_PUBLIC_STORE_PREFIX = process.env.DEV_NEXT_PUBLIC_STORE_PREFIX;
    if (!DEV_NEXT_PUBLIC_STORE_PREFIX) {
      throw new Error("DEV_NEXT_PUBLIC_STORE_PREFIX is not defined");
    }

    const MASTER_NEXT_PUBLIC_STORE_PREFIX = process.env.MASTER_NEXT_PUBLIC_STORE_PREFIX;
    if (!MASTER_NEXT_PUBLIC_STORE_PREFIX) {
      throw new Error("MASTER_NEXT_PUBLIC_STORE_PREFIX is not defined");
    }

    const DEV_NEXT_PUBLIC_STRAPI_API_TOKEN = process.env.DEV_NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!DEV_NEXT_PUBLIC_STRAPI_API_TOKEN) {
      throw new Error("DEV_NEXT_PUBLIC_STRAPI_API_TOKEN is not defined");
    }

    const MASTER_NEXT_PUBLIC_STRAPI_API_TOKEN = process.env.MASTER_NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!MASTER_NEXT_PUBLIC_STRAPI_API_TOKEN) {
      throw new Error("MASTER_NEXT_PUBLIC_STRAPI_API_TOKEN is not defined");
    }

    const DEV_NEXT_PUBLIC_STRAPI_SERVER_URL = process.env.DEV_NEXT_PUBLIC_STRAPI_SERVER_URL;
    if (!DEV_NEXT_PUBLIC_STRAPI_SERVER_URL) {
      throw new Error("DEV_NEXT_PUBLIC_STRAPI_SERVER_URL is not defined");
    }

    const MASTER_NEXT_PUBLIC_STRAPI_SERVER_URL = process.env.MASTER_NEXT_PUBLIC_STRAPI_SERVER_URL;
    if (!MASTER_NEXT_PUBLIC_STRAPI_SERVER_URL) {
      throw new Error("MASTER_NEXT_PUBLIC_STRAPI_SERVER_URL is not defined");
    }

    const DEV_NEXT_STRAPI_FILE_DOMAIN_URL = process.env.DEV_NEXT_STRAPI_FILE_DOMAIN_URL;
    if (!DEV_NEXT_STRAPI_FILE_DOMAIN_URL) {
      throw new Error("DEV_NEXT_STRAPI_FILE_DOMAIN_URL is not defined");
    }

    const MASTER_NEXT_STRAPI_FILE_DOMAIN_URL = process.env.MASTER_NEXT_STRAPI_FILE_DOMAIN_URL;
    if (!MASTER_NEXT_STRAPI_FILE_DOMAIN_URL) {
      throw new Error("MASTER_NEXT_STRAPI_FILE_DOMAIN_URL is not defined");
    }

    const DEV_NODE_OPTIONS = process.env.DEV_NODE_OPTIONS;
    if (!DEV_NODE_OPTIONS) {
      throw new Error("DEV_NODE_OPTIONS is not defined");
    }

    const MASTER_NODE_OPTIONS = process.env.MASTER_NODE_OPTIONS;
    if (!MASTER_NODE_OPTIONS) {
      throw new Error("MASTER_NODE_OPTIONS is not defined");
    }

    const DEV_NPM_CONFIG_TOKEN = process.env.DEV_NPM_CONFIG_TOKEN;
    if (!DEV_NPM_CONFIG_TOKEN) {
      throw new Error("DEV_NPM_CONFIG_TOKEN is not defined");
    }

    const MASTER_NPM_CONFIG_TOKEN = process.env.MASTER_NPM_CONFIG_TOKEN;
    if (!MASTER_NPM_CONFIG_TOKEN) {
      throw new Error("MASTER_NPM_CONFIG_TOKEN is not defined");
    }

    const DEV_SENTRY_AUTH_TOKEN = process.env.DEV_SENTRY_AUTH_TOKEN;
    if (!DEV_SENTRY_AUTH_TOKEN) {
      throw new Error("DEV_SENTRY_AUTH_TOKEN is not defined");
    }

    const MASTER_SENTRY_AUTH_TOKEN = process.env.MASTER_SENTRY_AUTH_TOKEN;
    if (!MASTER_SENTRY_AUTH_TOKEN) {
      throw new Error("MASTER_SENTRY_AUTH_TOKEN is not defined");
    }


    const DEV_SENTRY_ORG = process.env.DEV_SENTRY_ORG;
    if (!DEV_SENTRY_ORG) {
      throw new Error("DEV_SENTRY_ORG is not defined");
    }

    const MASTER_SENTRY_ORG = process.env.MASTER_SENTRY_ORG;
    if (!MASTER_SENTRY_ORG) {
      throw new Error("MASTER_SENTRY_ORG is not defined");
    }

    const DEV_SENTRY_PROJECT = process.env.DEV_SENTRY_PROJECT;
    if (!DEV_SENTRY_PROJECT) {
      throw new Error("DEV_SENTRY_PROJECT is not defined");
    }

    const MASTER_SENTRY_PROJECT = process.env.MASTER_SENTRY_PROJECT;
    if (!MASTER_SENTRY_PROJECT) {
      throw new Error("MASTER_SENTRY_PROJECT is not defined");
    }

    const DEV_USER_DISABLE_TESTS = process.env.DEV_USER_DISABLE_TESTS;
    if (!DEV_USER_DISABLE_TESTS) {
      throw new Error("DEV_USER_DISABLE_TESTS is not defined");
    }

    const MASTER_USER_DISABLE_TESTS = process.env.MASTER_USER_DISABLE_TESTS;
    if (!MASTER_USER_DISABLE_TESTS) {
      throw new Error("MASTER_USER_DISABLE_TESTS is not defined");
    }

    const DEV_USER_BRANCH = process.env.DEV_USER_BRANCH;
    if (!DEV_USER_BRANCH) {
      throw new Error("DEV_USER_BRANCH is not defined");
    }

    const MASTER_USER_BRANCH = process.env.MASTER_USER_BRANCH;
    if (!MASTER_USER_BRANCH) {
      throw new Error("MASTER_USER_BRANCH is not defined");
    }



    const amplifyApp = new CfnApp(this, "test-app", {
      name: APP_NAME,
      repository: "https://github.com/OlagunjuIsmail/exam-app-reminder",
      oauthToken: process.env.OAUTH_TOKEN,
      customRules: [
        {
          source: "/source/path",
          target: "/target/path",
          status: "302"
        },
        {
          source: "/source/path/*",
          target: "/target/path/",
          status: "200"
        },
      ],
    });

    new CfnBranch(this, "MainBranch", {
      appId: amplifyApp.attrAppId,
      branchName: "main", 
      environmentVariables: [
        // master
        {
          name: "CS_API_ACCESS_TOKEN",
          value: MASTER_CS_API_ACCESS_TOKEN,
        },
        {
          name: "FB_ACCESS_TOKEN",
          value: MASTER_FB_ACCESS_TOKEN,
        },
        {
          name: "GENERATE_SOURCEMAP",
          value: MASTER_GENERATE_SOURCEMAP,
        },
        {
          name: "GENERATE_WL_BUILD",
          value: MASTER_GENERATE_WL_BUILD,
        },
        {
          name: "MAX_FILE_SIZE_MB",
          value: MASTER_MAX_FILE_SIZE_MB,
        },
        {
          name: "NEXT_PUBLIC_APP_ENV",
          value: MASTER_NEXT_PUBLIC_APP_ENV,
        },
        {
          name: "NEXT_PUBLIC_CONSOLE_LOGS_ENABLED",
          value: MASTER_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED,
        },
        {
          name: "NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL",
          value: MASTER_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_COOKIE_DOMAIN",
          value: MASTER_NEXT_PUBLIC_COOKIE_DOMAIN,
        },
        {
          name: "NEXT_PUBLIC_DEFAULT_PRODUCT_URL",
          value: MASTER_NEXT_PUBLIC_DEFAULT_PRODUCT_URL,
        },
        {
          name: "NEXT_PUBLIC_DESIGNER_TOOL_URL",
          value: MASTER_NEXT_PUBLIC_DESIGNER_TOOL_URL,
        },
        {
          name: "NEXT_PUBLIC_FB_DEBUG",
          value: MASTER_NEXT_PUBLIC_FB_DEBUG,
        },
        {
          name: "NEXT_PUBLIC_FB_PIXEL_ID",
          value: MASTER_NEXT_PUBLIC_FB_PIXEL_ID,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_API",
          value: MASTER_NEXT_PUBLIC_GOOGLE_API,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_API_SERVER",
          value: MASTER_NEXT_PUBLIC_GOOGLE_API_SERVER,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_PLACE_KEY",
          value: MASTER_NEXT_PUBLIC_GOOGLE_PLACE_KEY,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_SHEET_URL",
          value: MASTER_NEXT_PUBLIC_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_HOME_SLUG",
          value: MASTER_NEXT_PUBLIC_HOME_SLUG,
        },
        {
          name: "NEXT_PUBLIC_KLAVIYO_TOKEN",
          value: MASTER_NEXT_PUBLIC_KLAVIYO_TOKEN,
        },
        {
          name: "NEXT_PUBLIC_KLAVIYO_URL",
          value: MASTER_NEXT_PUBLIC_KLAVIYO_URL,
        },
        {
          name: "NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID",
          value: MASTER_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID,
        },
        {
          name: "NEXT_PUBLIC_MY_ACCOUNT_URL",
          value: MASTER_NEXT_PUBLIC_MY_ACCOUNT_URL,
        },
        {
          name: "NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL",
          value: MASTER_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_ORDER_SERVICE_URL",
          value: MASTER_NEXT_PUBLIC_ORDER_SERVICE_URL,
        },
        {
          name: "NEXT_PUBLIC_STORE_NAME",
          value: MASTER_NEXT_PUBLIC_STORE_NAME,
        },
        {
          name: "NEXT_PUBLIC_STORE_ORIGIN",
          value: MASTER_NEXT_PUBLIC_STORE_ORIGIN,
        },
        {
          name: "NEXT_PUBLIC_STORE_PREFIX",
          value: MASTER_NEXT_PUBLIC_STORE_PREFIX,
        },
        {
          name: "NEXT_PUBLIC_STRAPI_API_TOKEN",
          value: MASTER_NEXT_PUBLIC_STRAPI_API_TOKEN,
        },
        {
          name: "NEXT_PUBLIC_STRAPI_SERVER_URL",
          value: MASTER_NEXT_PUBLIC_STRAPI_SERVER_URL,
        },
        {
          name: "NEXT_STRAPI_FILE_DOMAIN_URL",
          value: MASTER_NEXT_STRAPI_FILE_DOMAIN_URL,
        },
        {
          name: "NODE_OPTIONS",
          value: MASTER_NODE_OPTIONS,
        },
        {
          name: "NPM_CONFIG_TOKEN",
          value: MASTER_NPM_CONFIG_TOKEN,
        },
        {
          name: "SENTRY_AUTH_TOKEN",
          value: MASTER_SENTRY_AUTH_TOKEN,
        },
        {
          name: "SENTRY_ORG",
          value: MASTER_SENTRY_ORG,
        },
        {
          name: "SENTRY_PROJECT",
          value: MASTER_SENTRY_PROJECT,
        },
        {
          name: "USER_DISABLE_TESTS",
          value: MASTER_USER_DISABLE_TESTS,
        },
        {
          name: "USER_BRANCH",
          value: MASTER_USER_BRANCH,
        },
      ],
    });

    new CfnBranch(this, "DevBranch", {
      appId: amplifyApp.attrAppId,
      branchName: "dev",
      environmentVariables: [
        // dev
        {
          name: "CS_API_ACCESS_TOKEN",
          value: DEV_CS_API_ACCESS_TOKEN,
        },
        {
          name: "FB_ACCESS_TOKEN",
          value: DEV_FB_ACCESS_TOKEN,
        },
        {
          name: "GENERATE_SOURCEMAP",
          value: DEV_GENERATE_SOURCEMAP,
        },
        {
          name: "GENERATE_WL_BUILD",
          value: DEV_GENERATE_WL_BUILD,
        },
        {
          name: "MAX_FILE_SIZE_MB",
          value: DEV_MAX_FILE_SIZE_MB,
        },
        {
          name: "NEXT_PUBLIC_APP_ENV",
          value: DEV_NEXT_PUBLIC_APP_ENV,
        },
        {
          name: "NEXT_PUBLIC_CONSOLE_LOGS_ENABLED",
          value: DEV_NEXT_PUBLIC_CONSOLE_LOGS_ENABLED,
        },
        {
          name: "NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL",
          value: DEV_NEXT_PUBLIC_CONTACT_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_COOKIE_DOMAIN",
          value: DEV_NEXT_PUBLIC_COOKIE_DOMAIN,
        },
        {
          name: "NEXT_PUBLIC_DEFAULT_PRODUCT_URL",
          value: DEV_NEXT_PUBLIC_DEFAULT_PRODUCT_URL,
        },
        {
          name: "NEXT_PUBLIC_DESIGNER_TOOL_URL",
          value: DEV_NEXT_PUBLIC_DESIGNER_TOOL_URL,
        },
        {
          name: "NEXT_PUBLIC_FB_DEBUG",
          value: DEV_NEXT_PUBLIC_FB_DEBUG,
        },
        {
          name: "NEXT_PUBLIC_FB_PIXEL_ID",
          value: DEV_NEXT_PUBLIC_FB_PIXEL_ID,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_API",
          value: DEV_NEXT_PUBLIC_GOOGLE_API,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_API_SERVER",
          value: DEV_NEXT_PUBLIC_GOOGLE_API_SERVER,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_PLACE_KEY",
          value: DEV_NEXT_PUBLIC_GOOGLE_PLACE_KEY,
        },
        {
          name: "NEXT_PUBLIC_GOOGLE_SHEET_URL",
          value: DEV_NEXT_PUBLIC_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_HOME_SLUG",
          value: DEV_NEXT_PUBLIC_HOME_SLUG,
        },
        {
          name: "NEXT_PUBLIC_KLAVIYO_TOKEN",
          value: DEV_NEXT_PUBLIC_KLAVIYO_TOKEN,
        },
        {
          name: "NEXT_PUBLIC_KLAVIYO_URL",
          value: DEV_NEXT_PUBLIC_KLAVIYO_URL,
        },
        {
          name: "NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID",
          value: DEV_NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_ID,
        },
        {
          name: "NEXT_PUBLIC_MY_ACCOUNT_URL",
          value: DEV_NEXT_PUBLIC_MY_ACCOUNT_URL,
        },
        {
          name: "NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL",
          value: DEV_NEXT_PUBLIC_NEWSLETTER_GOOGLE_SHEET_URL,
        },
        {
          name: "NEXT_PUBLIC_ORDER_SERVICE_URL",
          value: DEV_NEXT_PUBLIC_ORDER_SERVICE_URL,
        },
        {
          name: "NEXT_PUBLIC_STORE_NAME",
          value: DEV_NEXT_PUBLIC_STORE_NAME,
        },
        {
          name: "NEXT_PUBLIC_STORE_ORIGIN",
          value: DEV_NEXT_PUBLIC_STORE_ORIGIN,
        },
        {
          name: "NEXT_PUBLIC_STORE_PREFIX",
          value: DEV_NEXT_PUBLIC_STORE_PREFIX,
        },
        {
          name: "NEXT_PUBLIC_STRAPI_API_TOKEN",
          value: DEV_NEXT_PUBLIC_STRAPI_API_TOKEN,
        },
        {
          name: "NEXT_PUBLIC_STRAPI_SERVER_URL",
          value: DEV_NEXT_PUBLIC_STRAPI_SERVER_URL,
        },
        {
          name: "NEXT_STRAPI_FILE_DOMAIN_URL",
          value: DEV_NEXT_STRAPI_FILE_DOMAIN_URL,
        },
        {
          name: "NODE_OPTIONS",
          value: DEV_NODE_OPTIONS,
        },
        {
          name: "NPM_CONFIG_TOKEN",
          value: DEV_NPM_CONFIG_TOKEN,
        },
        {
          name: "SENTRY_AUTH_TOKEN",
          value: DEV_SENTRY_AUTH_TOKEN,
        },
        {
          name: "SENTRY_ORG",
          value: DEV_SENTRY_ORG,
        },
        {
          name: "SENTRY_PROJECT",
          value: DEV_SENTRY_PROJECT,
        },
        {
          name: "USER_DISABLE_TESTS",
          value: DEV_USER_DISABLE_TESTS,
        },
        {
          name: "USER_BRANCH",
          value: DEV_USER_BRANCH,
        },
      ],
    });
  }
}

const app = new cdk.App();
new AmplifyConsoleAppCdkStack(app, "AmplifyConsoleApp");
app.synth();
