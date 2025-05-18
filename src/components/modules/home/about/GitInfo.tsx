/* eslint-disable @next/next/no-img-element */

export default function GitInfo() {
  return (
    <>
      <div className=" mx-2 backdrop-blur rounded-lg my-4">
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shihab-2021&theme=transparent`}
          alt="github top-langs"
          className="w-full border border-gray-200 rounded-md shadow-md"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" mx-2 backdrop-blur rounded-lg">
          <img
            className="w-full border border-gray-200 rounded-md shadow-md"
            src={`https://github-readme-stats.vercel.app/api?username=shihab-2021&show_icons=true&include_all_commits=true&theme=transparent&hide_border=true`}
            alt="shihab-2021"
          />
        </div>
        <div className=" mx-2 backdrop-blur rounded-lg mt-4 md:mt-0 shadow-md">
          <img
            className="w-full border border-gray-200 rounded-md"
            src={`https://github-readme-stats.vercel.app/api?username=shihab-2021&show_icons=true&include_all_commits=true&theme=transparent&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`}
            alt="shihab-2021"
          />
        </div>
      </div>
    </>
  );
}
