function PrivacyPolicy() {
  return (
    <section className="mt-6 space-y-6 text-sm text-gray-200 sm:mt-8 sm:text-base">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Privacy Policy
        </h2>
        <p className="text-xs text-gray-400 sm:text-sm">
          Last updated: February 7, 2026
        </p>
      </header>

      <div>
        <p>
          PermLens is a read-only transparency service that analyzes publicly available
          GitHub App metadata to generate privacy-style summaries of declared permissions.
          This Privacy Policy explains what limited information is processed when you use
          PermLens and how that information is handled.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          1. Information We Collect
        </h3>
        <p className="mt-2">
          PermLens collects only the minimum information required to operate the service.
          This may include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-gray-300 sm:text-sm">
          <li>GitHub App slugs submitted for inspection</li>
          <li>Request timestamps and basic request metadata</li>
          <li>In-memory cache metadata for previously generated labels</li>
          <li>IP addresses and connection information provided by our hosting provider</li>
        </ul>
        <p className="mt-2">
          PermLens does not collect GitHub credentials, authentication tokens, personal
          user accounts, repository contents, or private organization data.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          2. How Information Is Used
        </h3>
        <p className="mt-2">
          Collected information is used solely to:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-gray-300 sm:text-sm">
          <li>Resolve GitHub Apps and fetch declared permissions</li>
          <li>Generate privacy-label-style summaries</li>
          <li>Reduce redundant API calls through short-term caching</li>
          <li>Monitor reliability, rate limits, and abuse</li>
        </ul>
        <p className="mt-2">
          PermLens does not use collected information for advertising, tracking, or user
          profiling.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          3. Use of GitHub and Third Parties
        </h3>
        <p className="mt-2">
          PermLens relies on third-party services to function:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-gray-300 sm:text-sm">
          <li>GitHub API, to retrieve public GitHub App metadata</li>
          <li>Vercel, for hosting, request handling, and logging</li>
        </ul>
        <p className="mt-2">
          These services may process technical data in accordance with their own privacy
          policies. PermLens is not affiliated with GitHub, Inc.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          4. Data Retention
        </h3>
        <p className="mt-2">
          PermLens retains data only for as long as necessary to provide the service.
          Cached label data may be stored temporarily in memory to improve performance
          and reduce GitHub API usage. Cached data may be cleared automatically.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          5. Security
        </h3>
        <p className="mt-2">
          PermLens uses reasonable technical measures to protect the limited information
          it processes. However, no system is completely secure, and we cannot guarantee
          absolute security of transmitted or stored data.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          6. Changes to This Policy
        </h3>
        <p className="mt-2">
          This Privacy Policy may be updated from time to time. Any changes will be posted
          on this page with an updated effective date.
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;