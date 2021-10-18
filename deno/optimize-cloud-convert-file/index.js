import * as sdk from "https://deno.land/x/appwrite@0.4.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.0.0/mod.ts";

// Export dotenv file to Deno.env
config({ export: true });

const client = new sdk.Client();
client
  .setEndpoint(Deno.env.get("APPWRITE_API_ENDPOINT")) // Your API Endpoint
  .setProject(Deno.env.get("APPWRITE_PROJECT_ID")) // Your project ID
  .setKey(Deno.env.get("APPWRITE_API_KEY")); // Your secret API key

const jobs = {
  tasks: {
    "upload-file": {
      operation: "import/upload",
    },
    "optimize-file": {
      operation: "optimize",
      input: ["upload-file"],
    },
    "optimized-file-url": {
      operation: "export/url",
      input: ["optimize-file"],
      inline: false,
      archive_multiple_files: false,
    },
  },
};
