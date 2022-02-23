This repo is super simple: `index.mjs` is a short script that uses [capture-website](https://www.npmjs.com/package/capture-website) to take a full-scroll screenshot of each of the 5C schools' COVID dashboards and dumps a dated PNG into the `scs` folder.

If you clone the repo you can run the script manually:
1. `npm i` to install packages
2. `node index.mjs` to run the script

But even more conveniently I have a GitHub Action set up to run the script and push new screenshots to the repository every day at 5 AM UTC.

So if you're just looking for daily screenshots, check out the `scs` folder! (keep in mind that the filename dates mean that the SC was taken at 5 AM on that day in UTC and is probably different from your time zone)
