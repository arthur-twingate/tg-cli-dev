import {Command, EnumType} from "https://deno.land/x/cliffy/command/mod.ts";
import {loadNetworkAndApiKey} from "../../utils/smallUtilFuncs.mjs";
import {TwingateApiClient} from "../../TwingateApiClient.mjs";
import {Log} from "../../utils/log.js";
import {deployTerraformCommand} from "./terraform.mjs";


export const deployCmd = new Command()
    .option("-y, --assume-yes [boolean]", "Automatic yes to prompts; assume 'yes' as answer to all prompts", {global: true})
    .description("Deploy Twingate to various targets")
    .action(async (options) => {
        const {networkName, apiKey} = await loadNetworkAndApiKey(options.accountName);
        options.apiKey = apiKey;
        options.client = new TwingateApiClient(networkName, apiKey, {logger: Log});
    });

deployCmd.command("terraform", deployTerraformCommand);