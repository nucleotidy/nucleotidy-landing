/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const { createFilePath } = require(`gatsby-source-filesystem`)
 const path = require(`path`)


 exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
   if (stage === 'build-html') {
     actions.setWebpackConfig({
       module: {
         rules: [
           {
             test: /p5/,
             use: loaders.null()
           }
         ]
       }
     })
   }
 }
