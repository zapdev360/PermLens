function TermsOfService() {
  return (
    <section className="mt-6 space-y-6 text-sm text-gray-200 sm:mt-8 sm:text-base">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Terms of Service
        </h2>
        <p className="text-xs text-gray-400 sm:text-sm">
          Last updated: February 7, 2026
        </p>
      </header>

      <div>
        <p>
          These Terms of Service govern your access to and use of PermLens. By using the
          service, you agree to these terms.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          1. Description of the Service
        </h3>
        <p className="mt-2">
          PermLens is a read-only informational service that analyzes publicly available
          GitHub App metadata and declared permissions to generate privacy-style summaries.
          It is intended to improve transparency and understanding of permission scope.
        </p>
        <p className="mt-2">
          PermLens is not affiliated with, endorsed by, or operated by GitHub, Inc.
          GitHub is a trademark of GitHub, Inc.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          2. Informational Use Only
        </h3>
        <p className="mt-2">
          All outputs produced by PermLens are informational only. PermLens does not
          inspect source code, runtime behavior, network activity, or actual data usage
          by GitHub Apps.
        </p>
        <p className="mt-2">
          PermLens reflects what an app declares, not what it actually does. The service
          does not guarantee security, safety, compliance, or correctness.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          3. User Responsibilities
        </h3>
        <p className="mt-2">
          You are responsible for how you interpret and use information provided by
          PermLens. You agree to use the service only for lawful purposes and in compliance
          with applicable laws and GitHub’s terms and policies.
        </p>
        <p className="mt-2">
          You may not attempt to disrupt, abuse, overload, or reverse engineer the
          service.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          4. Availability and Changes
        </h3>
        <p className="mt-2">
          PermLens is provided on an experimental basis. The service may be modified,
          suspended, or discontinued at any time, with or without notice. Availability
          is not guaranteed.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          5. Disclaimer of Warranties
        </h3>
        <p className="mt-2">
          PermLens is provided on an “as is” and “as available” basis, without warranties
          of any kind, express or implied, including accuracy, completeness, or fitness
          for a particular purpose.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          6. Limitation of Liability
        </h3>
        <p className="mt-2">
          To the maximum extent permitted by law, PermLens shall not be liable for any
          indirect, incidental, consequential, or special damages arising from or related
          to your use of the service.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          7. Changes to These Terms
        </h3>
        <p className="mt-2">
          These Terms of Service may be updated from time to time. Continued use of
          PermLens after changes take effect constitutes acceptance of the updated terms.
        </p>
      </div>
    </section>
  );
}

export default TermsOfService;